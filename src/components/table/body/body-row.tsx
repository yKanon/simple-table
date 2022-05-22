import { defineComponent, inject, PropType } from "vue";
import { Table_Token } from '../token';
import WBodyCell from './body-cell';
import { RecordType, ColumnType } from '../interface';

const renderTds = (row: RecordType, columns: ColumnType[]) => {
  return columns.map((column) => {
    return <WBodyCell column={column} row={row} />
  });
};

export default defineComponent({
  name: 'WBodyRow',

  props: {
    row: {
      type: Object as PropType<RecordType>,
      required: true,
    }
  },

  setup(props) {
    const { props: tableProps } = inject(Table_Token)!;

    return () => {
      return (
        <tr>{renderTds(props.row, tableProps.columns)}</tr>
      )
    }
  }
})