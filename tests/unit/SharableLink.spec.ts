import { shallowMount } from '@vue/test-utils';
import SharableLink from '@/components/SharableLink.vue';
import { vi } from 'vitest';

const baseProps = { sharable: 'http://test.link', showToastr: vi.fn() };

describe('SharableLink.vue', () => {
  it('renders the sharable input with the correct value', () => {
    const wrapper = shallowMount(SharableLink as any, {
      props: { sharable: 'http://test.link', showToastr: vi.fn() },
    });
    const input = wrapper.find('input.sharable-input');
    expect(input.exists()).toBe(true);
    expect((input.element as HTMLInputElement).value).toBe('http://test.link');
    expect(input.attributes('readonly')).toBeDefined();
    expect(input.classes()).toContain('sharable-input');
  });

  it('calls show-toastr when copyToClip is called', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      props: { ...baseProps },
    });
    // Mock $refs
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = vi.fn();
    await (wrapper.vm as any).copyToClip();
    expect(baseProps.showToastr).toHaveBeenCalledWith('Sharing link copied to clipboard');
  });

  it('does not throw if sharableInput ref is missing', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      props: { ...baseProps },
    });
    wrapper.vm.$refs.sharableInput = undefined;
    expect(async () => {
      await (wrapper.vm as any).copyToClip();
    }).not.toThrow();
  });

  it('has a button with aria-label="Copy sharing link"', () => {
    const wrapper = shallowMount(SharableLink as any, {
      props: { ...baseProps },
    });
    const btn = wrapper.find('button[aria-label="Copy sharing link"]');
    expect(btn.exists()).toBe(true);
  });

  it('calls show-toastr when copy button is clicked', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      props: { ...baseProps },
    });
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = vi.fn();
    const btn = wrapper.find('button[aria-label="Copy sharing link"]');
    await btn.trigger('click');
    expect(baseProps.showToastr).toHaveBeenCalledWith('Sharing link copied to clipboard');
  });

  it('calls show-toastr when input is clicked', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      props: { ...baseProps },
    });
    wrapper.vm.$refs.sharableInput = document.createElement('input');
    document.execCommand = vi.fn();
    const input = wrapper.find('input.sharable-input');
    await input.trigger('click');
    expect(baseProps.showToastr).toHaveBeenCalledWith('Sharing link copied to clipboard');
  });

  it('updates input value when sharable prop changes', async () => {
    const wrapper = shallowMount(SharableLink as any, {
      props: { ...baseProps },
    });
    await wrapper.setProps({ sharable: 'http://new.link' });
    const input = wrapper.find('input.sharable-input');
    expect((input.element as HTMLInputElement).value).toBe('http://new.link');
  });
});
