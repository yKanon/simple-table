export type Key = string | number | symbol;

export interface TableProps {
  columns: ColumnType[];
  rows: RecordType[];
}

export interface ColumnType {
  dataIndex: string; // 列数据在数据项中对应的路径
  title: string;
  sortable?: TableColumnSortConfig; // 是否可排序
  width?: number;
}

export interface RecordType {
  key: string;
  [key: string]: unknown;
}

export type Sorter<T> = (cur: T, prev: T) => number;
export type TableColumnSortOrder = 'asc' | 'desc';
export interface TableColumnSortConfig<T = unknown> {
  orderBy?: TableColumnSortOrder; // 当前排序规则
  // orders?: TableColumnSortOrder[]; // 支持的排序方式
  sorter?: Sorter<T>; // 自定义排序函数
}
