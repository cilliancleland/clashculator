<template>
    <div >
      <h1>{{ title }}</h1>
      <intro-screen  v-if="!selectedNation"
        v-bind:selected-army="selectedNation"
        v-bind:lists="lists"
        v-bind:local-saves="localSaves"
        v-bind:saved-name="savedName"
        v-on:load-army="loadArmy"
        v-on:select-nation="selectNation"
      ></intro-screen>
      <div v-if="selectedNation" >
        <top-buttons
          v-bind:army-changed="armyChanged"
          v-on:reset="reset"
          v-on:save-locally="saveLocally"
          v-on:delete-locally="deleteLocally"
        ></top-buttons>
        <header-section
          v-bind:army-contents="armyContents"
          v-bind:selected-nation="selectedNation"
          v-bind:army-name="armyName"
          v-bind:lists="lists"
          v-bind:unit-to-add="unitToAdd"
          v-on:update-army-name="updateArmyName"
          v-on:add-unit="addUnit"
        ></header-section>
        <title-row
          v-on:army-sort="armySort"
          ></title-row>
        <unit-row v-for="(row, index) in armyContents"
          v-bind:key="row.id"
          v-bind:row="row"
          v-bind:index="index"
          v-bind:num-units="armyContents.length"
          v-on:remove-unit="removeUnit"
          v-on:repos-up="reposUp"
          v-on:repos-down="reposDown"
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
      </div>
      <toastr v-bind:message="toastrMessage"></toastr>
    </div>
</template>

<script>
import Vue from 'vue';
import lists from '../helpers/lists';
import TopButtons from './TopButtons.vue';
import HeaderSection from './HeaderSection.vue';
import IntroScreen from './IntroScreen.vue';
import SharableLink from './SharableLink.vue';
import TitleRow from './TitleRow.vue';
import Toastr from './Toastr.vue';
import UnitRow from './UnitRow.vue';
import TraitsList from './TraitsList.vue';

