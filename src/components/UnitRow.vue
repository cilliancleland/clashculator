
<template>
  <div class="unit-row">
    <div class="row-reposition">
    <button title="Move up" v-if="index != 0 && sorting=='manual'"
      v-on:click="$emit('repos-up',index)" class="unit-up">
      <i class="fa fa-arrow-up"></i>
    </button>
    <button
      title="Move down"
      v-if="numUnits -1 != index && sorting=='manual'"
      v-on:click="$emit('repos-down',index)" class="unit-down">
      <i class="fa fa-arrow-down"></i>
    </button>
    </div>
    <div style="margin-left:32px;">
      <div class="unit-row-stats">
        <div class="deployment-number" v-if="autoNumber==true">
          {{deploymentNumbers[index]+1}}
        </div>
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
          {{calculateSave}}
        </div>
        <div class="unit-cell unit-cell-medium">
          <span class="unit-trait"  v-if="showWeapon">
            {{upgradedWeapon ? upgradedWeapon : row.defaultWeapon}}
          </span>
        </div>
        <div class="unit-cell unit-cell-medium">
          <span class="unit-trait" v-if="showShield">
            {{upgradedShield ? upgradedShield : row.defaultShield}}
          </span>
          <span class="unit-trait" v-if="showBody">
            {{upgradedArmour ? upgradedArmour : row.defaultBody}}
          </span>
          <span class="unit-trait" v-if="row.defaultBarding || row.upgradedBarding">
            {{upgradedBarding ? upgradedBarding : row.defaultBarding}}
          </span>
        </div>
        <div class="unit-cell unit-cell-medium">
          <span v-for="(trait) in row.traits" v-bind:key="trait">
            <span class="unit-trait" :title="traitTitle(trait)">{{trait}}</span>
          </span>
          <span v-for="(trait) in upgradedTraits" v-bind:key="trait">
            <span class="unit-trait" :title="traitTitle(trait)">{{trait}}</span>
          </span>
          <span v-if="row.commandPoints">
            <span class="unit-trait">{{row.commandPoints}} CP @ {{row.commandRange}}&quot;</span>
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
            v-if="row.fixedFigures === undefined"
            class="adjust-figure">
            <i class="fa fa-minus"></i>
          </button>
          {{row.size}} figures
          <span v-if="row.traits.indexOf('feral') > -1">
            (+1)
          </span>
          <button v-on:click="addFigure"
            title="Add figure"
            v-if="row.fixedFigures === undefined"
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
          {{row.options[value].name.replace(/Upgrade to|Downgrade to|Add|Attach a/g, '')}}
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
  PLATE,
  PARTIAL,
  BUCKLER,
  SHIELD,
  BARDING,
  HALF_BARDING,
  HEAVY_SHIELD,
  OPT_BUCKLER,
  HIDE_OPTION,
} from '../helpers/constants';
import { TRAIT_DESCRIPTIONS } from '../helpers/traits';

