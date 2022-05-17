<template>
  <table-lite
    :columns="columns"
    :data="data"
    :pagination="pagination"
  ></table-lite>
</template>

<script>
export default {
  data() {
    return {
      pagination: {
        pageSize: 10,
      },
      data: [
        {
          key: 0,
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          anotherAddress: 'New York No. 1 Lake Park',
        },
        {
          key: 1,
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          anotherAddress: 'New York No. 1 Lake Park',
        },
        {
          key: 2,
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          anotherAddress: 'New York No. 1 Lake Park',
        },
      ],
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
          width: 100,
          ellipsis: {
            tooltip: true,
          },
        },
        {
          title: 'Another Address',
          key: 'anotherAddress',
          width: 100,
          ellipsis: {
            tooltip: true,
          },
        },
      ],
    };
  },
  methods: {
    handleCheck(checkedRowKeys) {
      console.log(checkedRowKeys);
    },
  },
};
</script>

<style lang="scss" scoped></style>
