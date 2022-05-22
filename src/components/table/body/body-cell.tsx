import { defineComponent, PropType } from "vue";
import { RecordType, ColumnType } from '../interface';

export default defineComponent({
  name: 'WBodyCell',

  props: {
    row: {
      type: Object as PropType<RecordType>,
      required: true,
    },
    column: {
      type: Object as PropType<ColumnType>,
      required: true,
    }
  },

  setup(props) {
    const { row, column } = props

    return () => {
      return <td>{row[column.dataIndex]}</td>
    }
  }
})