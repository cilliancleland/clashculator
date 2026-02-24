import { shallowMount } from '@vue/test-utils';
import ToastrBar from '@/components/ToastrBar.vue';

describe('ToastrBar.vue', () => {
  it('renders the message when provided', () => {
    const wrapper = shallowMount(ToastrBar as any, {
      props: { message: 'Test message' },
    });
    expect(wrapper.text()).toContain('Test message');
    expect(wrapper.classes()).toContain('toastr-visible');
  });

  it('does not have toastr-visible class when message is empty', () => {
    const wrapper = shallowMount(ToastrBar as any, {
      props: { message: '' },
    });
    expect(wrapper.classes()).not.toContain('toastr-visible');
  });
});
