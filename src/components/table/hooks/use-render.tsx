import { ColumnType, RecordType } from '../interface';

// export const useRenderThs = (columns: ColumnType[]) => {
//   return columns.map((column) => {
//     return <th>{column.title}</th>;
//   });
// };

export const useRenderTds = (row: RecordType, columns: ColumnType[]) => {
  return columns.map((column) => {
    return <td>{row[column.dataIndex]}</td>;
  });
};

export const useRenderRecords = (rows: RecordType[], columns: ColumnType[]) => {
  return rows.map((row) => {
    return (
      <tr>
        {useRenderTds(row, columns)}
      </tr>
    );
  });
};
