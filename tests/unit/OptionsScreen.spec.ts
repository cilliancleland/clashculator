import { shallowMount } from '@vue/test-utils';
import OptionsScreen from '@/components/OptionsScreen.vue';


const propsData = {
  sorting: 'auto',
  defaultNumber: 0,
  autoNumber: false,
  showDeployTable: false,
};

describe('OptionsScreen.vue', () => {
  it('renders sorting options and emits event on change', async () => {
    const wrapper = shallowMount(OptionsScreen, {
      propsData: { ...propsData },
    });

    const manualOption = wrapper.find('input#sorting-manual');
    const autoOption = wrapper.find('input#sorting-auto');

    expect(manualOption.exists()).toBe(true);
    expect(autoOption.exists()).toBe(true);
    expect((manualOption.element as HTMLInputElement).checked).toBe(false);
    expect((autoOption.element as HTMLInputElement).checked).toBe(true);
    await manualOption.setChecked();
    expect(wrapper.emitted('set-option')).toBeTruthy();
    expect(wrapper.emitted('set-option')?.[0]).toEqual(['sorting', 'manual']);
  });

  it('renders default number input and emits event on change', async () => {
    const wrapper = shallowMount(OptionsScreen, {
      propsData: { ...propsData },
    });

    const defaultNumberInput = wrapper.find('input#defaultNumber');
    expect(defaultNumberInput.exists()).toBe(true);
    expect((defaultNumberInput.element as HTMLInputElement).value).toBe('0');
    await defaultNumberInput.setValue('5');
    expect(wrapper.emitted('set-option')).toBeTruthy();
    expect(wrapper.emitted('set-option')?.[0]).toEqual(['defaultNumber', '5']);
  });

  it('renders auto number checkbox and emits event on change', async () => {
    const wrapper = shallowMount(OptionsScreen, {
      propsData: { ...propsData },
    });

    const autoNumberCheckbox = wrapper.find('input#autoNumber');
    expect(autoNumberCheckbox.exists()).toBe(true);
    expect((autoNumberCheckbox.element as HTMLInputElement).checked).toBe(false);
    await autoNumberCheckbox.setChecked();
    expect(wrapper.emitted('set-option')).toBeTruthy();
    expect(wrapper.emitted('set-option')?.[0]).toEqual(['autoNumber', true]);
  });

  it('renders show deploy table checkbox and emits event on change', async () => {
    const wrapper = shallowMount(OptionsScreen, {
      propsData: { ...propsData },
    });

    const showDeployTableCheckbox = wrapper.find('input#showDeployTable');
    expect(showDeployTableCheckbox.exists()).toBe(true);
    expect((showDeployTableCheckbox.element as HTMLInputElement).checked).toBe(false);
    await showDeployTableCheckbox.setChecked();
    expect(wrapper.emitted('set-option')).toBeTruthy();
    expect(wrapper.emitted('set-option')?.[0]).toEqual(['showDeployTable', true]);
  });

  it('emits no-options when close button is clicked', async () => {
    const wrapper = shallowMount(OptionsScreen, {
      propsData: { ...propsData },
    });

    const closeButton = wrapper.find('button#close-button');
    expect(closeButton.exists()).toBe(true);
    await closeButton.trigger('click');
    expect(wrapper.emitted('no-options')).toBeTruthy();
  });
});
