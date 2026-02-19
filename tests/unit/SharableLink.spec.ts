import { shallowMount } from '@vue/test-utils';
import SharableLink from '@/components/SharableLink.vue';

describe('SharableLink.vue', () => {
  it('renders the sharable input with the correct value', () => {
    const wrapper = shallowMount(SharableLink, {
      propsData: { sharable: 'http://test.link', showToastr: jest.fn() },
    });
    const input = wrapper.find('input.sharable-input');
    expect(input.exists()).toBe(true);
    expect((input.element as HTMLInputElement).value).toBe('http://test.link');
    expect(input.attributes('readonly')).toBeDefined();
    expect(input.classes()).toContain('sharable-input');
  });

  it('emits show-toastr when copyToClip is called', async () => {
    const wrapper = shallowMount(SharableLink, {
      propsData: { sharable: 'http://test.link', showToastr: jest.fn() },
    });
    // Mock $refs
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = jest.fn();
    await (wrapper.vm as any).copyToClip();
    expect(wrapper.emitted('show-toastr')).toBeTruthy();
    expect(wrapper.emitted('show-toastr')?.[0]?.[0]).toBe('Sharing link copied to clipboard');
  });

  it('does not throw if sharableInput ref is missing', async () => {
    const wrapper = shallowMount(SharableLink, {
      propsData: { sharable: 'http://test.link', showToastr: jest.fn() },
    });
    wrapper.vm.$refs.sharableInput = undefined;
    expect(async () => {
      await (wrapper.vm as any).copyToClip();
    }).not.toThrow();
  });

  it('emits show-toastr when icon is clicked', async () => {
    const wrapper = shallowMount(SharableLink, {
      propsData: { sharable: 'http://test.link', showToastr: jest.fn() },
    });
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = jest.fn();
    const icon = wrapper.find('i.fa-link');
    await icon.trigger('click');
    expect(wrapper.emitted('show-toastr')).toBeTruthy();
  });

  it('emits show-toastr when input is clicked', async () => {
    const wrapper = shallowMount(SharableLink, {
      propsData: { sharable: 'http://test.link', showToastr: jest.fn() },
    });
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = jest.fn();
    const input = wrapper.find('input.sharable-input');
    await input.trigger('click');
    expect(wrapper.emitted('show-toastr')).toBeTruthy();
  });

  it('updates input value when sharable prop changes', async () => {
    const wrapper = shallowMount(SharableLink, {
      propsData: { sharable: 'http://test.link', showToastr: jest.fn() },
    });
    await wrapper.setProps({ sharable: 'http://new.link' });
    const input = wrapper.find('input.sharable-input');
    expect((input.element as HTMLInputElement).value).toBe('http://new.link');
  });
});
