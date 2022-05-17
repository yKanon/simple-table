<template>
  <table-lite
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :row-key="(row) => row.address"
    @update:checked-row-keys="handleCheck"
  ></table-lite>
</template>

<script>
export default {
  data() {
    return {
      pagination: {
        pageSize: 10,
      },
      data: {},
      columns: [
        {
          type: 'selection',
          disabled(row, index) {
            return row.name === 'Edward King 3';
          },
        },
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
