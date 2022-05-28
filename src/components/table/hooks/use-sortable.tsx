import { Ref, ComputedRef, computed, watch, reactive } from 'vue';

import { isSpecialBooleanAttr, isPlainObject } from '@vue/shared';
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
export type ActiveSortOrder = TableColumnSortOrder | undefined;
export type ActiveSortConfig = TableColumnSortConfig & {
  key: Key;
  orderBy: ActiveSortOrder;
};
export interface SortableContext {
  handleSort: (key: Key) => void;
  activeOrderMap: Record<Key, ActiveSortOrder | undefined>;
  activeSortConfigs: ComputedRef<ActiveSortConfig[]>;
}

const getNextOrderBy = (
  orders: ActiveSortOrder[],
  currOrderBy?: TableColumnSortOrder
) => {
  if (!currOrderBy) {
    return orders[0];
  }

  return orders[orders.indexOf(currOrderBy) + 1];
};

export const useSortable = ({ clonedColumns }: Params): SortableContext => {
  // 筛选出配置了 sortable 的列
  const sortableColumns = computed(() =>
    clonedColumns.value.filter((column) => column.sortable)
  );
  // 辅助数据结构 { 排序列：排序方式 } map
  const activeOrderMap = reactive<Record<Key, ActiveSortOrder>>({});

  watch(
    sortableColumns,
    (val, _oldVal) => {
      val.forEach((column) => {
        const { sortable, dataIndex } = column;
        const orderBy = sortable!.orderBy;

        if (!isPlainObject(sortable)) {
          console.warn(`请配置 columns.sortable 属性为对象`);
        }

        if (!DEFAULT_ORDERS.includes(orderBy)) {
          console.warn(
            `请配置 column.sortable.orderBy 属性为 'asc' | 'desc' | undefined`
          );
        }

        if (!activeOrderMap[dataIndex]) {
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
    const orderByColumns = sortableColumns.value
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

    if (orderByColumns.length > 1) {
      console.error(`columns 中 sortable.orderBy 有效字段只能配置一个`);
    }

    return orderByColumns;
  });

  const handleSort = (activeDataIndex: Key) => {
    // TODO: 可以扩展自定义排序
    // 默认支持正序、倒序、无序
    const curOrder = activeOrderMap[activeDataIndex];
    const nextOrder = curOrder
      ? getNextOrderBy(DEFAULT_ORDERS, curOrder)
      : ORDER.asc;

    // 保留激活的 dataIndex 的排序方式，并设置为 nextOrder，其他的清空
    Reflect.ownKeys(activeOrderMap).forEach((key) => {
      if (activeDataIndex === key) {
        activeOrderMap[key] = nextOrder;
      } else {
        activeOrderMap[key] = undefined;
      }
    });
  };

  return {
    handleSort,
    activeOrderMap,
    activeSortConfigs,
  };
};
