<template>
    <main id="main-content">
      <h1>{{ title }}</h1>
      <intro-screen  v-if="!selectedNation"
        :lists="periodLists"
        :periods="periods"
        :local-saves="localSaves"
        :saved-name="savedName"
        :selected-period="selectedPeriod"
        :selected-nation="selectedNation"
        :load-army="loadArmy"
        :select-nation="selectNation"
        :select-period="selectPeriod"
      ></intro-screen>
      <div v-if="selectedNation" >
        <faq-me v-if="showScreen=='faq'"
          v-on:no-faq="noFaq"
        ></faq-me>
        <options-screen v-if="showScreen=='options'"
          v-on:no-options="noOptions"
          v-on:set-option="setOption"
          :sorting="sorting"
          :auto-number="autoNumber"
          :default-number="defaultNumber"
          :show-deploy-table="showDeployTable"
        ></options-screen>
        <div v-if="showScreen=='main'">
          <top-buttons
            :army-unchanged="armyUnchanged"
            :show-faq="showFaq"
            :show-options="showOptions"
            :reset="reset"
            :save-locally="saveLocally"
            :delete-locally="deleteLocally"
          ></top-buttons>
          <header-section
            :army-contents="armyContents"
            :selected-nation="selectedNation"
            :army-name="armyName"
            :lists="periodLists"
            :unit-to-add="unitToAdd"
            :update-army-name="updateArmyName"
            :add-unit="addUnit"
          ></header-section>
          <title-row
            v-on:army-sort="armySort"
            v-bind:sorting="sorting"
            ></title-row>
          <unit-row v-for="(row, index) in armyContents"
            v-bind:auto-number="autoNumber"
            v-bind:deployment-numbers="deploymentNumbers"
            v-bind:sorting="sorting"
            v-bind:key="row.id"
            v-bind:row="row"
            v-bind:index="index"
            v-bind:num-units="armyContents.length"
            v-on:remove-unit="removeUnit"
            v-on:repos-up="reposUp"
            v-on:repos-down="reposDown"
            :updateRow="updateRow"
          ></unit-row>
          <sharable-link
            :sharable="sharable"
            :show-toastr="showToastr"
          ></sharable-link>
          <h2>Trait descriptions</h2>
          <table>
            <traits-list v-for="(trait) in mostTraits"
              v-bind:key="trait"
              v-bind:trait="trait"
            ></traits-list>
          </table>
          <deployment-table v-if="showDeployTable==true">
          </deployment-table>
        </div>
      </div>
      <toastr v-bind:message="toastrMessage"></toastr>
    </main>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { PERIODS } from '../helpers/constants';
import { decodeLegacyArmy } from '../helpers/armyCodec';
import { useArmy } from '../composables/useArmy';
import TopButtons from './TopButtons.vue';
import HeaderSection from './HeaderSection.vue';
import IntroScreen from './IntroScreen.vue';
import SharableLink from './SharableLink.vue';
import TitleRow from './TitleRow.vue';
import Toastr from './ToastrBar.vue';
import UnitRow from './UnitRow.vue';
import TraitsList from './TraitsList.vue';
import DeploymentTable from './DeploymentTable.vue';
import FaqMe from './FaqMe.vue';
import OptionsScreen from './OptionsScreen.vue';

const title = 'Clashculator';

// --- UI state ---
const toastrMessage = ref('');
const toastrTimeout = ref(0);
const showScreen = ref('main');
const autoNumber = ref(localStorage.getItem('autoNumber') === 'true');
const showDeployTable = ref(localStorage.getItem('showDeployTable') === 'true');

const showToastr = (msg: string): void => {
  clearTimeout(toastrTimeout.value);
  toastrMessage.value = msg;
  toastrTimeout.value = setTimeout(() => { toastrMessage.value = ''; }, 3000);
};

// --- army domain ---
const {
  selectedPeriod,
  selectedNation,
  armyContents,
  armyName,
  localSaves,
  savedName,
  unitToAdd,
  sorting,
  defaultNumber,
  periodLists,
  periods,
  armyDetailsCompact,
  armyUnchanged,
  mostTraits,
  deploymentNumbers,
  addUnit,
  removeUnit,
  reposUp,
  reposDown,
  armySort,
  updateRow,
  updateArmyName,
  selectNation,
  selectPeriod,
  saveLocally,
  deleteLocally,
  loadArmy,
  reset,
  hydrateArmy,
  hydrateCompactArmy,
} = useArmy(showToastr);

// --- sharable URL (UI/browser concern) ---
const sharable = computed<string>(() => {
  const loc = `${document.location.protocol}//${document.location.host}${document.location.pathname}`;
  return `${loc}?${selectedPeriod.value}=${encodeURIComponent(armyDetailsCompact.value)}`;
});

watch(sharable, (uri) => {
  window.history.pushState({}, 'Clashculator', uri);
}, { immediate: false });

// --- UI handlers ---
const showFaq = (): void => { showScreen.value = 'faq'; };
const noFaq = (): void => { showScreen.value = 'main'; };
const showOptions = (): void => { showScreen.value = 'options'; };
const noOptions = (): void => { showScreen.value = 'main'; };

const setOption = (name: string, value: string | number | boolean): void => {
  if (name === 'sorting') sorting.value = value as string;
  if (name === 'autoNumber') autoNumber.value = value as boolean;
  if (name === 'defaultNumber') defaultNumber.value = value as number;
  if (name === 'showDeployTable') showDeployTable.value = value as boolean;
  localStorage.setItem(name, value.toString());
};

// --- initialise from URL ---
let objStr = decodeURI(document.location.search);
const army = objStr.split('=')[0].slice(1);
if (army === 'a') {
  // legacy from shitty sharing url
  objStr = objStr.split('&')[0].substr(3);
  hydrateArmy(decodeLegacyArmy(objStr));
} else if (army === 'b') {
  // legacy from before we had multi armies
  objStr = objStr.split('&')[0].substr(3);
  hydrateCompactArmy(objStr, 'punic');
} else if (Object.keys(PERIODS).includes(army)) {
  objStr = objStr.split('&')[0].substr(army.length + 2);
  hydrateCompactArmy(objStr, army);
}

defineExpose({ selectNation, sharable });
</script>
<style scoped lang="scss">

</style>
