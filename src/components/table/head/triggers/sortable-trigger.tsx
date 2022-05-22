import { defineComponent, inject } from "vue";
import { Table_Token } from "../../token";

export default defineComponent({
  name: "WSortableTrigger",

  props: {
    sortable: {
      type: Boolean,
      default: false
    },
    sorter: {
      type: String,
      default: ""
    }
  },

  setup(props) {
    return () => {
      return (
        <span class={{
          'both': true,
          'sortable': true,
          [props.sorter]: true
        }} />
      );
    }
  }
})