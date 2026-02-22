import { shallowMount } from '@vue/test-utils';
import SharableLink from '@/components/SharableLink.vue';
import { vi } from 'vitest';

const baseProps = { sharable: 'http://test.link', showToastr: vi.fn() };

describe('SharableLink.vue', () => {
  it('renders the sharable input with the correct value', () => {
    const wrapper = shallowMount(SharableLink as any, {
      propsData: { sharable: 'http://test.link', showToastr: vi.fn() },
    });
    const input = wrapper.find('input.sharable-input');
    expect(input.exists()).toBe(true);
    expect((input.element as HTMLInputElement).value).toBe('http://test.link');
    expect(input.attributes('readonly')).toBeDefined();
    expect(input.classes()).toContain('sharable-input');
  });

  it('calls show-toastr when copyToClip is called', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      propsData: { ...baseProps },
    });
    // Mock $refs
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = vi.fn();
    await (wrapper.vm as any).copyToClip();
    expect(baseProps.showToastr).toHaveBeenCalledWith('Sharing link copied to clipboard');
  });

  it('does not throw if sharableInput ref is missing', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      propsData: { ...baseProps },
    });
    wrapper.vm.$refs.sharableInput = undefined;
    expect(async () => {
      await (wrapper.vm as any).copyToClip();
    }).not.toThrow();
  });

  it('calls show-toastr when icon is clicked', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      propsData: { ...baseProps },
    });
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = vi.fn();
    const icon = wrapper.find('i.fa-link');
    await icon.trigger('click');
    expect(baseProps.showToastr).toHaveBeenCalledWith('Sharing link copied to clipboard');
  });

  it('calls show-toastr when input is clicked', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      propsData: { ...baseProps },
    });
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = vi.fn();
    const input = wrapper.find('input.sharable-input');
    await input.trigger('click');
    expect(baseProps.showToastr).toHaveBeenCalledWith('Sharing link copied to clipboard');
  });

  it('updates input value when sharable prop changes', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      propsData: { ...baseProps },
    });
    await wrapper.setProps({ sharable: 'http://new.link' });
    const input = wrapper.find('input.sharable-input');
    expect((input.element as HTMLInputElement).value).toBe('http://new.link');
  });
});
