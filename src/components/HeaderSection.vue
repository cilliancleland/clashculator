<template>
  <div class="header-container">
    <div class="header-left">
    <h2 class="army-title">
      {{selectedNation}} ({{totalCost}} points)
      <span>
        {{warbandType}} warband of {{totalFiguresCount}} figures in {{armyContents.length}} units
      </span>
    </h2>
    <div>
      <label >
        Army name
        <input v-bind:value="armyName"
          v-on:keyup="onArmyNameChange"
          class="army-name" />
      </label>
    </div>
    </div>
    <div class="header-middle">
        <div>Leaders: {{charactersCount}}</div>
        <div>Civis: {{civisCount}}</div>
        <div>Milites: {{militesCount}}</div>
        <div>Rare: {{rareCount}}</div>
        <div>Break point every {{breakPointThreshold}} figures</div>
    </div>
    <div class="header-right">
        <select aria-label="Add a unit" class="add-unit" v-if="selectedNation" v-bind:value="unitToAdd"
          v-on:change="onAddUnit">
          <option value="">Add a unit</option>
          <option v-for="(value, name) in lists[selectedNation]" :value="name" v-bind:key="name">
            {{ value.displayName }}
          </option>
        </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { LookupNumber, SelectedUnit } from '../helpers/types';

const warPartyNations: LookupNumber = {
  'Early Imperial Roman': 1,
  'Late Republican Roman': 1,
};
// const props = defineProps<{
//   armyContents: SelectedUnit[];
//   selectedNation: string;
//   armyName: string;
//   lists: Record<string, any>;
//   unitToAdd: string;
//   addUnit?: () => void;
//   updateArmyName?: () => void;
// }>();
const props = defineProps({
  armyContents: {
    type: Array as PropType<SelectedUnit[]>,
    required: true,
  },
  selectedNation: {
    type: String,
    required: true,
  },
  armyName: {
    type: String,
    required: true,
  },
  lists: {
    type: Object,
    required: true,
  },
  unitToAdd: {
    type: String,
    required: true,
  },
  addUnit: {
    type: Function,
    required: true,
  },
  updateArmyName: {
    type: Function,
    required: true,
  },
});
const totalCost = computed((): number => {
return props.armyContents.reduce((total: number, unit: SelectedUnit) => {
  const optionsCost = unit.selectedOptions.reduce((unitTotal, selectedOption) => {
    return unitTotal + unit.options[selectedOption].cost;
    }, 0);
    const thisUnitCost = Math.round(
      (unit.size || 1) * (unit.cost + optionsCost),
    );
    return total + thisUnitCost;
  }, 0);
});
const totalFiguresCount = computed((): number => {
  return props.armyContents.reduce((total: number, unit: SelectedUnit): number => {
    return total + (unit.unitSize());
  }, 0);
});
const figureCountForBreak = computed((): number => {
  return props.armyContents.reduce((total: number, unit: SelectedUnit): number => {
    return total + (unit.dontCountForBreak ? 0 : unit.unitSize());
  }, 0);
});
const breakPointThreshold = computed((): number => {
  return Math.floor(figureCountForBreak.value / 6);
});
const charactersCount = computed((): number => {
  return props.armyContents.reduce((total: number, unit: SelectedUnit) => {
    return unit.availability === 'character'
      ? total + (unit.unitSize())
      : total;
  }, 0);
});
const civisCount = computed((): number => {
  return props.armyContents.reduce((total: number, unit: SelectedUnit) => {
    return unit.availability === 'civis'
      ? total + (unit.unitSize())
      : total;
  }, 0);
});
const militesCount = computed((): number => {
  return props.armyContents.reduce((total: number, unit: SelectedUnit) => {
    return unit.availability === 'milites'
      ? total + (unit.unitSize())
      : total;
  }, 0);
});
const rareCount = computed((): number => {
  return props.armyContents.reduce((total: number, unit: SelectedUnit) => {
    const size = unit.countsDouble
      ? unit.unitSize() * 2
      : unit.unitSize();
    return unit.availability === 'rare'
      ? total + size
      : total;
  }, 0);
});
const warbandType = computed((): string => {
  if (warPartyNations[props.selectedNation]) {
    return isWarParty.value
      ? 'War-party'
      : 'Ad Hoc';
  }
  return isMuster.value ? 'Muster' : 'Ad Hoc';
});
const isMuster = computed((): boolean => {
  return (civisCount.value >= (militesCount.value + rareCount.value))
    && (militesCount.value >= rareCount.value);
});
const isWarParty = computed((): boolean => {
  return (militesCount.value >= civisCount.value)
    && (militesCount.value >= (2 * rareCount.value));
});

const onArmyNameChange = (event: Event): void => {
  props.updateArmyName?.((event.target as HTMLInputElement).value);
};
const onAddUnit = (ev: Event): void => {
  props.addUnit?.((ev.target as HTMLSelectElement).value);
};

</script>
<style scoped lang="scss">

    .add-unit {
      border-radius: 10px;
      padding: 1rem;
      font-size: 16px;
      width:220px;
    }
    .header-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-end;
    }
    .header-right {
        flex: 1 0 150px;
    }
    .header-left {
        flex: 1 0 400px;
    }
    .header-middle {
        flex: 1 0 220px;
    }
</style>
