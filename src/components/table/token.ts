import { type InjectionKey, ComputedRef } from 'vue';
import { RecordType, TableProps } from './interface';

export interface TableContext {
  props: TableProps;
  newRows: ComputedRef<RecordType[]>;
}

export const Table_Token: InjectionKey<TableContext> = Symbol('Table_Token');
