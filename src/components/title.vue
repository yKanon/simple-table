<template>
  <div class="card-header">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'WTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {};
  },
};
</script>
