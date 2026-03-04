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

const rowWithOptions = (costs: number[]) => ({
  ...baseRow,
  options: costs.map((cost) => ({ cost, name: '', upgradeWeapon: '', upgradeArmour: '', upgradeShield: '' })),
  selectedOptions: costs.map((_, i) => i),
});

describe('UnitRowStats.vue', () => {
  it('shows a positive option cost with a + prefix', () => {
    const wrapper = shallowMount(UnitRowStats as any, {
      props: { ...baseProps, row: rowWithOptions([1]) },
    });
    expect(wrapper.text()).toContain('(+1)');
  });

  it('shows a negative option cost without a + prefix', () => {
    const wrapper = shallowMount(UnitRowStats as any, {
      props: { ...baseProps, row: rowWithOptions([-1]) },
    });
    expect(wrapper.text()).toContain('(-1)');
    expect(wrapper.text()).not.toContain('(+-1)');
  });

  it('hides the option cost span when cost is zero', () => {
    const wrapper = shallowMount(UnitRowStats as any, {
      props: { ...baseProps },
    });
    expect(wrapper.find('span').exists()).toBe(false);
  });

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
