<template>
  <thead class="thead-dark">
    <tr>
      <th v-if="hasCheckbox" class="checkbox-th">
        <div>
          <input type="checkbox" v-model="isCheckAll" />
        </div>
      </th>
      <th
        v-for="(col, index) in columns"
        :key="index"
        :style="{
          width: col.width ? col.width : 'auto',
        }"
      >
        <div
          :class="{
            sortable: col.sortable,
            both: col.sortable,
            asc: sortable.order == col.field && sortable.sort == 'asc',
            desc: sortable.order == col.field && sortable.sort == 'desc',
          }"
          @click="col.sortable ? doSort(col.field) : false"
        >
          {{ col.label }}
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'WHead',

  props: {
    hasCheckbox: {
      type: Boolean,
      default: false,
    },
    setting: {
      type: Object,
      default: () => ({
        isCheckAll: false,
      }),
    },
    columns: {
      type: Array,
      default: () => [],
    },
    sortable: {
      type: Object,
      default: () => ({
        order: 'id',
        sort: 'asc',
      }),
    },
  },
  emits: ['doSearch'],

  setup(props, { emit }) {
    const isCheckAll = ref(props.setting.isCheckAll);
    /**
     * 进行排序
     */
    const doSort = (order) => {
      let sort = 'asc';
      if (order == props.sortable.order) {
        // 排序中的項目時
        if (props.sortable.sort == 'asc') {
          sort = 'desc';
        }
      }
      let offset = (props.setting.page - 1) * props.setting.pageSize;
      let limit = props.setting.page * props.setting.pageSize;
      emit('do-search', offset, limit, order, sort);

      // 清空畫面上選擇的資料
      if (props.setting.isCheckAll) {
        // 取消全選時自然會清空
        props.setting.isCheckAll = false;
      } else {
        if (props.hasCheckbox) {
          clearChecked();
        }
      }
    };

    return {
      isCheckAll,
      doSort,
    };
  },
};
</script>

<style>
.checkbox-th {
  width: 1%;
}

.table .thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
}

.sortable {
  cursor: pointer;
  background-position: right;
  background-repeat: no-repeat;
  padding-right: 30px !important;
}

.asc {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==);
}

.desc {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII=);
}

.both {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7X QMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC');
}
</style>
