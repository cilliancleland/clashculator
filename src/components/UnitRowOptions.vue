<template>
  <div>
    <button v-for="(value, index) in row.selectedOptions"
      v-on:click="removeOption(value)"
      class="unit-option-remove"
      v-bind:key="index">
        <i class="fa fa-times"></i>
        {{row.options[value].name.replace(/Upgrade to|Downgrade to|Add|Attach a/g, '')}}
    </button>
    <select v-if="row.options.length && row.options.length > excludedOptions.length"
          v-on:change="addOption" class="unit-option">
      <option value="-1">Add an option</option>
      <option v-for="(value, index) in availableOptions"
                :value="index" v-bind:key="index">
        {{ row.options[value].name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SelectedUnit } from '../helpers/types';

const props = defineProps({
  row: {
    type: Object as () => SelectedUnit,
    required: true,
  },
  rowIndex: {
    type: Number,
    required: true,
  },
  updateRow: {
    type: Function,
    required: true,
  },
});

const excludedOptions = computed((): number[] => {
  // loop through selected options
  //   for each selected option, record if it mods armour,shield or weapon
  let excludeWeaponOptions = false;
  let excludeArmourOptions = false;
  let excludeShieldOptions = false;
  let excludeBardingOptions = false;
  let excludeCommandOptions = false;
  const exclusions: number[] = [];
  let isMounted = false;
  let isHeavyShield = false;
  props.row.selectedOptions.forEach((key) => {
    if (props.row.options[key].upgradeArmour) {
      excludeArmourOptions = true;
    }
    if (props.row.options[key].upgradeWeapon) {
      excludeWeaponOptions = true;
    }
    if (props.row.options[key].upgradeShield) {
      excludeShieldOptions = true;
    }
    if (props.row.options[key].upgradeCommand) {
      excludeCommandOptions = true;
    }
    if (props.row.options[key].upgradeBarding) {
      excludeBardingOptions = true;
    }
    if (props.row.options[key].name === 'Upgrade to Horse'
      || props.row.options[key].name === 'Upgrade to Chariot') {
      isMounted = true;
    }
    if (props.row.options[key].name === 'Upgrade to heavy shield') {
      isHeavyShield = true;
    }
  });
  // loop through all options,
  // if that option has shield or armour or weapon
  // and not allowed, then add it to excludedOptions
  props.row.options.forEach((option, idx) => {
    if ((excludeShieldOptions && option.upgradeShield)
      || (excludeWeaponOptions && option.upgradeWeapon)
      || (excludeArmourOptions && option.upgradeArmour)
      || (excludeCommandOptions && option.upgradeCommand)
      || (excludeBardingOptions && option.upgradeBarding)
      || (isHeavyShield && option.unlessHeavyShield)
      || (isMounted && option.unlessMounted)
      || (!isMounted && option.requiresMounted)
      || (props.row.selectedOptions.includes(idx))
    ) {
      exclusions.push(idx);
    }
  });
  return exclusions;
});

const availableOptions = computed((): number[] => {
  return props.row.options.reduce((arr, val, index) => {
    if (!excludedOptions.value.includes(index)) {
      arr.push(index);
    }
    return arr;
  }, [] as number[]);
});

const removeOption = (optionIndex: number): void => {
  const newSelectedOptions: number[] = props.row.selectedOptions.filter(
    (val: number): boolean => { return val !== optionIndex; },
  );
  props.updateRow(props.rowIndex, 'selectedOptions', newSelectedOptions);
};

const addOption = (ev: Event): void => {
  const select = ev.target as HTMLSelectElement;
  const optionKey = availableOptions.value[select.selectedIndex - 1];
  props.updateRow(props.rowIndex, 'selectedOptions', props.row.selectedOptions.concat([optionKey]));
  select.selectedIndex = 0;
};
</script>
