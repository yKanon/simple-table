import { ExtractPropTypes, PropType, VNodeChild } from 'vue';

export type TableColumnTitle =
  | string
  | ((column: TableBaseColumn) => VNodeChild);
export type InternalRowData = {
  [key: string]: unknown;
};
export type TableBaseColumn<T = InternalRowData> = {
  title?: TableColumnTitle;
  key: string;
};
export type TableColumn<T = InternalRowData> = TableBaseColumn;
export type TableColumns<T = InternalRowData> = Array<TableColumn<T>>;

//  定义 Props
export const tableProps = {
  pagination: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array as PropType<TableColumns>,
    required: true,
  },
} as const;

export type TableProps = ExtractPropTypes<typeof tableProps>;
