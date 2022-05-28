import {
  computed,
  defineComponent,
  inject,
  PropType,
  normalizeClass,
  VNodeChild,
  Fragment,
} from 'vue';
import { ColumnType, RenderResult, Child, Children } from '../interface';
import WSortableTrigger from './triggers/sortable-trigger';
import { useSortable } from '../hooks/use-sortable';
import { Table_Token } from '../token';
import { useRows } from '../hooks/use-rows';

export default defineComponent({
  name: 'WHeadCell',

  props: {
    column: {
      type: Object as PropType<ColumnType>,
      required: true,
    },
  },

  setup(props) {
    const {
      props: tableProps,
      activeOrderMap,
      handleSort,
    } = inject(Table_Token)!;

    // 获取当前列的排序配置
    const activeOrderBy = computed(() => {
      return activeOrderMap[props.column.dataIndex];
    });
    const classes = computed(() => {
      const { sortable } = props.column;
      let classes: Record<string, boolean> = {
        thWrap: true,
        cursorable: !!props.column.sortable, // 配置了 sortable 则可点击，cursor: pointer
      };

      return normalizeClass(classes);
    });

    const renderChild = (column: ColumnType) => {
      let child: Child = column.title;

      return child;
    };

    const renderSortableTrigger = (column: ColumnType): Child => {
      if (!column.sortable) {
        return;
      }

      return (
        <WSortableTrigger
          column={column}
          activeOrderBy={activeOrderBy.value}
          handleSort={handleSort}
        />
      );
    };

    const handleClick = () => {
      const { dataIndex, sortable } = props.column;

      if (sortable) {
        handleSort(dataIndex);
      }
    };

    return () => {
      let child: Child;
      // 渲染 title
      child = renderChild(props.column);
      if (props.column.sortable) {
        child = (
          <Fragment>
            <span onClick={handleClick}>{child}</span>
            {renderSortableTrigger(props.column)}
          </Fragment>
        );
      }

      return <th onClick={handleClick}>{child}</th>;
    };
  },
});
