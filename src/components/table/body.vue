<template>
  <tbody>
    <tr v-for="(row, i) in rows" :key="i">
      <td v-if="hasCheckbox">
        <div>
          <input
            type="checkbox"
            :ref="
              (el) => {
                rowCheckbox[i] = el;
              }
            "
            :value="row[setting.keyColumn]"
            @click="checked"
          />
        </div>
      </td>
      <td v-for="(col, j) in columns" :key="j">
        <div v-if="col.display" v-html="col.display(row)"></div>
        <span v-else>{{ row[col.field] }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'WBody',

  props: {
    hasCheckBox: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
