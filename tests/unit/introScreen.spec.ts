import { shallowMount } from '@vue/test-utils';
import IntroScreen from '@/components/IntroScreen.vue';
import { vi } from 'vitest';

const propsData = {
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
      propsData: { ...propsData },
    });
    const armySelect = wrapper.find('select#armySelect');
    const saveSelect = wrapper.find('select#saveSelect');
    expect(armySelect.exists()).toBe(true);
    expect(saveSelect.exists()).toBe(true);
    const armyOptions = armySelect.findAll('option');
    const saveOptions = saveSelect.findAll('option');
    expect(armyOptions.length).toBe(Object.keys(propsData.lists).length + 1);
    expect(saveOptions.length).toBe(propsData.localSaves.length + 1);
    // check they fire an event with selected
    armySelect.trigger('change');
    expect(propsData.selectNation).toHaveBeenCalled();
    saveSelect.trigger('change');
    expect(propsData.loadArmy).toHaveBeenCalled();
  });
});
