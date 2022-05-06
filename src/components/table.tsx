import { defineComponent, toRefs } from 'vue';
import { type TableProps, type TableBaseColumn, tableProps } from './types';

import { isFunction } from '@vue/shared';

export default defineComponent({
  name: 'WTable',
  props: tableProps,
  setup(props: TableProps, { attrs, emit, slots }) {
    const { columns, data } = toRefs(props);

    const renderTitle = (column: TableBaseColumn) => {
      return isFunction(column.title) ? column.title(column) : column.title;
    };

    return () => {
      return (
        <table>
          {/* 表头 */}
          <thead>
            <th>
              {columns.value.map((column, index) => {
                return <td>{renderTitle(column)}</td>;
              })}
            </th>
          </thead>
          {/* 表体 */}
          <tbody>
            <tr>
              <td>hello table</td>
            </tr>
          </tbody>
        </table>
      );
    };
  },
});
