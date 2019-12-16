
<template>
  <div class="unit-row">
    <div class="row-reposition">
    <button title="Move up" v-if="index != 0" v-on:click="$emit('repos-up',index)" class="unit-up">
      <i class="fa fa-arrow-up"></i>
    </button>
    <button
      title="Move down"
      v-if="numUnits -1 != index"
      v-on:click="$emit('repos-down',index)" class="unit-down">
      <i class="fa fa-arrow-down"></i>
    </button>
    </div>
    <div style="margin-left:32px;">
      <div class="unit-row-stats">
        <div class="unit-cell unit-cell-wide">
          <strong>{{row.displayName}}</strong> ({{row.availability}})
        </div>
        <div class="unit-cell unit-cell-small larger-text">
          {{row.combat}}+
        </div>
        <div class="unit-cell unit-cell-small larger-text">
          {{row.ranged}}+
        </div>
        <div class="unit-cell unit-cell-small larger-text">
          {{row.grit}}+
        </div>
        <div class="unit-cell unit-cell-small larger-text">
          {{calculateSave}}+
        </div>
        <div class="unit-cell unit-cell-medium">
          <span class="unit-trait"  v-if="row.defaultShield != 'HIDE_OPTION'">
            {{row.upgradedWeapon ? row.upgradedWeapon : row.defaultWeapon}}
          </span>
        </div>
        <div class="unit-cell unit-cell-medium">
          <span class="unit-trait" v-if="row.defaultShield != 'HIDE_OPTION'">
            {{row.upgradedShield ? row.upgradedShield : row.defaultShield}}
          </span>
          <span class="unit-trait" v-if="row.defaultShield != 'HIDE_OPTION'">
            {{row.upgradedArmour ? row.upgradedArmour : row.defaultBody}}
          </span>
        </div>
        <div class="unit-cell unit-cell-medium">
          <span v-for="(trait) in row.traits" v-bind:key="trait">
            <span class="unit-trait">{{trait}}</span>
          </span>
          <span v-for="(trait) in upgradedTraits" v-bind:key="trait">
            <span class="unit-trait">{{trait}}</span>
          </span>
          <span v-if="row.commandPoints">
            <span class="unit-trait">{{row.commandPoints}} cmd @ {{row.commandRange}}&quot;</span>
          </span>
        </div>
        <button v-on:click="$emit('remove-unit',index)"  title="Remove unit" class="unit-delete">
          <i class="fa fa-times"></i>
        </button>
      </div>
      <div class="unit-row-stats">
        <div class="unit-cell unit-cell-full-on-mob">
          <button v-on:click="removeFigure"
            title="Remove figure"
            v-if="!row.fixedFigures"
            class="adjust-figure">
            <i class="fa fa-minus"></i>
          </button>
          {{row.size}} figures
          <button v-on:click="addFigure"
            title="Add figure"
            v-if="!row.fixedFigures"
            class="adjust-figure">
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <div class="unit-cell unit-cell-wide">
          @ {{row.cost}}
          <span v-if="optionsCostPerFigure > 0">(+{{optionsCostPerFigure}})</span>
          <span v-if="optionsCostPerFigure < 0">({{optionsCostPerFigure}})</span>
          points each
        </div>
        <div class="unit-cell unit-cell-wide">
          Total unit cost:  {{row.size * (row.cost + optionsCostPerFigure)}}
        </div>
      </div>
      <button v-for="(value, index) in row.selectedOptions"
        v-on:click="removeOption(value)"
        class="unit-option-remove"
        v-bind:key="index">
          <i class="fa fa-times"></i>
          {{row.options[value].name.replace(/Upgrade to|Downgrade to|Add/g, '')}}
      </button>
      <select v-if="row.options.length && row.options.length > excludedOptions.length"
            v-model="optionToAdd" v-on:change="addOption(index)" class="unit-option">
        <option value="-1">Add an option</option>
        <option v-for="(value, index) in availableOptions"
                  :value="index" v-bind:key="index">
          {{ row.options[value].name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import {
  NO_ARMOUR,
  NO_SHIELD,
  FULL,
  PARTIAL,
  SHIELD,
  HEAVY_SHIELD,
} from '../helpers/constants';

export default {
  name: 'UnitRow',
  data: () => {
    return {
      optionToAdd: -1,
    };
  },
  props: ['row', 'index', 'num-units'],
  computed: {
    upgradedTraits: function upgradedTraits() {
      const traits = [];
      this.row.selectedOptions.forEach((key) => {
        traits.push(...this.row.options[key].upgradeTraits);
      });
      return traits;
    },
    excludedOptions: function excludedOptions() {
      // loop through selected options
      //   for each selected option, record if it mods armour,shield or weapon
      let excludeWeaponOptions = false;
      let excludeArmourOptions = false;
      let excludeShieldOptions = false;
      const exclusions = [];
      let isMounted = false;
      this.row.selectedOptions.forEach((key) => {
        if (this.row.options[key].upgradeArmour) {
          excludeArmourOptions = true;
        }
        if (this.row.options[key].upgradeWeapon) {
          excludeWeaponOptions = true;
        }
        if (this.row.options[key].upgradeShield) {
          excludeShieldOptions = true;
        }
        if (this.row.options[key].name === 'Upgrade to Horse') {
          isMounted = true;
        }
      });
      // loop through all options,
      // if that option has shield or armour or weapon
      // and not allowed, then add it to excludedOptions
      this.row.options.forEach((option, idx) => {
        if ((excludeShieldOptions && option.upgradeShield)
          || (excludeWeaponOptions && option.upgradeWeapon)
          || (excludeArmourOptions && option.upgradeArmour)
          || (isMounted && option.unlessMounted)
          || (!isMounted && option.requiresMounted)
        ) {
          exclusions.push(idx);
        }
      });
      return exclusions;
    },
    availableOptions: function availableOptions() {
      return this.row.options.reduce((arr, val, index) => {
        if (this.excludedOptions.indexOf(index) < 0) {
          arr.push(index);
        }
        return arr;
      }, []);
    },
    optionsCostPerFigure: function optionsCostPerFigure() {
      return this.row.selectedOptions.reduce((total, selectedOption) => {
        return (total + this.row.options[selectedOption].cost);
      }, 0);
    },
    calculateSave: function calculateSave() {
      if (this.row.fixedSave) {
        return this.row.fixedSave;
      }
      let save = 7;
      const mods = {};
      mods[NO_ARMOUR] = 0;
      mods[NO_SHIELD] = 0;
      mods[FULL] = 2;
      mods[PARTIAL] = 1;
      mods[SHIELD] = 1;
      mods[HEAVY_SHIELD] = 2;
      const armour = this.row.upgradedArmour ? this.row.upgradedArmour : this.row.defaultBody;
      const shield = this.row.upgradedShield ? this.row.upgradedShield : this.row.defaultShield;
      if (armour) {
        save -= mods[armour];
      }
      if (shield) {
        save -= mods[shield];
      }
      return save;
    },
  },
  methods: {
    removeOption: function removeOption(optionIndex) {
      const option = this.row.options[optionIndex];
      if (option.upgradeWeapon) {
        this.row.upgradedWeapon = '';
      }
      if (option.upgradeArmour) {
        this.row.upgradedArmour = '';
      }
      if (option.upgradeShield) {
        this.row.upgradedShield = '';
      }
      this.row.selectedOptions.splice(this.row.selectedOptions.indexOf(optionIndex), 1);
    },
    addOption: function addOption() {
      const optionKey = this.availableOptions[this.optionToAdd];
      const option = this.row.options[optionKey];
      this.row.selectedOptions.push(optionKey);
      if (option.upgradeWeapon) {
        this.row.upgradedWeapon = option.upgradeWeapon;
      }
      if (option.upgradeArmour) {
        this.row.upgradedArmour = option.upgradeArmour;
      }
      if (option.upgradeShield) {
        this.row.upgradedShield = option.upgradeShield;
      }
      this.optionToAdd = -1;
    },
    addFigure: function addFigure() {
      this.row.size = this.row.size + 1;
    },
    removeFigure: function removeFigure() {
      this.row.size = this.row.size - 1;
    },
  },
};
</script>
<style scoped lang="scss">
  .unit-trait {
    background-color: #505050;
    border: solid #505050 1px;
    border-radius: 10px;
    display: inline-block;
    color: white;
    padding: 3px;
    margin: 2px;
  }
  .larger-text {
    font-size:125%
  }
</style>
