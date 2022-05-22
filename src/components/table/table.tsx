import { defineComponent, PropType, ref, provide, computed } from 'vue';
import type { TableProps, ColumnType, RecordType } from './interface';
import { useRows } from './hooks/useRows';
import { Table_Token } from './token'
import cloneDeep from 'lodash-es/cloneDeep';

import WHead from './head/head';
import WBody from './body/body';

import './styles/index.css';

const Table = defineComponent({
  name: 'WTable',
  components: {
    WHead,
    WBody,
  },
  props: {
    columns: {
      type: Array as PropType<ColumnType[]>,
      required: true,
    },
    rows: {
      type: Array as PropType<RecordType[]>,
      required: true,
    },
  },
  setup(props, { expose }) {
    const table = ref(null);

    const newRows = computed(() => cloneDeep(props.rows));
    const context = {
      props,
      newRows
    };

    provide(Table_Token, context);
    expose({ table });

    return () => {
      return (
        <table>
          <WHead columns={props.columns} />
          <WBody rows={newRows} columns={props.columns} />
        </table>
      );
    };
  },
});

export default Table;
