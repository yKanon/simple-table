> TableProps

|  名称   | 类型  | 默认值| 说明 |
|  ----  | ----  | ---- | ----- |
| rows | `Array<object>` | `[]` | 需要展示的数据 |
| columns  | `Array<DataTableColumn>` | `[]`  | 需要展示的列 |
| totalRecordCount | `number` | `0`  | 总共数据条数 |
| sortable | `object<Sorter>` | `{ order: '', sort: 'asc' }`  | 配置排序列及排序方式 |
| rowSelection | `object` | `null`  | 选择功能的配置 |
| isLoading | `boolean` | `false` | 是否显示loading状态 |

> column: 列描述数据对象，columns中的一项

|  名称   | 类型  | 默认值| 说明 |
|  ----  | ----  | ---- | ----- |
| render | `Function(record, rowIndex, column)` | `-` | 自定义单元格 |
| width | `string` | `auto` | 列的宽度 |
| minWidth | `string` | `auto` | 最小列宽 |
| label | `string` | `false` | 列头显示名字 |
| sortable | `boolean` | `false` | 是否启用排序 |

> messages: 分页信息显示文本

|  名称   | 类型  | 默认值| 说明 |
|  ----  | ----  | ---- | ----- |
| pagingInfo | `string` | `''` | 分页 |
| pageSizeChangeLabel | `string` | `''` | 总条数 |
| gotoPageLabel | `string` | `''` | 跳转至页码 |
| noDataAvailable | `string` | `''` | 没有数据 |

> rowSelection: 选择功能的配置
| 名称 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| selectedRowKeys | `string[]` | `[]` | 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数 |
| onChange | `Function(selectedRowKeys, selectedRows)` | `''` | 选中项发生变化时的回调 |

> pagination: 分页
| 名称 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| messages | `object<PageerInfo>` | `{ pagingInfo: '', gotoPageLabel: '', pageSizeChangeLabel: '', noDataAvailable: ''  }`  | 配置分页功能相关信息 |
| total | `number` | `0` | 数据总数 |
| pageSize | `number` | `0` | 每页条数 |
| change事件 | `Function(page, pageSize)` | `noop` | 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数 |

> 事件

| 事件名称 | 回调参数 | 说明 |
| ---- | ---- | ---- |
| change | `Function(pagination, filters, sorter, { currentDataSource })` | 分页、排序、筛选变化时触发 |