import { shallowMount } from '@vue/test-utils';
import HeaderSection from '@/components/HeaderSection.vue';
import { vi } from 'vitest';
import { SelectedUnit } from '@/helpers/types';

const baseProps = {
  armyContents: [] as SelectedUnit[],
  selectedNation: 'Rome',
  armyName: 'Test Army',
  lists: { Rome: {} },
  unitToAdd: '',
  addUnit: vi.fn(),
  updateArmyName: vi.fn(),
};

describe('HeaderSection.vue', () => {
  it('add-unit select has aria-label="Add a unit"', () => {
    const wrapper = shallowMount(HeaderSection as any, {
      props: { ...baseProps },
    });
    const select = wrapper.find('select.add-unit');
    expect(select.exists()).toBe(true);
    expect(select.attributes('aria-label')).toBe('Add a unit');
  });
});
