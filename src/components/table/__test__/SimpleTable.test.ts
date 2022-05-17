import { shallowMount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import SimpleTable from '../index.vue';

test('mount component', () => {
  const wrapper = shallowMount(SimpleTable, {
    props: {},
  });

  expect(wrapper.html()).toMatchSnapshot();
});
