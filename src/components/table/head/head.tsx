import { defineComponent } from 'vue';
import HeadRow from './head-row';

export default defineComponent({
  name: 'WHead',

  setup() {
    return () => {
      return (
        <thead>
          <HeadRow />
        </thead>
      );
    };
  },
});
