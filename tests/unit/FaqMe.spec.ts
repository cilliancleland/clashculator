import { shallowMount } from '@vue/test-utils';
import FaqMe from '@/components/FaqMe.vue';

describe('FaqMe.vue', () => {
  it('contains no deprecated <a name> elements', () => {
    const wrapper = shallowMount(FaqMe as any);
    const nameAnchors = wrapper.findAll('a[name]');
    expect(nameAnchors.length).toBe(0);
  });

  it('headings have id attributes for in-page navigation', () => {
    const wrapper = shallowMount(FaqMe as any);
    expect(wrapper.find('#what').exists()).toBe(true);
    expect(wrapper.find('#print').exists()).toBe(true);
    expect(wrapper.find('#save').exists()).toBe(true);
    expect(wrapper.find('#sort').exists()).toBe(true);
    expect(wrapper.find('#share').exists()).toBe(true);
  });
});
