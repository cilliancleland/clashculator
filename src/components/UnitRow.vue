
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
        <div class="deployment-numbers" v-if="autoNumber==true">
          <div class="deployment-number"
                v-for="(num,index) in deploymentNumbers[index]"
                v-bind:key="index">{{num + 1}}<span v-if="index > 0">s</span>
          </div>
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
            {{displayWeapon}}
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
          <span v-for="(trait) in filteredTraits" v-bind:key="trait">
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
          Total unit cost:  {{row.size ? (row.size * (row.cost + optionsCostPerFigure)) : row.cost}}
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
  HIDE_OPTION,
  SAVE_MODS,
  HALF_BARDING,
  OPT_BUCKLER,
  WEAPON_INITIATIVES,
  FULL_IMPROVED,
  PARTIAL_IMPROVED,
} from '../helpers/constants';
// import { calcSaveNumber, calcSaveSymbol } from '../helpers/helpers';
import traits from '../helpers/traits';

export default {
  name: 'UnitRow',
  data: () => {
    return {
      optionToAdd: -1,
      traits,
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
    displayWeapon() {
      const weap = this.upgradedWeapon ? this.upgradedWeapon : this.row.defaultWeapon;
      return `${weap} ${WEAPON_INITIATIVES[weap]}`;
    },
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
      const myTraits = [];
      this.row.selectedOptions.forEach((key) => {
        myTraits.push(...this.row.options[key].upgradeTraits);
      });
      return myTraits;
    },
    reducingTraits: function upgradedTraits() {
      const myTraits = [];
      this.row.selectedOptions.forEach((key) => {
        return this.row.options[key].removeTraits
          && myTraits.push(...this.row.options[key].removeTraits);
      });
      return myTraits;
    },
    filteredTraits: function filteredTraits() {
      let allTraits = [...this.row.traits, ...this.upgradedTraits];
      allTraits = allTraits.reduce((acc, el) => {
        return this.reducingTraits.includes(el)
          ? acc
          : [...acc, el];
      }, []);
      return allTraits;
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
      let excludeBardingOptions = false;
      let excludeCommandOptions = false;
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
        if (this.row.options[key].upgradeCommand) {
          excludeCommandOptions = true;
        }
        if (this.row.options[key].upgradeBarding) {
          excludeBardingOptions = true;
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
          || (excludeCommandOptions && option.upgradeCommand)
          || (excludeBardingOptions && option.upgradeBarding)
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
      let save = 7;
      let symbol = '+';
      const shield = this.upgradedShield ? this.upgradedShield : this.row.defaultShield;
      const barding = this.upgradedBarding ? this.upgradedBarding : this.row.defaultBarding;
      const armour = this.upgradedArmour ? this.upgradedArmour : this.row.defaultBody;
      if (armour) {
        save -= SAVE_MODS[armour];
      }
      if (shield) {
        save -= SAVE_MODS[shield];
      }
      if (barding) {
        save -= SAVE_MODS[barding];
      }
      if (
        shield === OPT_BUCKLER
        || barding === HALF_BARDING
        || armour === FULL_IMPROVED
        || armour === PARTIAL_IMPROVED
      ) {
        symbol = '+*';
      }
      return save + symbol;
    },
  },
  watch: {
    calculateSave: { // set the number of deployment tokens
      immediate: true,
      handler(a) {
        let tokens = 0;
        if (this.row.availability === 'leader') {
          tokens = 0;
        } else {
          const save = a.substr(0, 1);
          const mounted = this.row.traits.indexOf(this.traits.MOUNTED) > -1;
          if ((save > 4 && mounted) || save > 5) {
            tokens = 2;
          } else {
            tokens = 1;
          }
        }
        this.row.numTokens = tokens;
      },
    },
  },
  methods: {
    traitTitle: function traitTitle(trait) {
      const desc = this.traits.descriptions[trait] || ['', ''];
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
