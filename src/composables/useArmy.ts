import { ref, reactive, computed } from 'vue';
import {
  Unit,
  SavedArmy,
  SelectedUnit,
  LookupArmy,
  ArmyDetail,
  LookupUnit,
} from '../helpers/types';
import allLists from '../helpers/lists';
import { encodeArmy, decodeCompactArmy } from '../helpers/armyCodec';
import { shuffle } from '../helpers/helpers';

export function useArmy(notify: (msg: string) => void = () => {}) {
  // --- state ---
  const selectedPeriod = ref('punic');
  const selectedNation = ref('');
  const armyContents = ref<SelectedUnit[]>([]);
  const onDiskArmy = ref<ArmyDetail[]>([]);
  const savedArmyName = ref('');
  const unitToAdd = ref('');
  const armyName = ref('Unknown soldiers');
  const localSaves = ref<string[]>(JSON.parse(localStorage.getItem('armyNames') || '[]'));
  const savedName = ref('');
  const sorting = ref(localStorage.getItem('sorting') || 'manual');
  const defaultNumber = ref(parseInt(localStorage.getItem('defaultNumber') || '6', 10) || 6);

  // --- computed ---
  const periodLists = computed<LookupArmy>(() => allLists[selectedPeriod.value]);
  const periods = computed<string[]>(() => Object.keys(allLists));

  const armyDetails = computed<ArmyDetail[]>(() => {
    return armyContents.value.reduce((acc: ArmyDetail[], unit: SelectedUnit) => {
      acc.push({ size: unit.size, selectedOptions: unit.selectedOptions, type: unit.type });
      return acc;
    }, []);
  });

  const armyDetailsCompact = computed<string>(() => {
    return encodeArmy(armyDetails.value, selectedNation.value, armyName.value, periodLists.value);
  });

  const armyUnchanged = computed<boolean>(() => {
    return (JSON.stringify(armyDetails.value) === JSON.stringify(onDiskArmy.value))
      && (armyName.value === savedArmyName.value);
  });

  const mostTraits = computed<string[]>(() => {
    const allTraits = armyContents.value.reduce((acc, unit: SelectedUnit) => {
      const upgradedTraits: string[] = [];
      unit.selectedOptions.forEach((key) => {
        const option = unit.options[key];
        if (option && option.upgradeTraits) upgradedTraits.push(...option.upgradeTraits);
      });
      return [...new Set(acc.concat(unit.traits, upgradedTraits))];
    }, [] as string[]).sort();
    return allTraits.reduce((acc: string[], val: string) => {
      if (val.substring(0, 5) !== 'wound' && val.substring(0, 6) !== 'attack') acc.push(val);
      return acc;
    }, []);
  });

  const deploymentNumbers = computed<number[][]>(() => {
    const numCounters = armyContents.value.reduce((total, unit) => total + unit.numTokens, 0);
    const shuffled = shuffle([...Array(numCounters).keys()]);
    return armyContents.value.map((unit) => shuffled.splice(0, unit.numTokens));
  });

  // --- mutations ---
  function armySort(): void {
    armyContents.value.sort((a: SelectedUnit, b: SelectedUnit) => {
      const list: LookupUnit = periodLists.value[selectedNation.value];
      const orderA = Object.keys(list).indexOf(a.type.toString());
      const orderB = Object.keys(list).indexOf(b.type.toString());
      return orderA - orderB;
    });
  }

  function addUnit(unitNName: string): SelectedUnit {
    function unitSize(this: SelectedUnit): number {
      return this.traits.includes('feral') ? this.size + 1 : this.size;
    }
    const base: Unit = periodLists.value[selectedNation.value][unitNName];
    if (!base) return {} as SelectedUnit;
    const size = 'fixedFigures' in base ? base.fixedFigures : defaultNumber.value;
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
  }

  function removeUnit(idx: number): void {
    armyContents.value.splice(idx, 1);
  }

  function reposUp(idx: number): void {
    const tmp = armyContents.value[idx];
    armyContents.value.splice(idx, 1);
    armyContents.value.splice(idx - 1, 0, tmp);
  }

  function reposDown(idx: number): void {
    const tmp = armyContents.value[idx];
    armyContents.value.splice(idx, 1);
    armyContents.value.splice(idx + 1, 0, tmp);
  }

  function updateRow(index: number, field: string, value: unknown): void {
    (armyContents.value[index] as any)[field] = value;
  }

  function updateArmyName(name: string): void {
    armyName.value = name;
  }

  function selectNation(nation: string): void {
    selectedNation.value = nation;
  }

  function selectPeriod(period: string): void {
    selectedPeriod.value = period;
  }

  // --- persistence ---
  function reset(): void {
    selectedNation.value = '';
    armyContents.value = [];
    armyName.value = 'Unknown soldiers';
    onDiskArmy.value = [];
    savedArmyName.value = '';
    localSaves.value = JSON.parse(localStorage.getItem('armyNames') || '[]');
    window.history.pushState('', '', `${window.location.protocol}//${window.location.host}${window.location.pathname}`);
  }

  function saveLocally(): void {
    const armyNames = JSON.parse(localStorage.getItem('armyNames') || '[]');
    const armies = JSON.parse(localStorage.getItem('armies') || '{}');
    const confirmMessage = 'An army by this name already exists locally.\n\nClick ok to overwrite!';
    // eslint-disable-next-line no-alert
    if ((armyNames.includes(armyName.value) && confirm(confirmMessage)) || !armyNames.includes(armyName.value)) {
      if (!armyNames.includes(armyName.value)) armyNames.push(armyName.value);
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
      notify('Your army has been saved to this device');
    }
  }

  function deleteLocally(): void {
    const armyNames = JSON.parse(localStorage.getItem('armyNames') || '[]');
    const armies = JSON.parse(localStorage.getItem('armies') || '{}');
    armyNames.splice(armyNames.indexOf(armyName.value), 1);
    delete armies[armyName.value];
    localStorage.setItem('armyNames', JSON.stringify(armyNames));
    localStorage.setItem('armies', JSON.stringify(armies));
    reset();
  }

  function loadArmy(name: string): void {
    const savedArmies = JSON.parse(localStorage.getItem('armies') || '{}');
    hydrateArmy(savedArmies[name]);
    savedArmyName.value = name;
    savedName.value = '';
    onDiskArmy.value = JSON.parse(JSON.stringify(armyDetails.value));
  }

  // --- hydration ---
  function hydrateArmy(savedObj: SavedArmy): void {
    selectedPeriod.value = savedObj.sp || 'punic';
    selectedNation.value = savedObj.sa;
    armyName.value = savedObj.an;
    savedObj.ac.forEach((unit: ArmyDetail) => {
      const newUnit = addUnit(unit.type);
      newUnit.size = unit.size;
      newUnit.selectedOptions = unit.selectedOptions;
    });
  }

  function hydrateCompactArmy(str: string, sp: string): void {
    selectedPeriod.value = sp;
    const decoded = decodeCompactArmy(str, periodLists.value);
    selectedNation.value = decoded.nation;
    armyName.value = decoded.armyName;
    decoded.units.forEach((unit) => {
      const newUnit = addUnit(unit.type);
      newUnit.size = unit.size;
      newUnit.selectedOptions = unit.selectedOptions;
    });
  }

  return {
    // state
    selectedPeriod,
    selectedNation,
    armyContents,
    armyName,
    onDiskArmy,
    savedArmyName,
    localSaves,
    savedName,
    unitToAdd,
    sorting,
    defaultNumber,
    // computed
    periodLists,
    periods,
    armyDetails,
    armyDetailsCompact,
    armyUnchanged,
    mostTraits,
    deploymentNumbers,
    // mutations
    addUnit,
    removeUnit,
    reposUp,
    reposDown,
    armySort,
    updateRow,
    updateArmyName,
    selectNation,
    selectPeriod,
    // persistence
    saveLocally,
    deleteLocally,
    loadArmy,
    reset,
    // hydration
    hydrateArmy,
    hydrateCompactArmy,
  };
}
