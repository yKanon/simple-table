<template>
  <table-lite :rows="rows" :columns="columns" />
</template>

<script>
import { defineComponent } from 'vue';
import TableLite from './components/table/table.tsx';
import { useMock } from './hooks/useMock.tsx';

export default defineComponent({
  name: 'App',
  components: {
    TableLite,
  },

  setup() {
    const { rows, columns } = useMock();

    return {
      rows,
      columns,
    }
  }
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
