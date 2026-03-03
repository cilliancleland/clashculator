import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import UnitRow from "@/components/UnitRow.vue";
import { vi } from "vitest";
import { SelectedUnit } from "@/helpers/types";
import UnitRowOptions from "@/components/UnitRowOptions.vue";
import UnitRowStats from "@/components/UnitRowStats.vue";
import UnitRowTraits from "@/components/UnitRowTraits.vue";

const baseRow = {
          traits: ['guerrilla'],
          selectedOptions: [],
          excludedOptions: [],
          id: 1,
          size: 0,
          numTokens: 0,
          upgradedArmour: '',
          upgradedShield: '',
          upgradedWeapon: '',
          upgradedBarding: '',
          type: '',
          unitSize: () => {},
          displayName: '',
          availability: '',
          combat: 0,
          ranged: 0,
          grit: 0,
          defaultWeapon: '',
          defaultBody: '',
          defaultShield: '',
          cost: 0,
          options: [],
          noDeployToken: false,
          fixedSave: '',
          countsDouble: false,
          improvedArmour: false,
          dontCountForBreak: false,
          fixedFigures: 0,
} as SelectedUnit;
const baseProps = {
  row: baseRow,
  index: 0,
  numUnits: 0,
  sorting: '',
  deploymentNumbers: [],
  autoNumber: false,
  updateRow: vi.fn(),
}

describe("UnitRow.vue", () => {
  it('mounts the correct components, with correct props', () => {
    const wrapper = shallowMount(UnitRow as any, {
      props: { ...baseProps },
      });
    // expect(wrapper.findComponent({ name: 'UnitRowTraits' }).exists()).toBe(true);
    const traitsComponent = wrapper.findComponent(UnitRowTraits);
    expect(traitsComponent.exists()).toBe(true);
    expect(traitsComponent.props('row')).toStrictEqual(baseProps.row);
    const optionsComponent = wrapper.findComponent(UnitRowOptions);
    expect(optionsComponent.exists()).toBe(true);
    expect(optionsComponent.props('row')).toStrictEqual(baseProps.row);
    expect(optionsComponent.props('rowIndex')).toBe(baseProps.index);
    expect(optionsComponent.props('updateRow')).toBe(baseProps.updateRow);
    const statsComponent = wrapper.findComponent(UnitRowStats);
    expect(statsComponent.exists()).toBe(true);
    expect(statsComponent.props('row')).toStrictEqual(baseProps.row);
    expect(statsComponent.props('rowIndex')).toBe(baseProps.index);
    expect(statsComponent.props('updateRow')).toBe(baseProps.updateRow);
  });

  it('remove unit button has aria-label="Remove unit"', () => {
    const wrapper = shallowMount(UnitRow as any, {
      props: { ...baseProps },
    });
    const btn = wrapper.find('button.unit-delete');
    expect(btn.exists()).toBe(true);
    expect(btn.attributes('aria-label')).toBe('Remove unit');
  });

  it('move-up button has aria-label="Move up"', () => {
    const wrapper = shallowMount(UnitRow as any, {
      props: { ...baseProps, index: 1, numUnits: 3, sorting: 'manual' },
    });
    const btn = wrapper.find('button.unit-up');
    expect(btn.exists()).toBe(true);
    expect(btn.attributes('aria-label')).toBe('Move up');
  });

  it('move-down button has aria-label="Move down"', () => {
    const wrapper = shallowMount(UnitRow as any, {
      props: { ...baseProps, index: 0, numUnits: 3, sorting: 'manual' },
    });
    const btn = wrapper.find('button.unit-down');
    expect(btn.exists()).toBe(true);
    expect(btn.attributes('aria-label')).toBe('Move down');
  });
});
