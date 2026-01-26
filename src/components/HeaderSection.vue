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
          v-on:keyup="$emit('update-army-name', $event.target.value)" class="army-name" />
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
        <select class="add-unit" v-if="selectedNation" v-bind:value="unitToAdd"
          v-on:change="$emit('add-unit', $event.target.value)">
          <option value="">Add a unit</option>
          <option v-for="(value, name) in lists[selectedNation]" :value="name" v-bind:key="name">
            {{ value.displayName }}
          </option>
        </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { LookupNumber, SelectedUnit } from '../helpers/types';

const warPartyNations: LookupNumber = {
  'Early Imperial Roman': 1,
  'Late Republican Roman': 1,
};
export default Vue.extend({
  name: 'HeaderSection',
  props: {
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
    armyChanged: {
      type: Function,
      required: false,
    },
    addUnit: {
      type: Function,
      required: false,
    },
    updateArmyName: {
      type: Function,
      required: false,
    },
  },
  computed: {
    totalCost: function totalCost(): number {
      return this.armyContents.reduce((total: number, unit: SelectedUnit) => {
        const optionsCost = unit.selectedOptions.reduce((unitTotal, selectedOption) => {
          return unitTotal + unit.options[selectedOption].cost;
        }, 0);
        const thisUnitCost = Math.round(
          (unit.size || 1) * (unit.cost + optionsCost),
        );
        return total + thisUnitCost;
      }, 0);
    },
    totalFiguresCount: function totalFiguresCount(): number {
      return this.armyContents.reduce((total: number, unit: SelectedUnit): number => {
        return total + (unit.unitSize());
      }, 0);
    },
    figureCountForBreak: function figureCountForBreak(): number {
      return this.armyContents.reduce((total: number, unit: SelectedUnit): number => {
        return total + (unit.dontCountForBreak ? 0 : unit.unitSize());
      }, 0);
    },
    breakPointThreshold: function breakPointThreshold(): number {
      return Math.floor(this.figureCountForBreak / 6);
    },
    charactersCount: function charactersCount(): number {
      return this.armyContents.reduce((total: number, unit: SelectedUnit) => {
        return unit.availability === 'character'
          ? total + (unit.unitSize())
          : total;
      }, 0);
    },
    civisCount: function civisCount(): number {
      return this.armyContents.reduce((total: number, unit: SelectedUnit) => {
        return unit.availability === 'civis'
          ? total + (unit.unitSize())
          : total;
      }, 0);
    },
    militesCount: function militesCount(): number {
      return this.armyContents.reduce((total: number, unit: SelectedUnit) => {
        return unit.availability === 'milites'
          ? total + (unit.unitSize())
          : total;
      }, 0);
    },
    rareCount: function rareCount(): number {
      return this.armyContents.reduce((total: number, unit: SelectedUnit) => {
        const size = unit.countsDouble
          ? unit.unitSize() * 2
          : unit.unitSize();
        return unit.availability === 'rare'
          ? total + size
          : total;
      }, 0);
    },
    warbandType: function warbandType(): string {
      if (warPartyNations[this.selectedNation]) {
        return this.isWarParty
          ? 'War-party'
          : 'Ad Hoc';
      }
      return this.isMuster ? 'Muster' : 'Ad Hoc';
    },
    isMuster: function isMuster(): boolean {
      return (this.civisCount >= (this.militesCount + this.rareCount))
        && (this.militesCount >= this.rareCount);
    },
    isWarParty: function isWarParty(): boolean {
      return (this.militesCount >= this.civisCount)
        && (this.militesCount >= (2 * this.rareCount));
    },
  },
});
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
