import { SelectedUnit, LookupLists, ArmyDetail } from '../helpers/types';

class ArmyService {
  public armyContents: SelectedUnit[] = [];

  public selectedNation = '';

  public selectedPeriod = '';

  public armyName = '';

  public savedArmyName = '';

  public onDiskArmy: ArmyDetail[] = [];

  constructor(
    public allLists: LookupLists,
    initialNation = '',
    initialPeriod = '',
    initialArmy: SelectedUnit[] = [],
  ) {
    this.selectedNation = initialNation;
    this.selectedPeriod = initialPeriod;
    this.armyContents = initialArmy;
  }

  addUnit(unit: SelectedUnit) {
    this.armyContents.push(unit);
  }

  removeUnit(index: number) {
    this.armyContents.splice(index, 1);
  }

  reposUp(index: number) {
    if (index > 0) {
      const temp = this.armyContents[index - 1];
      this.armyContents[index - 1] = this.armyContents[index];
      this.armyContents[index] = temp;
    }
  }

  reposDown(index: number) {
    if (index < this.armyContents.length - 1) {
      const temp = this.armyContents[index + 1];
      this.armyContents[index + 1] = this.armyContents[index];
      this.armyContents[index] = temp;
    }
  }

  resetArmy() {
    this.armyContents = [];
    this.armyName = '';
    this.selectedNation = '';
    this.selectedPeriod = '';
  }

  get deploymentNumbers(): number[][] {
    // Example: implement your deployment number logic here
    return this.armyContents.map(() => []);
  }

  get mostTraits(): string[] {
    const traitSet = new Set<string>();
    this.armyContents.forEach((unit) => {
      unit.traits.forEach((trait) => { traitSet.add(trait); });
      if (unit.selectedOptions) {
        unit.selectedOptions.forEach((optIdx) => {
          const opt = unit.options[optIdx];
          if (opt?.upgradeTraits) {
            opt.upgradeTraits.forEach((trait) => { traitSet.add(trait); });
          }
        });
      }
    });
    return Array.from(traitSet).sort();
  }

  get armyDetails(): ArmyDetail[] {
    // Example: implement your army detail logic here
    return this.armyContents.map((unit) => {
      return {
        ...unit,
        name: this.armyName,
        nation: this.selectedNation,
        period: this.selectedPeriod,
      };
    });
  }
}

export default ArmyService;

// //  use in calculator.vue
// import { ArmyService } from '../services/ArmyService';

// export default Vue.extend({
//   // ...existing code...
//   data() {
//     const armyService = new ArmyService(allLists);
//     return {
//       armyService,
//       // ...other state...
//     };
//   },
//   computed: {
//     armyContents() { return this.armyService.armyContents; },
//     deploymentNumbers() { return this.armyService.deploymentNumbers; },
//     mostTraits() { return this.armyService.mostTraits; },
//     armyDetails() { return this.armyService.armyDetails; },
//     // ...other computed...
//   },
//   methods: {
//     addUnit(unit) { this.armyService.addUnit(unit); },
//     removeUnit(idx) { this.armyService.removeUnit(idx); },
//     reposUp(idx) { this.armyService.reposUp(idx); },
//     reposDown(idx) { this.armyService.reposDown(idx); },
//     resetArmy() { this.armyService.resetArmy(); },
//     // ...other methods...
//   },
// });