export default {
  name: 'Calculator',
  components: {
    'top-buttons': TopButtons,
    'header-section': HeaderSection,
    'intro-screen': IntroScreen,
    'sharable-link': SharableLink,
    'title-row': TitleRow,
    toastr: Toastr,
    'unit-row': UnitRow,
    'traits-list': TraitsList,
  },
  data: function data() {
    return {
      title: 'Clashculator',
      lists,
      selectedNation: '',
      armyContents: [],
      onDiskArmy: '',
      savedArmyName: [],
      unitToAdd: '',
      armyName: 'Unknown soldiers',
      localSaves: [],
      savedName: '',
      toastrMessage: '',
      toastrTimeout: 0,
    };
  },
  computed: {
    mostTraits: function mostTraits() {
      const allTraits = this.armyContents.reduce((acc, unit) => {
        const upgradedTraits = [];
        unit.selectedOptions.forEach((key) => {
          upgradedTraits.push(...unit.options[key].upgradeTraits);
        });
        return [...new Set(acc.concat(unit.traits, upgradedTraits))];
      }, []).sort();
      return allTraits.reduce((acc, val) => {
        if (val.substring(0, 5) !== 'wound' && val.substring(0, 6) !== 'attack') {
          acc.push(val);
        }
        return acc;
      }, []);
    },
    armyDetails: function armyDetails() {
      return this.armyContents.reduce((acc, unit) => {
        acc.push({
          size: unit.size,
          selectedOptions: unit.selectedOptions,
          type: unit.type,
        });
        return acc;
      }, []);
    },
    armyChanged: function armyChanged() {
      return (JSON.stringify(this.armyDetails) === JSON.stringify(this.onDiskArmy))
              && (this.armyName === this.savedArmyName);
    },
    sharable: function sharable() {
      const loc = `${document.location.protocol}//${document.location.host}${document.location.pathname}`;
      const army = {
        an: this.armyName,
        sa: this.selectedNation,
        ac: this.armyDetails,
      };
      return `${loc}?a=${encodeURIComponent(btoa(JSON.stringify(army)))}`;
    },
  },
  created: function created() {
    let objStr = decodeURI(document.location.search);
    if (objStr.substr(0, 3) === '?a=') {
      // just the first arg, FB or something might have added other params
      objStr = objStr.split('&')[0].substr(3);
      objStr = atob(decodeURIComponent(objStr));
      const savedArmy = JSON.parse(objStr);
      this.hydrateArmy(savedArmy);
    }
    this.localSaves = JSON.parse(localStorage.getItem('armyNames')) || [];
  },
  methods: {
    loadArmy: function loadArmy(savedName) {
      const savedArmies = JSON.parse(localStorage.getItem('armies')) || {};
      const savedArmy = savedArmies[savedName];
      this.hydrateArmy(savedArmy);
      this.savedArmyName = savedName;
      this.savedName = '';
      this.onDiskArmy = JSON.parse(JSON.stringify(this.armyDetails));
    },
    hydrateArmy: function hydrateArmy(savedObj) {
      this.selectedNation = savedObj.sa;
      this.armyName = savedObj.an;
      savedObj.ac.forEach((unit) => {
        const newUnit = this.addUnit(unit.type);
        newUnit.size = unit.size;
        newUnit.selectedOptions = unit.selectedOptions;
      });
    },
    selectNation: function selectNation(selectedNation) {
      this.selectedNation = selectedNation;
    },
    saveLocally: function saveLocally() {
      const armyNames = JSON.parse(localStorage.getItem('armyNames')) || [];
      const armies = JSON.parse(localStorage.getItem('armies')) || {};
      const confirmMessage = 'An army by this name already exists locally.\n\nClick ok to overwrite!';
      // eslint-disable-next-line
      if (((armyNames.indexOf(this.armyName) > -1 && confirm(confirmMessage)) || armyNames.indexOf(this.armyName) < 0)) {
        if (armyNames.indexOf(this.armyName) < 0) {
          armyNames.push(this.armyName);
        }
        armies[this.armyName] = {
          an: this.armyName,
          sa: this.selectedNation,
          ac: this.armyDetails,
        };
        localStorage.setItem('armyNames', JSON.stringify(armyNames));
        localStorage.setItem('armies', JSON.stringify(armies));
        this.onDiskArmy = JSON.parse(JSON.stringify(this.armyDetails));
        this.savedArmyName = this.armyName;
        this.showToastr('Your army has been saved to this device');
      }
    },
    deleteLocally: function deleteLocally() {
      const armyNames = JSON.parse(localStorage.getItem('armyNames')) || [];
      const armies = JSON.parse(localStorage.getItem('armies')) || {};
      armyNames.splice(armyNames.indexOf(this.armyName), 1);
      delete armies[this.armyName];
      localStorage.setItem('armyNames', JSON.stringify(armyNames));
      localStorage.setItem('armies', JSON.stringify(armies));
      this.reset();
    },
    showToastr: function showToastr(msg) {
      clearTimeout(this.toastrTimeout);
      this.toastrMessage = msg;
      const v = this;
      this.toastrTimeout = setTimeout(() => {
        v.toastrMessage = '';
      }, 3000);
    },
    addUnit: function addUnit(unitToAdd) {
      function unitSize() {
        return this.traits.indexOf('feral') > -1
          ? this.size + 1
          : this.size;
      }
      const newEntry = { ...this.lists[this.selectedNation][unitToAdd] };
      Vue.set(newEntry, 'id', Math.random());
      Vue.set(newEntry, 'size', newEntry.fixedFigures !== undefined ? newEntry.fixedFigures : 6);
      Vue.set(newEntry, 'selectedOptions', []);
      Vue.set(newEntry, 'excludedOptions', []);
      Vue.set(newEntry, 'upgradedArmour', '');
      Vue.set(newEntry, 'upgradedShield', '');
      Vue.set(newEntry, 'upgradedWeapon', '');
      Vue.set(newEntry, 'type', unitToAdd);
      newEntry.unitSize = unitSize.bind(newEntry);
      this.armyContents.push(newEntry);
      this.unitToAdd = '';
      return newEntry;
    },
    removeUnit: function removeUnit(idx) {
      this.armyContents.splice(idx, 1);
    },
    reset: function reset() {
      this.selectedNation = '';
      this.armyContents = [];
      this.armyName = 'Unknown soldiers';
      this.onDiskArmy = '';
      this.savedArmyName = '';
      this.localSaves = JSON.parse(localStorage.getItem('armyNames')) || [];
    },
    reposUp: function reposUp(idx) {
      const tmp = this.armyContents[idx];
      this.armyContents.splice(idx, 1);
      this.armyContents.splice(idx - 1, 0, tmp);
    },
    reposDown: function reposDown(idx) {
      const tmp = this.armyContents[idx];
      this.armyContents.splice(idx, 1);
      this.armyContents.splice(idx + 1, 0, tmp);
    },
    armySort: function armySort() {
      this.armyContents.sort((a, b) => {
        const list = this.lists[this.selectedNation];
        const orderA = Object.keys(list).indexOf(a.type);
        const orderB = Object.keys(list).indexOf(b.type);
        return orderA - orderB;
      });
    },
    updateArmyName: function updateArmyName(armyName) {
      this.armyName = armyName;
    },
  },
};
</script>
<style scoped lang="scss">

</style>
