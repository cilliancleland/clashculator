<template>
    <div >
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
    </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
} from 'vue';
import {
  Unit,
  SavedArmy,
  SelectedUnit,
  LookupArmy,
  // LookupLists,
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
import Toastr from './ToastrBar.vue';
import UnitRow from './UnitRow.vue';
import TraitsList from './TraitsList.vue';
import DeploymentTable from './DeploymentTable.vue';
import FaqMe from './FaqMe.vue';
import OptionsScreen from './OptionsScreen.vue';
import { shuffle } from '../helpers/helpers';

const title = 'Clashculator';
const selectedPeriod = ref('punic');
const selectedNation = ref('');
const armyContents = ref([] as SelectedUnit[]);
const onDiskArmy = ref([] as ArmyDetail[]);
const savedArmyName = ref('');
const unitToAdd = ref('');
const armyName = ref('Unknown soldiers');
const localSaves = ref([] as string[]);
const savedName = ref('');
const toastrMessage = ref('');
const toastrTimeout = ref(0);
const showScreen = ref('main');
const sorting = ref('manual');
const autoNumber = ref(false);
const defaultNumber = ref(6);
const showDeployTable = ref(false);

const deploymentNumbers = computed<number[][]>(() => {
  const numCounters: number = armyContents.value.reduce((total, unit) => {
    return total + unit.numTokens;
  }, 0);
  const shuffled: number[] = shuffle([...Array(numCounters).keys()]);
  const sorted = armyContents.value.map((unit) => {
    return shuffled.splice(0, unit.numTokens);
  }, []);
  return sorted; // sorted.map((x) => { return x + 1; });
});

const periods = computed<string[]>(() => {
  return Object.keys(allLists);
});
const periodLists = computed<LookupArmy>(() => {
  return allLists[selectedPeriod.value];
});

const mostTraits = computed<string[]>(() => {
  const allTraits = armyContents.value.reduce((acc, unit: SelectedUnit) => {
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
});

const armyDetails = computed<ArmyDetail[]>(() => {
  return armyContents.value.reduce((acc: ArmyDetail[], unit: SelectedUnit) => {
    acc.push({
      size: unit.size,
      selectedOptions: unit.selectedOptions,
      type: unit.type,
    });
    return acc;
  }, [] as ArmyDetail[]);
});

const armyDetailsCompact = computed<string>(() => {
  let ad = Object.keys(periodLists.value).indexOf(selectedNation.value).toString(32);
  ad += armyContents.value.reduce((acc, unit) => {
    const type = unit.type.toString();
    let ret = unit.size.toString(32);
    ret += Object.keys(periodLists.value[selectedNation.value]).indexOf(type).toString(32);
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
  ad += `_${armyName.value}`;
  return ad;
});

const armyUnchanged = computed<boolean>(() => {
  return (JSON.stringify(armyDetails.value) === JSON.stringify(onDiskArmy.value))
          && (armyName.value === savedArmyName.value);
});

const sharable = computed<string>(() => {
  const loc = `${document.location.protocol}//${document.location.host}${document.location.pathname}`;
  const uri = `${loc}?${selectedPeriod.value}=${encodeURIComponent(armyDetailsCompact.value)}`;
  // side effect alert!!
  window.history.pushState({}, 'Clashculator', uri);
  return uri;
});


const showFaq = (): void => {
  showScreen.value = 'faq';
};
const noFaq = (): void => {
  showScreen.value = 'main';
};
const showOptions = (): void => {
  showScreen.value = 'options';
};
const noOptions = (): void => {
  showScreen.value = 'main';
};

const reset = (): void => {
  selectedNation.value = '';
  armyContents.value = [];
  armyName.value = 'Unknown soldiers';
  onDiskArmy.value = [];
  savedArmyName.value = '';
  localSaves.value = JSON.parse(localStorage.getItem('armyNames') || '[]');
  window.history.pushState('', '', `${window.location.protocol}//${window.location.host}${window.location.pathname}`);
};
// const setUnitSave = (index: number, save: string): void => {
//   const newContents = [...armyContents.value];
//   newContents[index].calcSave = save;
//   armyContents.value = newContents;
// };

const showToastr = (msg: string): void => {
  clearTimeout(toastrTimeout.value);
  toastrMessage.value = msg;
  toastrTimeout.value = setTimeout(() => {
    toastrMessage.value = '';
  }, 3000);
};

const reposUp = (idx: number): void => {
  const tmp = armyContents.value[idx];
  armyContents.value.splice(idx, 1);
  armyContents.value.splice(idx - 1, 0, tmp);
};
const reposDown = (idx: number): void => {
  const tmp = armyContents.value[idx];
  armyContents.value.splice(idx, 1);
  armyContents.value.splice(idx + 1, 0, tmp);
};
const armySort = (): void => {
  armyContents.value.sort((a: SelectedUnit, b: SelectedUnit) => {
    const list: LookupUnit = periodLists.value[selectedNation.value];
    const orderA: number = Object.keys(list).indexOf(a.type.toString());
    const orderB: number = Object.keys(list).indexOf(b.type.toString());
    return orderA - orderB;
  });
};
const addUnit = (unitNName: string): SelectedUnit => {
  // eslint-disable-next-line no-unused-vars
  function unitSize(this: SelectedUnit): number {
    return this.traits.includes('feral')
      ? this.size + 1
      : this.size;
  }
  const base: Unit = periodLists.value[selectedNation.value][unitNName];
  if (!base) return {} as SelectedUnit;
  const size = 'fixedFigures' in base ? base.fixedFigures : defaultNumber.value;
  // const newEntry: SelectedUnit = Vue.observable({
  const newEntry: SelectedUnit = reactive({
    ...base,
    id: Math.random(),
    size: size || 1,
    selectedOptions: [] as number[],
    excludedOptions: [] as number[],
    upgradedArmour: '',
    upgradedShield: '',
    upgradedWeapon: '',
    upgradedBarding: '',
    type: unitNName,
    numTokens: 0,
    unitSize,
  });
  newEntry.unitSize = unitSize.bind(newEntry);
  armyContents.value.push(newEntry);
  unitToAdd.value = '';
  if (sorting.value === 'auto') armySort();
  return newEntry;
};

const hydrateArmy = (savedObj: SavedArmy): void => {
  selectedPeriod.value = savedObj.sp || 'punic';
  selectedNation.value = savedObj.sa;
  armyName.value = savedObj.an;
  savedObj.ac.forEach((unit: ArmyDetail) => {
    const newUnit = addUnit(unit.type);
    newUnit.size = unit.size;
    newUnit.selectedOptions = unit.selectedOptions;
  });
};

const hydrateCompactArmy = (str: string, sp: string): void => {
  const pos = str.indexOf('_');
  selectedPeriod.value = sp;
  armyName.value = str.substr(pos + 1);
  selectedNation.value = Object.keys(periodLists.value)[parseInt(str.substr(0, 1), 32)];
  let nums = str.substr(1, pos).replace(/-/g, 'g00').replace(/~/g, 'o00');
  while (nums.length > 4) {
    const size = parseInt(nums.substr(0, 1), 32);
    const unitIndex = parseInt(nums.substr(1, 1), 32);
    const opts = parseInt(nums.substr(2, 3), 32);
    const optsBin = opts.toString(2);
    const optsArr: number[] = [];
    const type = Object.keys(periodLists.value[selectedNation.value])[unitIndex];
    const newUnit = addUnit(type);
    newUnit.size = size;
    for (let i = 1; i < 15; i += 1) {
      if (optsBin.substr(i, 1) === '1') {
        optsArr.push(i - 1);
      }
    }
    newUnit.selectedOptions = optsArr;
    nums = nums.substr(5);
  }
};

const loadArmy = (name: string): void => {
  const savedArmies = JSON.parse(localStorage.getItem('armies') || '{}');
  const savedArmy = savedArmies[name];
  hydrateArmy(savedArmy);
  savedArmyName.value = name;
  savedName.value = '';
  onDiskArmy.value = JSON.parse(JSON.stringify(armyDetails.value));
};

const selectNation = (nation: string): void => {
  selectedNation.value = nation;
};

const selectPeriod = (period: string): void => {
  selectedPeriod.value = period;
};

const saveLocally = (): void => {
  const armyNames = JSON.parse(localStorage.getItem('armyNames') || '[]');
  const armies = JSON.parse(localStorage.getItem('armies') || '{}');
  const confirmMessage = 'An army by this name already exists locally.\n\nClick ok to overwrite!';
  // eslint-disable-next-line
  if (((armyNames.includes(armyName.value) && confirm(confirmMessage)) || !armyNames.includes(armyName.value))) {
    if (!armyNames.includes(armyName.value)) {
      armyNames.push(armyName.value);
    }
    armies[armyName.value] = {
      an: armyName.value,
      sa: selectedNation.value,
      sp: selectedPeriod.value,
      ac: armyDetails.value,
    };
    localStorage.setItem('armyNames', JSON.stringify(armyNames));
    localStorage.setItem('armies', JSON.stringify(armies));
    onDiskArmy.value = JSON.parse(JSON.stringify(armyDetails.value));
    savedArmyName.value = armyName.value;
    showToastr('Your army has been saved to this device');
  }
};

const deleteLocally = (): void => {
  const armyNames = JSON.parse(localStorage.getItem('armyNames') || '[]');
  const armies = JSON.parse(localStorage.getItem('armies') || '{}');
  armyNames.splice(armyNames.indexOf(armyName.value), 1);
  delete armies[armyName.value];
  localStorage.setItem('armyNames', JSON.stringify(armyNames));
  localStorage.setItem('armies', JSON.stringify(armies));
  reset();
};

const removeUnit = (idx: number): void => {
  armyContents.value.splice(idx, 1);
};
const setOption = (name: string, value: string | number | boolean): void => {
  if (name === 'sorting') sorting.value = value as string;
  if (name === 'autoNumber') autoNumber.value = value as boolean;
  if (name === 'defaultNumber') defaultNumber.value = value as number;
  if (name === 'showDeployTable') showDeployTable.value = value as boolean;
  localStorage.setItem(name, value.toString());
};

const updateRow = (index: number, field: string, value: unknown): void => {
  (armyContents.value[index] as any)[field] = value;
};
const updateArmyName = (name: string): void => {
  armyName.value = name;
};

// initialise
let objStr = decodeURI(document.location.search);
const army = objStr.split('=')[0].slice(1);
// just the first arg, FB or something might have added other params
if (army === 'a') {
  // legacy from shitty sharing url
  objStr = objStr.split('&')[0].substr(3);
  objStr = atob(decodeURIComponent(objStr));
  const savedArmy = JSON.parse(objStr);
  hydrateArmy(savedArmy);
} else if (army === 'b') {
  // legacy from before we had multi armies
  objStr = objStr.split('&')[0].substr(3);
  hydrateCompactArmy(objStr, 'punic');
} else if (Object.keys(PERIODS).includes(army)) {
  objStr = objStr.split('&')[0].substr(army.length + 2);
  hydrateCompactArmy(objStr, army);
}

localSaves.value = JSON.parse(localStorage.getItem('armyNames') || '[]');
// see if any options are set
sorting.value = localStorage.getItem('sorting') || sorting.value;
autoNumber.value = localStorage.getItem('autoNumber') === 'true' || autoNumber.value;
defaultNumber.value = parseInt(localStorage.getItem('defaultNumber') || '6', 10) || defaultNumber.value;
showDeployTable.value = (localStorage.getItem('showDeployTable') === 'true') || showDeployTable.value;

</script>
<style scoped lang="scss">

</style>
