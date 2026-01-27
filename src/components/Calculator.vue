<template>
    <div >
      <h1>{{ title }}</h1>
      <intro-screen  v-if="!selectedNation"
        v-bind:selected-army="selectedNation"
        v-bind:lists="periodLists"
        v-bind:periods="periods"
        v-bind:local-saves="localSaves"
        v-bind:saved-name="savedName"
        v-bind:selected-period="selectedPeriod"
        v-on:load-army="loadArmy"
        v-on:select-nation="selectNation"
        v-on:select-period="selectPeriod"
      ></intro-screen>
      <div v-if="selectedNation" >
        <faq-me v-if="showScreen=='faq'"
          v-on:no-faq="noFaq"
        ></faq-me>
        <options-screen v-if="showScreen=='options'"
          v-on:no-options="noOptions"
          v-on:set-option="setOption"
          v-bind:sorting="sorting"
          v-bind:auto-number="autoNumber"
          v-bind:default-number="defaultNumber"
          v-bind:show-deploy-table="showDeployTable"
        ></options-screen>
        <div v-if="showScreen=='main'">
          <top-buttons
            v-bind:army-unchanged="armyUnchanged"
            v-on:show-faq="showFaq"
            v-on:show-options="showOptions"
            v-on:reset="reset"
            v-on:save-locally="saveLocally"
            v-on:delete-locally="deleteLocally"
          ></top-buttons>
          <header-section
            v-bind:army-contents="armyContents"
            v-bind:selected-nation="selectedNation"
            v-bind:army-name="armyName"
            v-bind:lists="periodLists"
            v-bind:unit-to-add="unitToAdd"
            v-on:update-army-name="updateArmyName"
            v-on:add-unit="addUnit"
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
            v-bind:sharable="sharable"
            v-on:show-toastr="showToastr"
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
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  Unit,
  SavedArmy,
  SelectedUnit,
  LookupArmy,
  LookupLists,
  ArmyDetail,
  LookupUnit,
} from '../helpers/types';
import allLists from '../helpers/lists';
import { PERIODS } from '../helpers/constants';
import TopButtons from './TopButtons.vue';
import HeaderSection from './HeaderSection.vue';
import IntroScreen from './IntroScreen.vue';
import SharableLink from './SharableLink.vue';
import TitleRow from './TitleRow.vue';
import Toastr from './Toastr.vue';
import UnitRow from './UnitRow.vue';
import TraitsList from './TraitsList.vue';
import DeploymentTable from './DeploymentTable.vue';
import FaqMe from './FaqMe.vue';
import OptionsScreen from './OptionsScreen.vue';
import { shuffle } from '../helpers/helpers';

