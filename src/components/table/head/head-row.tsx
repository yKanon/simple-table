import { defineComponent, inject } from "vue";
import { ColumnType } from "../interface";
import { Table_Token } from "../token";
import HeadCell from './head-cell';

const renderThs = (columns: ColumnType[]) => {
  return columns.map((column) => {
    return <HeadCell column={column} />;
  });
};

export default defineComponent({
  name: 'WHeadRow',
  components: { HeadCell },

  setup() {
    const { props } = inject(Table_Token)!;

    return () => {
      return <tr>{renderThs(props.columns)}</tr>
    };
  }
})