export default {
  name: 'UnitRow',
  data: () => {
    return {
      optionToAdd: -1,
      TRAIT_DESCRIPTIONS,
    };
  },
  props: [
    'row',
    'index',
    'num-units',
    'sorting',
    'deployment-numbers',
    'auto-number'],
  computed: {
    showWeapon: function showWeapon() {
      return this.row.defaultWeapon !== HIDE_OPTION;
    },
    showBody: function showBody() {
      return this.row.defaultBody !== HIDE_OPTION;
    },
    showShield: function showShield() {
      return this.row.defaultShield !== HIDE_OPTION;
    },
    upgradedTraits: function upgradedTraits() {
      const traits = [];
      this.row.selectedOptions.forEach((key) => {
        traits.push(...this.row.options[key].upgradeTraits);
      });
      return traits;
    },
    upgradedWeapon: function ungradedWeapon() {
      let ret = '';
      this.row.selectedOptions.forEach((key) => {
        if (this.row.options[key].upgradeWeapon) {
          ret = this.row.options[key].upgradeWeapon;
        }
      });
      return ret;
    },
    upgradedArmour: function ungradedArmour() {
      let ret = '';
      this.row.selectedOptions.forEach((key) => {
        if (this.row.options[key].upgradeArmour) {
          ret = this.row.options[key].upgradeArmour;
        }
      });
      return ret;
    },
    upgradedShield: function upgradedShield() {
      let ret = '';
      this.row.selectedOptions.forEach((key) => {
        if (this.row.options[key].upgradeShield) {
          ret = this.row.options[key].upgradeShield;
        }
      });
      return ret;
    },
    upgradedBarding: function upgradedBarding() {
      let ret = '';
      this.row.selectedOptions.forEach((key) => {
        if (this.row.options[key].upgradeBarding) {
          ret = this.row.options[key].upgradeBarding;
        }
      });
      return ret;
    },
    excludedOptions: function excludedOptions() {
      // loop through selected options
      //   for each selected option, record if it mods armour,shield or weapon
      let excludeWeaponOptions = false;
      let excludeArmourOptions = false;
      let excludeShieldOptions = false;
      const exclusions = [];
      let isMounted = false;
      let isHeavyShield = false;
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
        if (this.row.options[key].name === 'Upgrade to Horse'
          || this.row.options[key].name === 'Upgrade to Chariot') {
          isMounted = true;
        }
        if (this.row.options[key].name === 'Upgrade to heavy shield') {
          isHeavyShield = true;
        }
      });
      // loop through all options,
      // if that option has shield or armour or weapon
      // and not allowed, then add it to excludedOptions
      this.row.options.forEach((option, idx) => {
        if ((excludeShieldOptions && option.upgradeShield)
          || (excludeWeaponOptions && option.upgradeWeapon)
          || (excludeArmourOptions && option.upgradeArmour)
          || (isHeavyShield && option.unlessHeavyShield)
          || (isMounted && option.unlessMounted)
          || (!isMounted && option.requiresMounted)
          || (this.row.selectedOptions.indexOf(idx) > -1)
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
      let symbol = '+';
      let save = 7;
      const mods = {};
      mods[NO_ARMOUR] = 0;
      mods[NO_SHIELD] = 0;
      mods[BUCKLER] = 0;
      mods[FULL] = 2;
      mods[PLATE] = 2;
      mods[PARTIAL] = 1;
      mods[SHIELD] = 1;
      mods[HEAVY_SHIELD] = 2;
      mods[BARDING] = 1;
      mods[HALF_BARDING] = 0;
      const armour = this.upgradedArmour ? this.upgradedArmour : this.row.defaultBody;
      const shield = this.upgradedShield ? this.upgradedShield : this.row.defaultShield;
      const barding = this.upgradedBarding ? this.upgradedBarding : this.row.defaultBarding;
      if (armour) {
        save -= mods[armour];
      }
      if (shield) {
        save -= mods[shield];
      }
      if (barding) {
        save -= mods[barding];
      }
      if (shield === OPT_BUCKLER || barding === HALF_BARDING) {
        symbol = '*';
      }
      return save + symbol;
    },
  },
  methods: {
    traitTitle: function traitTitle(trait) {
      const desc = this.TRAIT_DESCRIPTIONS[trait] || ['', ''];
      return `${desc[0]}\n${desc[1]}`;
    },
    removeOption: function removeOption(optionIndex) {
      this.row.selectedOptions.splice(this.row.selectedOptions.indexOf(optionIndex), 1);
    },
    addOption: function addOption() {
      const optionKey = this.availableOptions[this.optionToAdd];
      this.row.selectedOptions.push(optionKey);
      this.optionToAdd = -1;
    },
    addFigure: function addFigure() {
      this.row.size = Math.min(this.row.size + 1, 15);
    },
    removeFigure: function removeFigure() {
      this.row.size = Math.max(this.row.size - 1, 0);
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
