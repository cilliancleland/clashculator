<template>
  <div class="unit-cell unit-cell-medium">
    <span v-for="(trait) in filteredTraits" v-bind:key="trait">
      <span class="unit-trait" :title="traitTitle(trait)">{{trait}}</span>
    </span>
    <span v-if="row.isCharacter" class="unit-trait">
      {{row.commandPoints}} CP @ {{row.commandRange}}&quot;
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { SelectedUnit } from '../helpers/types';
import { traitDescriptions } from '../helpers/traits';

const props = defineProps({
  row: {
    type: Object as () => SelectedUnit,
    required: true,
  },
});
const traitTitle = (trait: string): string => {
  const desc = traitDescriptions[trait] || ['', ''];
  return `${desc[0]}\n${desc[1]}`;
};
const upgradedTraits = computed((): string[] => {
  const myTraits: string[] = [];
  props.row.selectedOptions.forEach((key) => {
    const upgradeTraits: string[] = props.row.options[key].upgradeTraits || [];
    myTraits.push(...upgradeTraits);
  });
  return myTraits;
});
const reducingTraits = computed((): string[] => {
  const myTraits: string[] = [];
  props.row.selectedOptions.forEach((key) => {
    const removeTraits: string[] = props.row.options[key].removeTraits || [];
    myTraits.push(...removeTraits);
  });
  return myTraits;
});
const filteredTraits = computed((): string[] => {
  let allTraits: string[] = [...props.row.traits, ...upgradedTraits.value];
  allTraits = allTraits.reduce((acc: string[], el: string) => {
    return reducingTraits.value.includes(el)
      ? acc
      : [...acc, el];
  }, [] as string[]);
  return allTraits;
});

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
