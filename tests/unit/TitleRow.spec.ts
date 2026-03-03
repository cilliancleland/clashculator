import { shallowMount } from '@vue/test-utils';
import TitleRow from '@/components/TitleRow.vue';

describe('TitleRow.vue', () => {
  it('sort button has aria-label="Sort units"', () => {
    const wrapper = shallowMount(TitleRow as any);
    const btn = wrapper.find('button.button-sort');
    expect(btn.exists()).toBe(true);
    expect(btn.attributes('aria-label')).toBe('Sort units');
  });
});
