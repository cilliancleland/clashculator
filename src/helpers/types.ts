export interface LookupString {
  [key: string]: string
}

export interface LookupNumber {
  [key: string]: number
}

export interface Option {
  name: string,
  cost: number,
  upgradeWeapon: string,
  upgradeArmour: string,
  upgradeShield: string,
  upgradeBarding?: string,
  upgradeTraits?: Array<string>,
  removeTraits?: Array<string>,
  unlessMounted?: boolean,
  upgradeCommand?: string,
  requiresMounted?: boolean,
  unlessHeavyShield?: boolean,
}

export interface LookupOption {
  [key: string]: Option
}

export interface Troops {
  displayName: string,
  availability: string,
  combat: number,
  ranged: number,
  grit: number,
  defaultWeapon: string,
  defaultBody: string,
  defaultShield: string,
  traits: Array<string>,
  cost: number,
  options: Array<Option>,
  upgradedShield?: string,
  upgradedBarding?: string,
  defaultBarding?: string,
  upgradedArmour?: string,
  noDeployToken?: boolean,
  fixedSave?: string,
  countsDouble?: boolean,
  improvedArmour?: boolean,
}

export interface Character extends Troops {
  isCharacter: boolean,
  dontCountForBreak: boolean,
  fixedFigures: number,
  commandRange: number,
  commandPoints: number,
}

export type Unit = Troops | Character;

export interface LookupCharacter {
  [key: string]: Character
}

export interface LookupUnit {
  [key: string]: Unit
}

export interface LookupArmy {
  [key: string]: LookupUnit
}

export interface LookupLists {
  [key: string]: LookupArmy
}
