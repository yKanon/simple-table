import { computed, Ref, ComputedRef } from 'vue';

import type { ColumnType, RecordType, Key, TableProps } from '../interface';
import { type ActiveSortConfig } from './use-sortable';
import { ORDER } from '../../../const';
import useState from '../../../hooks/use-state';

interface Params {
  props: TableProps;
  clonedRows: ComputedRef<RecordType[]>;
  activeSortConfigs: ComputedRef<ActiveSortConfig[]>;
}
interface FlowData {
  record: unknown;
  rowKey: Key;
}
export interface RecordContext {
  sortedRows: ComputedRef<RecordType[]>;
}

const sortData = (
  clonedRows: ComputedRef<RecordType[]>,
  activeSortConfigs: ComputedRef<ActiveSortConfig[]>
): RecordType[] => {
  const sorters = activeSortConfigs.value.filter((config) => config.sorter);
  const sorterLen = sorters.length;

  if (sorterLen === 0) {
    return clonedRows.value;
  }

  const tempData = clonedRows.value.slice();
  return tempData.sort((cur, next) => {
    console.log('cur: ', cur);
    for (let index = 0; index < sorterLen; index++) {
      const { orderBy, sorter } = sorters[index];
      const sorterResult = sorter!(cur, next);

      if (sorterResult !== 0) {
        return orderBy === ORDER.asc ? sorterResult : -sorterResult;
      }
    }
    return 0;
  });
};
export const useRows = ({
  props,
  activeSortConfigs,
  clonedRows,
}: Params): RecordContext => {
  // 用来操作的数据
  // let [flowDatas, setFlowDatas] = useState<FlowData[]>();
  // setFlowDatas(
  //   clonedRows.value.map((row) => {
  //     return {
  //       record: row,
  //       rowKey: row.key,
  //     } as FlowData;
  //   })
  // );
  const sortedRows = computed(() => sortData(clonedRows, activeSortConfigs));

  return { sortedRows };
};
