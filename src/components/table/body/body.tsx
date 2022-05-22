import { defineComponent, inject } from 'vue';
import { RecordType, ColumnType } from '../interface';
import { Table_Token } from '../token';
import WBodyRow from './body-row';

const renderRecords = (rows: RecordType[], columns: ColumnType[]) => {
  return rows.map((row) => {
    return (
      <WBodyRow row={row} />
    );
  });
};

export default defineComponent({
  name: 'WBody',

  setup() {
    const { props } = inject(Table_Token)!;
    const records = renderRecords(props.rows, props.columns);

    return () => {
      return <tbody>{records}</tbody>;
    };
  },
});
