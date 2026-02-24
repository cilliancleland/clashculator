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
    expect(wrapper.findComponent(UnitRowTraits).exists()).toBe(true);
    expect((wrapper.findComponent(UnitRowOptions).vm).row).toStrictEqual(baseProps.row);
    expect((wrapper.findComponent(UnitRowOptions).vm).rowIndex).toBe(baseProps.index);
    expect((wrapper.findComponent(UnitRowOptions).vm).updateRow).toBe(baseProps.updateRow);
    expect(wrapper.findComponent(UnitRowStats).exists()).toBe(true);
    expect((wrapper.findComponent(UnitRowStats).vm).row).toStrictEqual(baseProps.row);
    expect((wrapper.findComponent(UnitRowStats).vm).rowIndex).toBe(baseProps.index);
    expect((wrapper.findComponent(UnitRowStats).vm).updateRow).toBe(baseProps.updateRow);
    expect(wrapper.findComponent(UnitRowOptions).exists()).toBe(true);
    expect((wrapper.findComponent(UnitRowOptions).vm).row).toStrictEqual(baseProps.row);
  });
});
