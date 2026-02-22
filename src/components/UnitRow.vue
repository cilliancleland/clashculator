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
                v-for="(num,itmIndex) in deploymentNumbers[index]"
                v-bind:key="itmIndex">{{num + 1}}<span v-if="itmIndex > 0">s</span>
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
          <span class="pill"  v-if="showWeapon">
            {{displayWeapon}}
          </span>
        </div>
        <div class="unit-cell unit-cell-medium">
          <span class="pill" v-if="showShield">
            {{upgradedShield ? upgradedShield : row.defaultShield}}
          </span>
          <span class="pill" v-if="showBody">
            {{upgradedArmour ? upgradedArmour : row.defaultBody}}
          </span>
          <span class="pill" v-if="row.defaultBarding || row.upgradedBarding">
            {{upgradedBarding ? upgradedBarding : row.defaultBarding}}
          </span>
        </div>
        <UnitRowTraits :row="row" />
        <button v-on:click="$emit('remove-unit',index)"  title="Remove unit" class="unit-delete">
          <i class="fa fa-times"></i>
        </button>
      </div>
      <UnitRowStats :row="row" :rowIndex="index" :updateRow="updateRow" />
      <UnitRowOptions :row="row" :index="index" :updateRow="updateRow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  defineProps,
  PropType,
  watch,
} from 'vue';
import { SelectedUnit } from '../helpers/types';
import UnitRowStats from './UnitRowStats.vue';
import UnitRowOptions from './UnitRowOptions.vue';
import UnitRowTraits from './UnitRowTraits.vue';
import {
  HIDE_OPTION,
  SAVE_MODS,
  HALF_BARDING,
  OPT_BUCKLER,
  WEAPON_INITIATIVES,
  FULL_IMPROVED,
  PARTIAL_IMPROVED,
  ENCLOSED_IMPROVED,
} from '../helpers/constants';
import traits from '../helpers/traits';

const props = defineProps({
  row: {
    type: Object as PropType<SelectedUnit>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  numUnits: {
    type: Number,
    required: true,
  },
  sorting: {
    type: String,
    required: true,
  },
  deploymentNumbers: {
    type: Array as PropType<number[][]>,
    required: true,
  },
  autoNumber: {
    type: Boolean,
    required: true,
  },
  updateRow: {
    type: Function,
    required: true,
  },
});
const upgradedWeapon = computed((): string => {
  let ret = '';
  props.row.selectedOptions.forEach((key) => {
    if (props.row.options[key].upgradeWeapon) {
      ret = props.row.options[key].upgradeWeapon;
    }
  });
  return ret;
});
const upgradedArmour = computed((): string => {
  let ret = '';
  props.row.selectedOptions.forEach((key) => {
    if (props.row.options[key].upgradeArmour) {
      ret = props.row.options[key].upgradeArmour;
    }
  });
  return ret;
});
const upgradedShield = computed((): string => {
  let ret = '';
  props.row.selectedOptions.forEach((key) => {
    if (props.row.options[key].upgradeShield) {
      ret = props.row.options[key].upgradeShield;
    }
  });
  return ret;
});
const upgradedBarding = computed((): string => {
  let ret = '';
  props.row.selectedOptions.forEach((key) => {
    if (props.row.options[key].upgradeBarding) {
      ret = props.row.options[key].upgradeBarding || '';
    }
  });
  return ret;
});
const displayWeapon = computed((): string => {
  const weap = upgradedWeapon.value ? upgradedWeapon.value : props.row.defaultWeapon;
  return `${weap} ${WEAPON_INITIATIVES[weap]}`;
});
const showWeapon = computed((): boolean => {
  return props.row.defaultWeapon !== HIDE_OPTION;
});
const showBody = computed((): boolean => {
  return props.row.defaultBody !== HIDE_OPTION;
});
const showShield = computed((): boolean => {
  return props.row.defaultShield !== HIDE_OPTION;
});
const calculateSave = computed((): string => {
  if (props.row.fixedSave) {
    return props.row.fixedSave;
  }
  let save = 7;
  let symbol = '+';
  const shield = upgradedShield.value ? upgradedShield.value : props.row.defaultShield;
  const barding = upgradedBarding.value ? upgradedBarding.value : props.row.defaultBarding;
  const armour = upgradedArmour.value ? upgradedArmour.value : props.row.defaultBody;
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
    shield === OPT_BUCKLER.name
    || barding === HALF_BARDING
    || armour === FULL_IMPROVED
    || armour === PARTIAL_IMPROVED
    || armour === ENCLOSED_IMPROVED
  ) {
    symbol = '+*';
  }
  return save + symbol;
});
watch(calculateSave, (a: string) => {
  let tokens = 0;
  if (props.row.availability === 'character' || props.row.noDeployToken) {
    tokens = 0;
  } else {
    const save: number = parseInt(a.substr(0, 1), 10);
    const mounted: boolean = props.row.traits.includes(traits.MOUNTED);
    if ((save > 4 && mounted) || save > 5) {
      tokens = 2;
    } else {
      tokens = 1;
    }
  }
  props.updateRow(props.index, 'numTokens', tokens);
});

</script>
<style scoped lang="scss">
  .pill {
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
