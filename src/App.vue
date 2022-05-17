<template>
  <table-lite></table-lite>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import TableLite from './table-lite.vue';

export default defineComponent({
  name: 'App',
  components: {
    TableLite,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
