<template>
  <div class="loading-mask">
    <div class="loading-content">
      <span style="color: white">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WLoading',

  setup() {
    return {};
  },
};
</script>

<style>
.loading-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.loading-content {
  display: table-cell;
  vertical-align: middle;
}

.loading-icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