export default Vue.extend({
  name: 'Calculator',
  components: {
    'top-buttons': TopButtons,
    'header-section': HeaderSection,
    'intro-screen': IntroScreen,
    'sharable-link': SharableLink,
    'title-row': TitleRow,
    'deployment-table': DeploymentTable,
    toastr: Toastr,
    'unit-row': UnitRow,
    'traits-list': TraitsList,
    'faq-me': FaqMe,
    'options-screen': OptionsScreen,
  },

  data: function data(): {
  title: string;
  allLists: LookupLists;
  selectedPeriod: string;
  selectedNation: string;
  armyContents: SelectedUnit[];
  onDiskArmy: ArmyDetail[];
  savedArmyName: string;
  unitToAdd: string;
  armyName: string;
  localSaves: string[];
  savedName: string;
  toastrMessage: string;
  toastrTimeout: number;
  showScreen: string;
  sorting: string;
  autoNumber: boolean;
  defaultNumber: number;
  showDeployTable: boolean;
  } {
    return {
      title: 'Clashculator',
      allLists: allLists as LookupLists,
      selectedPeriod: 'punic',
      selectedNation: '',
      armyContents: [] as SelectedUnit[],
      onDiskArmy: [] as ArmyDetail[],
      savedArmyName: '',
      unitToAdd: '',
      armyName: 'Unknown soldiers',
      localSaves: [] as string[],
      savedName: '',
      toastrMessage: '',
      toastrTimeout: 0,
      showScreen: 'main',
      sorting: 'manual',
      autoNumber: false,
      defaultNumber: 6,
      showDeployTable: false,
    };
  },
  computed: {
    deploymentNumbers: function deploymentNumbers(): number[][] {
      const numCounters: number = this.armyContents.reduce((total, unit) => {
        return total + unit.numTokens;
      }, 0);
      const shuffled: number[] = shuffle([...Array(numCounters).keys()]);
      const sorted = this.armyContents.map((unit) => {
        return shuffled.splice(0, unit.numTokens);
      }, []);
      return sorted; // sorted.map((x) => { return x + 1; });
    },
    periods: function periods(): string[] {
      return Object.keys(this.allLists);
    },
    periodLists: function periodLists(): LookupArmy {
      return this.allLists[this.selectedPeriod];
    },
    mostTraits: function mostTraits(): string[] {
      const allTraits = this.armyContents.reduce((acc, unit: SelectedUnit) => {
        const upgradedTraits: string[] = [];
        unit.selectedOptions.forEach((key) => {
          const option = unit.options[key];
          if (option && option.upgradeTraits) {
            upgradedTraits.push(...option.upgradeTraits);
          }
        });
        return [...new Set(acc.concat(unit.traits, upgradedTraits))];
      }, [] as string[]).sort();
      return allTraits.reduce((acc: string[], val: string) => {
        if (val.substring(0, 5) !== 'wound' && val.substring(0, 6) !== 'attack') {
          acc.push(val);
        }
        return acc;
      }, [] as string[]);
    },
    armyDetails: function armyDetails(): ArmyDetail[] {
      return this.armyContents.reduce((acc: ArmyDetail[], unit: SelectedUnit) => {
        acc.push({
          size: unit.size,
          selectedOptions: unit.selectedOptions,
          type: unit.type,
        });
        return acc;
      }, [] as ArmyDetail[]);
    },
    armyDetailsCompact: function armyDetailsCompact(): string {
      let ad = Object.keys(this.periodLists).indexOf(this.selectedNation).toString(32);
      ad += this.armyContents.reduce((acc, unit) => {
        const type = unit.type.toString();
        let ret = unit.size.toString(32);
        ret += Object.keys(this.periodLists[this.selectedNation]).indexOf(type).toString(32);
        let optionsBin = '1';
        for (let i = 0; i < 14; i += 1) {
          if (unit.selectedOptions.includes(i)) {
            optionsBin += '1';
          } else {
            optionsBin += '0';
          }
        }
        ret += parseInt(optionsBin, 2).toString(32).replace(/g00/g, '-').replace(/o00/g, '~');
        return acc + ret;
      }, '');
      ad += `_${this.armyName}`;
      return ad;
    },
    armyUnchanged: function armyUnchanged(): boolean {
      return (JSON.stringify(this.armyDetails) === JSON.stringify(this.onDiskArmy))
              && (this.armyName === this.savedArmyName);
    },
    sharable: function sharable(): string {
      const loc = `${document.location.protocol}//${document.location.host}${document.location.pathname}`;
      const uri = `${loc}?${this.selectedPeriod}=${encodeURIComponent(this.armyDetailsCompact)}`;
      // side effect alert!!
      window.history.pushState({}, 'Clashculator', uri);
      return uri;
    },
  },
  created: function created(): void {
    let objStr = decodeURI(document.location.search);
    const army = objStr.split('=')[0].slice(1);
    // just the first arg, FB or something might have added other params
    if (army === 'a') {
      // legacy from shitty sharing url
      objStr = objStr.split('&')[0].substr(3);
      objStr = atob(decodeURIComponent(objStr));
      const savedArmy = JSON.parse(objStr);
      this.hydrateArmy(savedArmy);
    } else if (army === 'b') {
      // legacy from before we had multi armies
      objStr = objStr.split('&')[0].substr(3);
      this.hydrateCompactArmy(objStr, 'punic');
    } else if (Object.keys(PERIODS).includes(army)) {
      objStr = objStr.split('&')[0].substr(army.length + 2);
      this.hydrateCompactArmy(objStr, army);
    }

    this.localSaves = JSON.parse(localStorage.getItem('armyNames') || '[]');
    // see if any options are set
    this.sorting = localStorage.getItem('sorting') || this.sorting;
    this.autoNumber = localStorage.getItem('autoNumber') === 'true' || this.autoNumber;
    this.defaultNumber = parseInt(localStorage.getItem('defaultNumber') || '6', 10) || this.defaultNumber;
    this.showDeployTable = (localStorage.getItem('showDeployTable') === 'true') || this.showDeployTable;
  },
  methods: {
    // setUnitSave: function setUnitSave(index, save) {
    //   this.armyContents[index].calcSave = save;
    // },
    loadArmy: function loadArmy(savedName: string): void {
      const savedArmies = JSON.parse(localStorage.getItem('armies') || '{}');
      const savedArmy = savedArmies[savedName];
      this.hydrateArmy(savedArmy);
      this.savedArmyName = savedName;
      this.savedName = '';
      this.onDiskArmy = JSON.parse(JSON.stringify(this.armyDetails));
    },
    hydrateArmy: function hydrateArmy(savedObj: SavedArmy): void {
      this.selectedPeriod = savedObj.sp || 'punic';
      this.selectedNation = savedObj.sa;
      this.armyName = savedObj.an;
      savedObj.ac.forEach((unit: ArmyDetail) => {
        const newUnit = this.addUnit(unit.type);
        newUnit.size = unit.size;
        newUnit.selectedOptions = unit.selectedOptions;
      });
    },
    hydrateCompactArmy: function hydrateCompactArmy(str: string, sp: string): void {
      const pos = str.indexOf('_');
      this.selectedPeriod = sp;
      this.armyName = str.substr(pos + 1);
      this.selectedNation = Object.keys(this.periodLists)[parseInt(str.substr(0, 1), 32)];
      let nums = str.substr(1, pos).replace(/-/g, 'g00').replace(/~/g, 'o00');
      while (nums.length > 4) {
        const size = parseInt(nums.substr(0, 1), 32);
        const type = parseInt(nums.substr(1, 1), 32);
        const opts = parseInt(nums.substr(2, 3), 32);
        const optsBin = opts.toString(2);
        const optsArr: number[] = [];
        const unitIndex = Object.keys(this.periodLists[this.selectedNation])[type];
        const newUnit = this.addUnit(parseInt(unitIndex, 10));
        newUnit.size = size;
        for (let i = 1; i < 15; i += 1) {
          if (optsBin.substr(i, 1) === '1') {
            optsArr.push(i - 1);
          }
        }
        newUnit.selectedOptions = optsArr;
        nums = nums.substr(5);
      }
    },
    selectNation: function selectNation(selectedNation: string): void {
      this.selectedNation = selectedNation;
    },
    selectPeriod: function selectPeriod(selectedPeriod: string): void {
      this.selectedPeriod = selectedPeriod;
    },
    saveLocally: function saveLocally(): void {
      const armyNames = JSON.parse(localStorage.getItem('armyNames') || '[]');
      const armies = JSON.parse(localStorage.getItem('armies') || '{}');
      const confirmMessage = 'An army by this name already exists locally.\n\nClick ok to overwrite!';
      // eslint-disable-next-line
      if (((armyNames.includes(this.armyName) && confirm(confirmMessage)) || !armyNames.includes(this.armyName))) {
        if (!armyNames.includes(this.armyName)) {
          armyNames.push(this.armyName);
        }
        armies[this.armyName] = {
          an: this.armyName,
          sa: this.selectedNation,
          sp: this.selectedPeriod,
          ac: this.armyDetails,
        };
        localStorage.setItem('armyNames', JSON.stringify(armyNames));
        localStorage.setItem('armies', JSON.stringify(armies));
        this.onDiskArmy = JSON.parse(JSON.stringify(this.armyDetails));
        this.savedArmyName = this.armyName;
        this.showToastr('Your army has been saved to this device');
      }
    },
    deleteLocally: function deleteLocally(): void {
      const armyNames = JSON.parse(localStorage.getItem('armyNames') || '[]');
      const armies = JSON.parse(localStorage.getItem('armies') || '{}');
      armyNames.splice(armyNames.indexOf(this.armyName), 1);
      delete armies[this.armyName];
      localStorage.setItem('armyNames', JSON.stringify(armyNames));
      localStorage.setItem('armies', JSON.stringify(armies));
      this.reset();
    },
    showToastr: function showToastr(msg: string): void {
      clearTimeout(this.toastrTimeout);
      this.toastrMessage = msg;
      const v = this;
      this.toastrTimeout = setTimeout(() => {
        v.toastrMessage = '';
      }, 3000);
    },
    addUnit: function addUnit(unitToAdd: number): SelectedUnit {
      // eslint-disable-next-line no-unused-vars
      function unitSize(this: SelectedUnit): number {
        return this.traits.includes('feral')
          ? this.size + 1
          : this.size;
      }
      const base: Unit = this.periodLists[this.selectedNation][unitToAdd];
      const size = 'fixedFigures' in base ? base.fixedFigures : this.defaultNumber;
      const newEntry: SelectedUnit = Vue.observable({
        ...base,
        id: Math.random(),
        size: size || 1,
        selectedOptions: [] as number[],
        excludedOptions: [] as number[],
        upgradedArmour: '',
        upgradedShield: '',
        upgradedWeapon: '',
        upgradedBarding: '',
        type: unitToAdd,
        numTokens: 0,
        unitSize,
      });
      newEntry.unitSize = unitSize.bind(newEntry);
      this.armyContents.push(newEntry);
      this.unitToAdd = '';
      if (this.sorting === 'auto') this.armySort();
      return newEntry;
    },
    removeUnit: function removeUnit(idx: number): void {
      this.armyContents.splice(idx, 1);
    },
    showFaq: function showFaq(): void {
      this.showScreen = 'faq';
    },
    noFaq: function noFaq(): void {
      this.showScreen = 'main';
    },
    showOptions: function showOptions(): void {
      this.showScreen = 'options';
    },
    noOptions: function noOptions(): void {
      this.showScreen = 'main';
    },
    setOption: function setOption(name: string, value: string): void {
      Vue.set(this, name, value);
      localStorage.setItem(name, value);
    },
    reset: function reset() {
      this.selectedNation = '';
      this.armyContents = [];
      this.armyName = 'Unknown soldiers';
      this.onDiskArmy = [];
      this.savedArmyName = '';
      this.localSaves = JSON.parse(localStorage.getItem('armyNames') || '[]');
      window.history.pushState('', '', `${window.location.protocol}//${window.location.host}${window.location.pathname}`);
    },
    reposUp: function reposUp(idx: number): void {
      const tmp = this.armyContents[idx];
      this.armyContents.splice(idx, 1);
      this.armyContents.splice(idx - 1, 0, tmp);
    },
    reposDown: function reposDown(idx: number): void {
      const tmp = this.armyContents[idx];
      this.armyContents.splice(idx, 1);
      this.armyContents.splice(idx + 1, 0, tmp);
    },
    armySort: function armySort(): void {
      this.armyContents.sort((a: SelectedUnit, b: SelectedUnit) => {
        const list: LookupUnit = this.periodLists[this.selectedNation];
        const orderA: number = Object.keys(list).indexOf(a.type.toString());
        const orderB: number = Object.keys(list).indexOf(b.type.toString());
        return orderA - orderB;
      });
    },
    updateRow: function updateRow(index: number, field: string, value: unknown): void {
      const newRow: SelectedUnit = { ...this.armyContents[index] };
      Vue.set(newRow, field, value);
      Vue.set(this.armyContents, index, newRow);
    },
    updateArmyName: function updateArmyName(armyName: string): void {
      this.armyName = armyName;
    },
  },
});
</script>
<style scoped lang="scss">

</style>
