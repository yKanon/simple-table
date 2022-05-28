import {
  defineComponent,
  inject,
  PropType,
  computed,
  normalizeClass,
} from 'vue';
import { Table_Token } from '../../token';

import type { ActiveSortOrder } from '../../hooks/use-sortable';

export default defineComponent({
  name: 'WSortableTrigger',

  props: {
    activeOrderBy: {
      type: String as PropType<ActiveSortOrder>,
      default: undefined,
    },
  },

  setup(props) {
    const classes = computed(() => {
      const { activeOrderBy } = props;
      let classes: Record<string, boolean> = {
        sortable: true,
        [activeOrderBy ?? 'both']: true, // 默认展示上下箭头
      };

      return normalizeClass(classes);
    });

    return () => {
      return <span class={classes.value} />;
    };
  },
});
