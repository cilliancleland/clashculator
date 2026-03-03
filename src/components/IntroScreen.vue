
<template>
  <div>
    <div class="period-selector">
      <period-selector
        v-for="(period) in periods"
        :key="period"
        :period="period"
        :selected-period = "selectedPeriod"
        :select-period="selectPeriod"
      ></period-selector>
    </div>
    <select id="armySelect"
            aria-label="Select nation"
            v-bind:value="selectedNation"
            class="add-unit"
            @change="selectNation">
      <option value="">Please select an army to start</option>
      <option v-for="(value, name) in lists" :value="name" v-bind:key="name">
      {{ name }}
      </option>
    </select>
    <span v-if="localSaves.length">
      or
      <select id="saveSelect"
              aria-label="Load a saved army"
              v-bind:value="savedName"
              class="add-unit"
              @change="loadArmy">
          <option value="">Load a saved army</option>
          <option v-for="(value) in localSaves" :value="value" v-bind:key="value">
            {{ value }}
          </option>
      </select>
    </span>
    <h3>What's new</h3>
      <ul>
        <li>Arcane Companion!!!
        </li>
        <li>Clash of Katanas!!
        </li>
        <li>Added lists from the new expansion
          <a href="https://www.wargamevault.com/product/373720/RISE-of-Eagles" target="_blank" rel="noopener noreferrer">
          <b>Rise of Eagles</b><span class="sr-only"> (opens in new tab)</span>
          </a>
        </li>
        <li>
          Added Samurai beta lists.
        </li>
        <li>
          Fixed a couple of options for Numidians.
        </li>
        <li>Fixed soothsayer bug (please report any bugs on
          <a href="https://www.facebook.com/groups/TheWargameSpot/" target="_blank" rel="noopener noreferrer">
          Facebook<span class="sr-only"> (opens in new tab)</span></a>.
          Bug reports are always welcome)</li>
        <li>Added command abilities from the excellent new supplement
          <a href="https://www.wargamevault.com/product/310813/FIELDS-of-BLOOD" target="_blank" rel="noopener noreferrer">
          <b>FIELDS of <span style="color:red">BLOOD</span></b><span class="sr-only"> (opens in new tab)</span>
          </a>
        </li>
        <li>Options button. Set default unit size, auto sorting and print options</li>
        <li>Alexandrian army lists</li>
      </ul>
    <p>

    </p>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { LookupArmy } from '../helpers/types';
import PeriodSelector from './PeriodSelector.vue';

const props = defineProps({
  selectedNation: { type: String, required: true },
  selectedPeriod: { type: String, required: true },
  periods: { type: Array as PropType<string[]>, required: true },
  lists: { type: Object as PropType<LookupArmy>, required: true },
  localSaves: { type: Array as PropType<string[]>, required: true },
  savedName: { type: String, required: true },
  loadArmy: { type: Function, required: true },
  selectNation: { type: Function, required: true },
  selectPeriod: { type: Function, required: true },
});

const selectNation = (e: Event) => {
  props.selectNation((e.target as HTMLSelectElement).value);
};

const loadArmy = (e: Event) => {
  props.loadArmy((e.target as HTMLSelectElement).value);
};

const openTranslate = (): void => {
  window.open(`https://translate.google.com/translate?u=${encodeURIComponent(window.location.href)}`, '_blank');
};
</script>
<style scoped lang="scss">
    .add-unit {
      border-radius: 10px;
      padding: 1rem;
      font-size: 16px;
      max-width: 100%;
    }
    .period-selector {
      padding: 0.5rem;
    }
</style>
