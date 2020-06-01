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
        <faq-me v-if="faqIsVisible"
          v-on:no-faq="noFaq"
        >
        </faq-me>
        <div  v-if="!faqIsVisible">
          <top-buttons
            v-bind:army-changed="armyChanged"
            v-on:show-faq="showFaq"
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
      </div>
      <toastr v-bind:message="toastrMessage"></toastr>
    </div>
</template>

<script>
import Vue from 'vue';
import allLists from '../helpers/lists';
import TopButtons from './TopButtons.vue';
import HeaderSection from './HeaderSection.vue';
import IntroScreen from './IntroScreen.vue';
import SharableLink from './SharableLink.vue';
import TitleRow from './TitleRow.vue';
import Toastr from './Toastr.vue';
import UnitRow from './UnitRow.vue';
import TraitsList from './TraitsList.vue';
import FaqMe from './FaqMe.vue';

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
    'faq-me': FaqMe,
  },
  data: function data() {
    return {
      title: 'Clashculator',
      allLists,
      selectedPeriod: 'punic',
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
      faqIsVisible: false,
    };
  },
  computed: {
    periods: function periods() {
      return Object.keys(this.allLists);
    },
    periodLists: function periodLists() {
      return this.allLists[this.selectedPeriod];
    },
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
    armyDetailsCompact: function armyDetailsCompact() {
      let ad = Object.keys(this.periodLists).indexOf(this.selectedNation).toString(32);
      ad += this.armyContents.reduce((acc, unit) => {
        let ret = unit.size.toString(32);
        ret += Object.keys(this.periodLists[this.selectedNation]).indexOf(unit.type).toString(32);
        let optionsBin = '1';
        for (let i = 0; i < 14; i += 1) {
          if (unit.selectedOptions.indexOf(i) > -1) {
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
    armyChanged: function armyChanged() {
      return (JSON.stringify(this.armyDetails) === JSON.stringify(this.onDiskArmy))
              && (this.armyName === this.savedArmyName);
    },
    sharable: function sharable() {
      const loc = `${document.location.protocol}//${document.location.host}${document.location.pathname}`;
      return `${loc}?${this.selectedPeriod}=${encodeURIComponent(this.armyDetailsCompact)}`;
    },
  },
  created: function created() {
    let objStr = decodeURI(document.location.search);
    // just the first arg, FB or something might have added other params
    if (objStr.substr(0, 3) === '?a=') {
      // legacy from shitty sharing url
      objStr = objStr.split('&')[0].substr(3);
      objStr = atob(decodeURIComponent(objStr));
      const savedArmy = JSON.parse(objStr);
      this.hydrateArmy(savedArmy);
    } else if (objStr.substr(0, 3) === '?b=') {
      // legacy from before we had multi armies
      objStr = objStr.split('&')[0].substr(3);
      this.hydrateCompactArmy(objStr, 'punic');
    } else if (objStr.substr(0, 7) === '?punic=') {
      objStr = objStr.split('&')[0].substr(7);
      this.hydrateCompactArmy(objStr, 'punic');
    } else if (objStr.substr(0, 9) === '?darkAge=') {
      objStr = objStr.split('&')[0].substr(9);
      this.hydrateCompactArmy(objStr, 'darkAge');
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
      this.selectedPeriod = savedObj.sp || 'punic';
      this.selectedNation = savedObj.sa;
      this.armyName = savedObj.an;
      savedObj.ac.forEach((unit) => {
        const newUnit = this.addUnit(unit.type);
        newUnit.size = unit.size;
        newUnit.selectedOptions = unit.selectedOptions;
      });
    },
    hydrateCompactArmy: function hydrateCompactArmy(str, sp) {
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
        const optsArr = [];
        const newUnit = this.addUnit(Object.keys(this.periodLists[this.selectedNation])[type]);
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
    selectNation: function selectNation(selectedNation) {
      this.selectedNation = selectedNation;
    },
    selectPeriod: function selectPeriod(selectedPeriod) {
      this.selectedPeriod = selectedPeriod;
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
      const newEntry = { ...this.periodLists[this.selectedNation][unitToAdd] };
      Vue.set(newEntry, 'id', Math.random());
      Vue.set(newEntry, 'size', newEntry.fixedFigures !== undefined ? newEntry.fixedFigures : 6);
      Vue.set(newEntry, 'selectedOptions', []);
      Vue.set(newEntry, 'excludedOptions', []);
      Vue.set(newEntry, 'upgradedArmour', '');
      Vue.set(newEntry, 'upgradedShield', '');
      Vue.set(newEntry, 'upgradedWeapon', '');
      Vue.set(newEntry, 'upgradedBarding', '');
      Vue.set(newEntry, 'type', unitToAdd);
      newEntry.unitSize = unitSize.bind(newEntry);
      this.armyContents.push(newEntry);
      this.unitToAdd = '';
      return newEntry;
    },
    removeUnit: function removeUnit(idx) {
      this.armyContents.splice(idx, 1);
    },
    showFaq: function showFaq() {
      this.faqIsVisible = true;
    },
    noFaq: function faq() {
      this.faqIsVisible = false;
    },
    reset: function reset() {
      this.selectedNation = '';
      this.armyContents = [];
      this.armyName = 'Unknown soldiers';
      this.onDiskArmy = '';
      this.savedArmyName = '';
      this.localSaves = JSON.parse(localStorage.getItem('armyNames')) || [];
      window.history.pushState('', '', `${window.location.protocol}\\\\${window.location.host}${window.location.pathname}`);
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
        const list = this.periodLists[this.selectedNation];
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
