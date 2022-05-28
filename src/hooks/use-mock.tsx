import type { RecordType, ColumnType } from '../components/table/interface';

export const useMock = () => {
  const rows: RecordType[] = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '吴彦祖',
      age: 42,
      address: '西湖区湖底公园3号',
    },
  ];

  const columns: ColumnType[] = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      sortable: {
        orderBy: 'desc',
      },
    },
    {
      title: '住址',
      dataIndex: 'address',
      sortable: {},
    },
  ];

  return {
    rows,
    columns,
  };
};
