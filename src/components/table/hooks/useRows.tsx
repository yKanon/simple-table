import { computed, Ref, ComputedRef } from "vue";
import { ColumnType, RecordType, TableProps } from "../interface";

interface Params {
  props: TableProps;
  sorter: Ref<string>;
  rows: ComputedRef<RecordType[]>;
}

export const useRows = ({ props, sorter, rows }: Params) => {

  // 获取第一个需要排序的列
  const needSort = props.columns.find(col => col.sortable);

  const sortData = (rows: Ref<RecordType[]>, col: ColumnType) => {
    rows.value = rows.value.sort((a: RecordType, b: RecordType) => {
      if (sorter.value === 'asc') {
        console.log(col.dataIndex)
        return a[col.dataIndex] - b[col.dataIndex]
      } else if (sorter.value === 'desc') {
        return b[col.dataIndex] - a[col.dataIndex]
      } else {
        return 0
      }
    })
  }

  const sortedRows = computed(() => sortData(rows, needSort!));

  return {
    sortedRows
  }
};