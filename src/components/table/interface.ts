export interface ColumnType {
  dataIndex: string; // 列数据在数据项中对应的路径
  title: string;
  sortable?: boolean; // 是否可排序
  width?: number;
}

export interface RecordType {
  key: string;
  [key: string]: unknown;
}

export interface TableProps {
  columns: ColumnType[];
  rows: RecordType[];
}
