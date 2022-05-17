<template>
  <div class="row" v-if="rows.length > 0">
    <div class="col-sm-12 col-md-4">
      <div role="status" aria-live="polite">
        {{ messages.pagingInfo.format(setting.offset, setting.limit, total) }}
      </div>
    </div>
    <div class="col-sm-12 col-md-4">
      <span>{{ messages.pageSizeChangeLabel }}</span>
      <select v-model="setting.pageSize">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <span>{{ messages.gotoPageLabel }}</span>
      <select v-model="setting.page">
        <option v-for="n in setting.maxPage" :key="n">{{ n }}</option>
      </select>
    </div>
    <div class="col-sm-12 col-md-4">
      <div
        class="dataTables_paginate paging_simple_numbers"
        id="dataTables-example_paginate"
      >
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: setting.page <= 1 }">
            <a
              class="page-link"
              href="javascript:void(0)"
              aria-label="Previous"
              @click="setting.page = 1"
            >
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">First</span>
            </a>
          </li>
          <li class="page-item" :class="{ disabled: setting.page <= 1 }">
            <a
              class="page-link"
              href="javascript:void(0)"
              aria-label="Previous"
              @click="prevPage"
            >
              <span aria-hidden="true">&lt;</span>
              <span class="sr-only">Prev</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="n in setting.pagging"
            :key="n"
            :class="{ disabled: setting.page == n }"
          >
            <a
              class="page-link"
              href="javascript:void(0)"
              @click="movePage(n)"
              >{{ n }}</a
            >
          </li>
          <li
            class="page-item"
            :class="{ disabled: setting.page >= setting.maxPage }"
          >
            <a
              class="page-link"
              href="javascript:void(0)"
              aria-label="Next"
              @click="nextPage"
            >
              <span aria-hidden="true">&gt;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: setting.page >= setting.maxPage }"
          >
            <a
              class="page-link"
              href="javascript:void(0)"
              aria-label="Next"
              @click="setting.page = setting.maxPage"
            >
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Last</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-sm-12 text-center">
      {{ messages.noDataAvailable }}
    </div>
  </div>
</template>

<script>
String.prototype.format = function () {
  var args = arguments;
  return this.replace(/{([0-9]*)}/g, function (match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

export default {
  name: 'WPagination',

  props: {
    setting: {
      type: Object,
      default: () => ({}),
    },
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
