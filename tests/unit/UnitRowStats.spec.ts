import { shallowMount } from '@vue/test-utils';
import UnitRowStats from '@/components/UnitRowStats.vue';
import { vi } from 'vitest';
import { SelectedUnit } from '@/helpers/types';

const baseRow = {
  traits: [],
  selectedOptions: [],
  options: [],
  size: 5,
  cost: 10,
  fixedFigures: undefined,
} as unknown as SelectedUnit;

const baseProps = {
  row: baseRow,
  rowIndex: 0,
  updateRow: vi.fn(),
};

describe('UnitRowStats.vue', () => {
  it('remove figure button has aria-label="Remove figure"', () => {
    const wrapper = shallowMount(UnitRowStats as any, {
      props: { ...baseProps },
    });
    const btn = wrapper.find('button[aria-label="Remove figure"]');
    expect(btn.exists()).toBe(true);
  });

  it('add figure button has aria-label="Add figure"', () => {
    const wrapper = shallowMount(UnitRowStats as any, {
      props: { ...baseProps },
    });
    const btn = wrapper.find('button[aria-label="Add figure"]');
    expect(btn.exists()).toBe(true);
  });
});
