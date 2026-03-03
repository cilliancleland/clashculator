import { shallowMount } from '@vue/test-utils';
import IntroScreen from '@/components/IntroScreen.vue';
import { vi } from 'vitest';

const props = {
  selectedNation: '',
  selectedPeriod: '',
  periods: ['period1', 'period2'],
  lists: { period1: [], period2: [] },
  localSaves: ['save1', 'save2'],
  savedName: '',
  loadArmy: vi.fn(),
  selectNation: vi.fn(),
  selectPeriod: vi.fn(),
};

describe('IntroScreen.vue', () => {
  it('renders the select options for armySelect and saveSelect', () => {
    const wrapper = shallowMount(IntroScreen as any, {
      props: { ...props },
    });
    const armySelect = wrapper.find('select#armySelect');
    const saveSelect = wrapper.find('select#saveSelect');
    expect(armySelect.exists()).toBe(true);
    expect(saveSelect.exists()).toBe(true);
    const armyOptions = armySelect.findAll('option');
    const saveOptions = saveSelect.findAll('option');
    expect(armyOptions.length).toBe(Object.keys(props.lists).length + 1);
    expect(saveOptions.length).toBe(props.localSaves.length + 1);
    // check they fire an event with selected
    armySelect.trigger('change');
    expect(props.selectNation).toHaveBeenCalled();
    saveSelect.trigger('change');
    expect(props.loadArmy).toHaveBeenCalled();
  });

  it('renders a Translate button that opens Google Translate for the current page', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const wrapper = shallowMount(IntroScreen as any, {
      props: { ...props },
    });
    const translateButton = wrapper.find('button[title="Translate"]');
    expect(translateButton.exists()).toBe(true);
    await translateButton.trigger('click');
    expect(openSpy).toHaveBeenCalledWith(
      `https://translate.google.com/translate?u=${encodeURIComponent(window.location.href)}`,
      '_blank',
    );
    openSpy.mockRestore();
  });
});
