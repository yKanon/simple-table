import { computed, Ref, ComputedRef } from 'vue';

import type { ColumnType, RecordType, Key, TableProps } from '../interface';
import { type ActiveSortConfig } from './use-sortable';

interface Params {
  props?: TableProps;
  activeSorter?: Ref<string>;
  clonedRows?: ComputedRef<RecordType[]>;
}

export const useRows = ({ props, activeSorter, clonedRows }: Params) => {
  // 获取第一个需要排序的列
  const needSort = props!.columns.find((col) => col.sortable);

  const sortData = (rows: Ref<RecordType[]>, col: ColumnType) => {
    // rows.value = rows.value.sort((a: RecordType, b: RecordType) => {
    //   if (sorter.value === 'asc') {
    //     console.log(col.dataIndex)
    //     return a[col.dataIndex] - b[col.dataIndex]
    //   } else if (sorter.value === 'desc') {
    //     return b[col.dataIndex] - a[col.dataIndex]
    //   } else {
    //     return 0
    //   }
    // })
  };

  const sortedRows = computed(() => sortData(rows, needSort!));

  return {
    sortedRows,
  };
};
