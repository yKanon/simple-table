import { type InjectionKey, ComputedRef } from 'vue';
import { RecordType, TableProps, ColumnType } from './interface';
import { type SortableContext } from './hooks/use-sortable';

export interface TableContext extends SortableContext {
  props: TableProps;
  clonedRows: ComputedRef<RecordType[]>;
  clonedColumns: ComputedRef<ColumnType[]>;
}

export const Table_Token: InjectionKey<TableContext> = Symbol('Table_Token');
