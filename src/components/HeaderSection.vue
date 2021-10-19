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
        <div>Leaders: {{leadersCount}}</div>
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

<script>
const warPartyNations = {
  'Early Imperial Roman': 1,
  'Late Republican Roman': 1,
};
export default {
  name: 'HeaderSection',
  props: [
    'armyContents',
    'selectedNation',
    'armyName',
    'lists',
    'unitToAdd',
    'armyChanged',
    'addUnit',
    'updateArmyName',
  ],
  computed: {
    totalCost: function totalCost() {
      return this.armyContents.reduce((total, unit) => {
        const optionsCost = unit.selectedOptions.reduce((unitTotal, selectedOption) => {
          return unitTotal + unit.options[selectedOption].cost;
        }, 0);
        const thisUnitCost = unit.size ? (unit.size * (unit.cost + optionsCost)) : unit.cost;
        return total + thisUnitCost;
      }, 0);
    },
    totalFiguresCount: function totalFiguresCount() {
      return this.armyContents.reduce((total, unit) => {
        return total + (unit.unitSize());
      }, 0);
    },
    figureCountForBreak: function figureCountForBreak() {
      return this.armyContents.reduce((total, unit) => {
        return total + (unit.dontCountForBreak ? 0 : unit.unitSize());
      }, 0);
    },
    breakPointThreshold: function breakPointThreshold() {
      return Math.floor(this.figureCountForBreak / 6);
    },
    warbandType: function warbandType() {
      if (warPartyNations[this.selectedNation]) {
        return this.isWarParty
          ? 'War-party'
          : 'Ad Hoc';
      }
      return this.isMuster ? 'Muster' : 'Ad Hoc';
    },
    isMuster: function isMuster() {
      return (this.civisCount >= (this.militesCount + this.rareCount))
        && (this.militesCount >= this.rareCount);
    },
    isWarParty: function isWarParty() {
      return (this.militesCount >= this.civisCount)
        && (this.militesCount >= (2 * this.rareCount));
    },
    leadersCount: function leadersCount() {
      return this.armyContents.reduce((total, unit) => {
        return unit.availability === 'leader'
          ? total + (unit.unitSize())
          : total;
      }, 0);
    },
    civisCount: function civisCount() {
      return this.armyContents.reduce((total, unit) => {
        return unit.availability === 'civis'
          ? total + (unit.unitSize())
          : total;
      }, 0);
    },
    militesCount: function militesCount() {
      return this.armyContents.reduce((total, unit) => {
        return unit.availability === 'milites'
          ? total + (unit.unitSize())
          : total;
      }, 0);
    },
    rareCount: function rareCount() {
      return this.armyContents.reduce((total, unit) => {
        return unit.availability === 'rare'
          ? total + (unit.unitSize())
          : total;
      }, 0);
    },
  },
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
