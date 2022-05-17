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
  props: {
    // 是否讀取中
    isLoading: {
      type: Boolean,
      require: true,
    },
    // 是否執行了重新查詢
    isReSearch: {
      type: Boolean,
      require: true,
    },
    // 有無Checkbox
    hasCheckbox: {
      type: Boolean,
      default: false,
    },
    // 標題
    title: {
      type: String,
      default: '',
    },
    // 欄位
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 資料
    rows: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 一頁顯示筆數
    pageSize: {
      type: Number,
      default: 10,
    },
    // 總筆數
    total: {
      type: Number,
      default: 100,
    },
    // 現在頁數
    page: {
      type: Number,
      default: 1,
    },
    // 排序條件
    sortable: {
      type: Object,
      default: () => {
        return {
          order: 'id',
          sort: 'asc',
        };
      },
    },
    // 顯示文字
    messages: {
      type: Object,
      default: () => {
        return {
          pagingInfo: 'Showing {0}-{1} of {2}',
          pageSizeChangeLabel: 'Row count:',
          gotoPageLabel: 'Go to page:',
          noDataAvailable: 'No data',
        };
      },
    },
  },
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
          display: function (row) {
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
      totalRecordCount: 20,
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
        table.totalRecordCount = 20;
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
