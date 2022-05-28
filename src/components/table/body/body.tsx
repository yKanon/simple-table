import { ComputedRef, defineComponent, inject } from 'vue';
import { RecordType, ColumnType } from '../interface';
import { Table_Token } from '../token';
import WBodyRow from './body-row';

const renderRecords = (
  rows: ComputedRef<RecordType[]>,
  columns: ComputedRef<ColumnType[]>
) => {
  return rows.value.map((row) => {
    return <WBodyRow row={row} />;
  });
};

export default defineComponent({
  name: 'WBody',

  setup() {
    const { clonedRows, clonedColumns } = inject(Table_Token)!;
    const records = renderRecords(clonedRows, clonedColumns);

    return () => {
      return <tbody>{records}</tbody>;
    };
  },
});
