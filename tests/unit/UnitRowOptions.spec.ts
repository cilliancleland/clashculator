import { shallowMount } from '@vue/test-utils';
import UnitRowOptions from '@/components/UnitRowOptions.vue';
import { vi } from 'vitest';
import { SelectedUnit } from '@/helpers/types';

const baseRow = {
  selectedOptions: [],
  options: [{ name: 'Option A', cost: 5 }, { name: 'Option B', cost: 3 }],
} as unknown as SelectedUnit;

const baseProps = {
  row: baseRow,
  rowIndex: 0,
  updateRow: vi.fn(),
};

describe('UnitRowOptions.vue', () => {
  it('options select has aria-label="Add an option"', () => {
    const wrapper = shallowMount(UnitRowOptions as any, {
      props: { ...baseProps },
    });
    const select = wrapper.find('select.unit-option');
    expect(select.exists()).toBe(true);
    expect(select.attributes('aria-label')).toBe('Add an option');
  });
});
