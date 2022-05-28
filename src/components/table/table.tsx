import { defineComponent, PropType, ref, provide, computed } from 'vue';

import WHead from './head/head';
import WBody from './body/body';

import cloneDeep from 'lodash-es/cloneDeep';
import { Table_Token } from './token';
import './styles/index.css';

import { useSortable } from './hooks/use-sortable';
import { useRows } from './hooks/use-rows';

import type { TableProps, ColumnType, RecordType } from './interface';

const Table = defineComponent({
  name: 'WTable',
  components: {
    WHead,
    WBody,
  },
  props: {
    columns: {
      type: Array as PropType<ColumnType[]>,
      required: true,
    },
    rows: {
      type: Array as PropType<RecordType[]>,
      required: true,
    },
  },
  setup(props, { expose }) {
    const table = ref(null);

    // 防止修改用户传入数据，减小副作用
    const clonedRows = computed(() => cloneDeep(props.rows));
    const clonedColumns = computed(() => cloneDeep(props.columns));

    const sortableContext = useSortable({ clonedColumns });
    const { sortedRows } = useRows({
      props,
      clonedRows,
      activeSortConfigs: sortableContext.activeSortConfigs,
    });

    const context = {
      props,
      clonedRows: sortedRows,
      clonedColumns,
      ...sortableContext,
    };

    provide(Table_Token, context);
    expose({ table });

    return () => {
      return (
        <table>
          <WHead />
          <WBody />
        </table>
      );
    };
  },
});

export default Table;
