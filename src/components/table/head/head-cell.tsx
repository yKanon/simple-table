import { computed, defineComponent, inject, PropType } from "vue";
import { ColumnType } from "../interface";
import WSortableTrigger from './triggers/sortable-trigger';
import { useSortable } from '../hooks/use-sortable'
import { Table_Token } from '../token';
import { useRows } from '../hooks/use-rows';

export default defineComponent({
  name: 'WHeadCell',

  props: {
    column: {
      type: Object as PropType<ColumnType>,
      required: true,
    }
  },

  setup(props) {
    const { handleSort, sorter } = useSortable();
    const { props: tableProps, newRows } = inject(Table_Token)!;


    const handleClick = () => {
      const { sortable } = props.column

      if (sortable) {
        handleSort()
      }
    }

    useRows({
      props: tableProps,
      sorter,
      rows: newRows
    });

    return () => {
      return (
        <th onClick={handleClick}>
          <div class={{
            thWrap: true,
            cursorable: props.column.sortable,
          }}>
            {props.column.title}
            {
              props.column.sortable && <WSortableTrigger sortable={props.column.sortable} sorter={sorter.value} />
            }
          </div>
        </th>
      );
    }
  }
})