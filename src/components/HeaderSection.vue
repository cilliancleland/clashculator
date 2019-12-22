<template>
  <div>
    <h2 class="army-title">
      {{selectedNation}} ({{totalCost}} points)
      <span>
        ({{totalFiguresCount}} figures in {{armyContents.length}} units)
      </span>
    </h2>
    <div class="top-buttons">
      <button
        title="Reset"
        v-on:click="$emit('reset')"
        class="top-button">
        <i class="fa fa-undo top-button-icon"></i> Reset
      </button>
      <button
        title="Save locally"
        v-on:click="$emit('save-locally')"
        :disabled="armyChanged"
        v-bind:class="{ 'top-button': 1, 'top-button-disabled': armyChanged }">
        <i class="fa fa-floppy-o top-button-icon"></i> Save
      </button>
      <button
        title="Delete army from device"
        v-on:click="$emit('delete-locally')"
        :disabled="!armyChanged"
        v-bind:class="{ 'top-button': 1, 'top-button-disabled': !armyChanged }">
        <i class="fa fa-trash top-button-icon"></i> Delete
      </button>
    </div>
    <div class="army-breakup">
      <label >
        Army name
        <input v-bind:value="armyName"
          v-on:keyup="$emit('update-army-name', $event.target.value)" class="army-name" />
      </label>
      <div class="button-bar">
        <select class="add-unit" v-if="selectedNation" v-bind:value="unitToAdd"
          v-on:change="$emit('add-unit', $event.target.value)">
          <option value="">Add a unit</option>
          <option v-for="(value, name) in lists[selectedNation]" :value="name" v-bind:key="name">
            {{ value.displayName }}
          </option>
        </select>
      </div>
      <div>Leaders: {{leadersCount}}</div>
      <div>Civis: {{civisCount}}</div>
      <div>Milites{{militesCount}}</div>
      <div>Rare: {{rareCount}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: [
    'armyContents',
    'selectedNation',
    'armyName',
    'lists',
    'unitToAdd',
    'armyChanged',
    'reset',
    'saveLocally',
    'deleteLocally',
    'addUnit',
    'updateArmyName',
  ],
  computed: {
    totalCost: function totalCost() {
      return this.armyContents.reduce((total, unit) => {
        const optionsCost = unit.selectedOptions.reduce((unitTotal, selectedOption) => {
          return unitTotal + unit.options[selectedOption].cost;
        }, 0);
        return total + (unit.size * (unit.cost + optionsCost));
      }, 0);
    },
    totalFiguresCount: function totalFiguresCount() {
      return this.armyContents.reduce((total, unit) => {
        return total + (unit.unitSize());
      }, 0);
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
    }
</style>
