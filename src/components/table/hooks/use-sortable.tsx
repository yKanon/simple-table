import { Ref, ComputedRef, computed, watch, reactive } from 'vue';

// import {  } from '@vue/shared';
import useState from '../../../hooks/use-state';

import { ORDER, DEFAULT_ORDERS } from '../../../const';

import {
  Key,
  RecordType,
  ColumnType,
  TableColumnSortConfig,
  TableColumnSortOrder,
} from '../interface';

interface Params {
  clonedColumns: ComputedRef<ColumnType[]>;
}
type ActiveSortOrder = TableColumnSortOrder | undefined;
export type ActiveSortConfig = TableColumnSortConfig & {
  key: Key;
  orderBy: ActiveSortOrder;
};

// 默认支持正序、倒序、无序
const getNextOrderBy = (
  orders: ActiveSortOrder[],
  currOrderBy?: TableColumnSortOrder
) => {
  if (!currOrderBy) {
    return orders[0];
  }

  return orders[orders.indexOf(currOrderBy) + 1];
};

export const useSortable = ({ clonedColumns }: Params) => {
  // 筛选出配置了 sortable 的列
  const sortableColumns = computed(() =>
    clonedColumns.value.filter((column) => column.sortable)
  );
  // 辅助数据结构 { 排序列：排序方式 } map
  const activeOrderMap = reactive<Record<Key, ActiveSortOrder>>({});
  // const [activeOrderMap, setActiveOrderMap] = useState({});
  watch(
    sortableColumns,
    (val, oldVal) => {
      val.forEach((column) => {
        const { sortable, dataIndex } = column;
        const orderBy = sortable!.orderBy;

        if (!activeOrderMap[dataIndex] || orderBy) {
          activeOrderMap[dataIndex] = orderBy;
        }
      });
    },
    {
      immediate: true,
    }
  );

  // 筛选出有有效排序规则的配置
  const activeSortConfigs = computed(() => {
    return sortableColumns.value
      .map((column) => {
        const { dataIndex, sortable } = column;
        const { orderBy = activeOrderMap[dataIndex], sorter } = sortable!;

        return {
          key: dataIndex,
          sorter,
          orderBy,
        } as ActiveSortConfig;
      })
      .filter((item) => item.orderBy);
  });

  const;
  const handleSort = (
    activeDataIndex: Key,
    activeSortConfig: TableColumnSortConfig
  ) => {
    // TODO: 可以扩展自定义排序
    // const { orders } = activeSortConfig;
    const curOrder = activeOrderMap[activeDataIndex];
    const nextOrder = curOrder
      ? getNextOrderBy(DEFAULT_ORDERS, curOrder)
      : ORDER.asc;
  };

  return {
    handleSort,
    activeOrderMap,
    activeSortConfigs,
  };
};
