const NO_SHIELD = 'no shield';
const NO_ARMOUR = 'no armour';
const FULL = 'full armour';
const PARTIAL = 'partial armour';
const SHIELD = 'shield';
const HEAVY_SHIELD = 'heavy shield';
const THROWING = 'throwing spear';
const THRUSTING = 'thrusting spear';
const SWORD = 'sword';
const CAVALRY_SPEAR = 'cavalry spear';
const LONG_SPEAR = 'long spear';
const JAVELIN = 'javelin';
const CAVALRY_JAVELIN = 'cavalry spear & javelin';
const SLING = 'sling';
const BOW = 'bow';

const OPT_BUCKLER = {
  name: 'Add buckler (+1pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: SHIELD,
  upgradeTraits: [],
};
const OPT_DOWN_NO_ARMOUR = {
  name: 'downgrade to no armour',
  cost: -2,
  upgradeWeapon: '',
  upgradeArmour: NO_ARMOUR,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_DOWN_PARTIAL_ARMOUR = {
  name: 'downgrade to partial armour',
  cost: -1,
  upgradeWeapon: '',
  upgradeArmour: PARTIAL,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_UP_PARTIAL_ARMOUR = {
  name: 'upgrade to partial armor (+2 pts/model)',
  cost: 2,
  upgradeWeapon: '',
  upgradeArmour: PARTIAL,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_UP_FULL_ARMOUR = {
  name: 'upgrade to full armor (+1 pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: FULL,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_UPGRADE_CAVALRY_JAVELIN = {
  name: 'upgrade to gain javelin and extra equipment javelin (+3 pts/model)',
  cost: 3,
  upgradeWeapon: 'javelin and extra equipment javelin',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_DOWN_HEAVY_SHIELD = {
  name: 'downgrade heavy shield to shield ( -1 pts)',
  cost: -1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: SHIELD,
  upgradeTraits: [],
};
const OPT_CHARGING = {
  name: 'upgrade to gain: impetus, cavalry spear & extra equipment-(cavalry spear) (+ 3pts/model)',
  cost: 3,
  upgradeWeapon: CAVALRY_SPEAR,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: ['impetus'],
};


const characterOptions = [
  {
    name: 'Upgrade to thrusting spear', cost: 1, upgradeArmour: '', upgradeShield: '', upgradeWeapon: THRUSTING, upgradeTraits: [],
  },
  {
    name: 'Upgrade to throwing spear', cost: 1, upgradeArmour: '', upgradeShield: '', upgradeWeapon: THROWING, upgradeTraits: [],
  },
  {
    name: 'Upgrade to Cavalry Spear(must be mounted)', cost: 1, upgradeArmour: '', upgradeShield: '', upgradeWeapon: CAVALRY_SPEAR, requiresMounted: true, upgradeTraits: [],
  },
  {
    name: 'Upgrade to Javelin', cost: 2, upgradeArmour: '', upgradeShield: '', upgradeWeapon: JAVELIN, upgradeTraits: [],
  },
  {
    name: 'Upgrade to Horse', cost: 4, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', unlessMounted: true, upgradeTraits: ['mounted'],
  },
  {
    name: 'Downgrade to no armor', cost: -3, upgradeArmour: NO_ARMOUR, upgradeShield: '', upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'Downgrade to partial armor', cost: -1, upgradeArmour: PARTIAL, upgradeShield: '', upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'Downgrade to no shield', cost: -1, upgradeArmour: '', upgradeShield: NO_SHIELD, upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'Upgrade to heavy shield', cost: 1, upgradeArmour: '', upgradeShield: HEAVY_SHIELD, upgradeWeapon: '', unlessMounted: true, upgradeTraits: [],
  },
];

export {
  NO_SHIELD,
  NO_ARMOUR,
  FULL,
  PARTIAL,
  SHIELD,
  HEAVY_SHIELD,
  THROWING,
  THRUSTING,
  CAVALRY_SPEAR,
  LONG_SPEAR,
  JAVELIN,
  CAVALRY_JAVELIN,
  SLING,
  BOW,
  SWORD,
  OPT_BUCKLER,
  OPT_DOWN_NO_ARMOUR,
  OPT_DOWN_PARTIAL_ARMOUR,
  OPT_UP_PARTIAL_ARMOUR,
  OPT_UP_FULL_ARMOUR,
  OPT_UPGRADE_CAVALRY_JAVELIN,
  OPT_DOWN_HEAVY_SHIELD,
  OPT_CHARGING,
  characterOptions,
};
