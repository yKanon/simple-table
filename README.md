> TableProps

|  名称   | 类型  | 默认值| 说明 |
|  ----  | ----  | ---- | ----- |
| rows | `Array<object>` | `[]` | 需要展示的数据 |
| columns  | `Array<DataTableColumn>` | `[]`  | 需要展示的列 |
| totalRecordCount | `number` | `0`  | 总共数据条数 |
| sortable | `object<Sorter>` | `{ order: '', sort: 'asc' }`  | 配置排序列及算法 |
| messages | `object<PageerInfo>` | `{ pagingInfo: '', gotoPageLabel: '', pageSizeChangeLabel: '', noDataAvailable: ''  }`  | 配置分页功能相关信息 |
| hasCheckbox | `boolean` | `false`  | 是否存在第一列选择框 |
| isLoading | `boolean` | `false` | 是否显示loading状态 |
| isReSearch | `boolean` | `false` | 是否显示搜索按钮 |
| event:doSearch | `(offset, limit, order, sort) => {}` | `() => {}` | 搜索 |
| event:isFinished | `(elements) => {}` | `() => {}` | loading结束触发事件 |
| event:returnCheckedLoads | `(rowsKey) => {}` | `() => {}` | 被选中的rows key |
| event:returnCheckedLoads | `(rowsKey) => {}` | `() => {}` | 被选中的rows key |

> TableColumnProps

|  名称   | 类型  | 默认值| 说明 |
|  ----  | ----  | ---- | ----- |
| width | `string` | `auto` | 列的宽度 |
| label | `string` | `''` | 列名 |
| isKey | `boolean` | `false` | 是否为关键列 |
| sortable | `boolean` | `false` | 是否可排序 |
| display | `(row) => VNode` | `() => ({})` | 渲染单元格 |
| sortable | `boolean` | `false` | 是否可排序 |