<template>
  <div class="card">
    <w-title ref="tableTitle" v-if="title" :title="title" />
    <div class="card-body">
      <p class="card-title"></p>

      <w-table />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  onBeforeUpdate,
  nextTick,
} from 'vue';

import WTable from './components/table/index.vue';

const sampleData1 = (offst, limit) => {
  offst = offst + 1;
  let data = [];
  for (let i = offst; i <= limit; i++) {
    data.push({
      id: i,
      name: 'TEST' + i,
      email: 'test' + i + '@example.com',
    });
  }
  return data;
};

const sampleData2 = (offst, limit) => {
  let data = [];
  for (let i = limit; i > offst; i--) {
    data.push({
      id: i,
      name: 'TEST' + i,
      email: 'test' + i + '@example.com',
    });
  }
  return data;
};

export default defineComponent({
  name: 'WTable',

  components: {
    WTable,
  },
  setup() {
    // 用戶一覽表設定值
    const table = reactive({
      isLoading: false,
      isReSearch: false,
      columns: [
        {
          label: 'ID',
          field: 'id',
          width: '3%',
          sortable: true,
          isKey: true,
        },
        {
          label: 'Name',
          field: 'name',
          width: '10%',
          sortable: true,
          render: function (row) {
            return (
              '<a href="#" data-id="' +
              row.user_id +
              '" class="name-btn">' +
              row.name +
              '</button>'
            );
          },
        },
        {
          label: 'Email',
          field: 'email',
          width: '15%',
          sortable: true,
        },
        {
          label: '',
          field: 'quick',
          width: '10%',
          display: function (row) {
            return (
              '<button type="button" data-id="' +
              row.user_id +
              '" class="quick-btn">Button</button>'
            );
          },
        },
      ],
      rows: sampleData1(0, 10),
      total: 20,
      sortable: {
        order: 'id',
        sort: 'asc',
      },
      messages: {
        pagingInfo: 'Showing {0}-{1} of {2}',
        pageSizeChangeLabel: 'Row count:',
        gotoPageLabel: 'Go to page:',
        noDataAvailable: 'No data',
      },
    });

    const doSearch = (offset, limit, order, sort) => {
      table.isLoading = true;
      setTimeout(() => {
        table.isReSearch = offset == undefined ? true : false;
        if (limit >= 20) {
          limit = 20;
        }
        if (sort == 'asc') {
          table.rows = sampleData1(offset, limit);
        } else {
          table.rows = sampleData2(offset, limit);
        }
        table.total = 20;
        table.sortable.order = order;
        table.sortable.sort = sort;
      }, 600);
    };

    /**
     * 資料讀取結束事件
     *
     * @param Collection elements 靜態元件
     */
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains('name-btn')) {
          element.addEventListener('click', function () {
            console.log(this.dataset.id + ' name-btn click!!');
          });
        }
        if (element.classList.contains('quick-btn')) {
          // 設定快捷按鈕點擊事件
          element.addEventListener('click', function () {
            console.log(this.dataset.id + ' quick-btn click!!');
          });
        }
      });
    };

    /**
     * 更新目前選上的資料
     */
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };

    return {
      table,
      doSearch,
      tableLoadingFinish,
      updateCheckedRows,
    };
  },
});
</script>

<style scoped>
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  padding: 20px;
}
</style>
