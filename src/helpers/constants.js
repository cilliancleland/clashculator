
import {
  TRAIT_BUCKLER,
  TRAIT_CHARIOT,
  TRAIT_HOWDA,
  TRAIT_MUSICIAN,
  TRAIT_STANDARD,
  TRAIT_MOUNTED,
  TRAIT_IMPETUS,
  TRAIT_DRILLED,
  TRAIT_EXTRA_JAVELIN,
  TRAIT_EXTRA_CAVALRY,
  TRAIT_HUNTER,
} from './traits';

const MILITES = 'milites';
const CIVIS = 'civis';
const RARE = 'rare';

const NO_SHIELD = 'no shield';
const NO_ARMOUR = 'no armour';
const PLATE = 'full plate armour';
const FULL = 'full armour';
const PARTIAL = 'partial armour';
const BARDING = 'barding';
const HALF_BARDING = 'half barding';
const BUCKLER = 'buckler';
const SHIELD = 'shield';
const HEAVY_SHIELD = 'heavy shield';
const THROWING = 'throwing spear';
const THRUSTING = 'thrusting spear';
const SWORD = 'sword';
const LANCE = 'lance';
const JAVELIN_THRUSTING = 'javelin and thrusting spear';
const CAVALRY_SPEAR = 'cavalry spear';
const JAVELIN = 'javelin';
const SLING = 'sling';
const MIXED = 'mixed hand weapons';
const BOW = 'bow';
const XBOW = 'crossbow';
const AX = 'double handed axe';
const PIKE = 'pike';
const XYSTON = 'xtston';
const HIDE_OPTION = 'hideoption';

const OPT_BUCKLER = {
  name: 'Add buckler (+1pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: 'buckler',
  upgradeTraits: [TRAIT_BUCKLER],
};
const OPT_BARDING = {
  name: 'Add barding (+1pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeBarding: BARDING,
  upgradeTraits: [],
};
const OPT_HALF_BARDING = {
  name: 'Add half barding (+1pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeBarding: HALF_BARDING,
  upgradeTraits: [],
};
const OPT_DRILLED = {
  name: 'Add drilled (+1pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [TRAIT_DRILLED],
};
const OPT_SHIELD = {
  name: 'Add shield (+1pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: SHIELD,
  upgradeTraits: [],
};
const OPT_DOWN_NO_ARMOUR = {
  name: 'Downgrade to no armour',
  cost: -2,
  upgradeWeapon: '',
  upgradeArmour: NO_ARMOUR,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_DOWN_FULL_TO_NO_ARMOUR = {
  name: 'Downgrade to no armour',
  cost: -3,
  upgradeWeapon: '',
  upgradeArmour: NO_ARMOUR,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_UP_NO_TO_HEAVY_SHIELD = {
  name: 'Upgrade to heavy shield',
  cost: 2,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: HEAVY_SHIELD,
  upgradeTraits: [],
};
const OPT_DOWN_PARTIAL_ARMOUR = {
  name: 'Downgrade to partial armour',
  cost: -1,
  upgradeWeapon: '',
  upgradeArmour: PARTIAL,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_UP_PARTIAL_ARMOUR = {
  name: 'Upgrade to partial armor (+2 pts/model)',
  cost: 2,
  upgradeWeapon: '',
  upgradeArmour: PARTIAL,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_UP_FULL_ARMOUR = {
  name: 'Upgrade to full armor (+1 pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: FULL,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_UPGRADE_CAVALRY_JAVELIN = {
  name: 'Upgrade to gain javelin and extra equipment javelin (+3 pts/model)',
  cost: 3,
  upgradeWeapon: 'javelin and extra equipment javelin',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [TRAIT_EXTRA_JAVELIN],
};
const OPT_DOWN_HEAVY_SHIELD = {
  name: 'downgrade heavy shield to shield ( -1 pts)',
  cost: -1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: SHIELD,
  upgradeTraits: [],
};
const OPT_UP_HEAVY_SHIELD = {
  name: 'Upgrade to heavy shield ( +1 pts)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: HEAVY_SHIELD,
  upgradeTraits: [],
};
const OPT_DOWN_BUCKLER = {
  name: 'Downgrade to buckler ( -1 pts)',
  cost: -1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: BUCKLER,
  upgradeTraits: [TRAIT_BUCKLER],
};
const OPT_CHARGING = {
  name: 'Upgrade to gain: impetus, cavalry spear & extra equipment-(cavalry spear) (+ 3pts/model)',
  cost: 3,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [TRAIT_IMPETUS, TRAIT_EXTRA_CAVALRY],
};
const OPT_UP_CHARIOT = {
  name: 'Upgrade to Chariot',
  cost: 8,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  unlessMounted: true,
  upgradeTraits: [TRAIT_CHARIOT],
};
const OPT_HUNTER = {
  name: 'Upgrade to hunter',
  cost: 1,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  unlessMounted: true,
  upgradeTraits: [TRAIT_HUNTER],
};
const elephantOptions = [
  {
    name: 'purchase thrusting spears (2 pts)', cost: 1, upgradeArmour: '', upgradeShield: '', upgradeWeapon: THRUSTING, upgradeTraits: [],
  },
  {
    name: 'change javelin to bow ( free)', cost: 1, upgradeArmour: '', upgradeShield: '', upgradeWeapon: BOW, upgradeTraits: [],
  },
  {
    name: 'Upgrade to full armor (2ps)', cost: 1, upgradeArmour: FULL, upgradeShield: '', upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'Downgrade to no armor (-4pts)', cost: -2, upgradeArmour: NO_ARMOUR, upgradeShield: '', upgradeWeapon: THRUSTING, upgradeTraits: [],
  },
  {
    name: 'add shields (+2pts)', cost: 1, upgradeArmour: '', upgradeShield: SHIELD, upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'add howda -tower- for crew 8pts', cost: 4, upgradeArmour: '', upgradeShield: '', upgradeWeapon: THRUSTING, upgradeTraits: [TRAIT_HOWDA],
  },
];


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
    name: 'Upgrade to Horse', cost: 4, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', unlessMounted: true, unlessHeavyShield: true, upgradeTraits: [TRAIT_MOUNTED],
  },
  OPT_DOWN_FULL_TO_NO_ARMOUR,
  OPT_DOWN_PARTIAL_ARMOUR,
  {
    name: 'Downgrade to no shield', cost: -1, upgradeArmour: '', upgradeShield: NO_SHIELD, upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'Upgrade to heavy shield', cost: 1, upgradeArmour: '', upgradeShield: HEAVY_SHIELD, upgradeWeapon: '', unlessMounted: true, upgradeTraits: [],
  },
  {
    name: 'Attach a musician', cost: 15, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', upgradeTraits: [TRAIT_MUSICIAN],
  },
  {
    name: 'Attach a standard-bearer', cost: 15, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', upgradeTraits: [TRAIT_STANDARD],
  },
];

export {
  MILITES,
  CIVIS,
  RARE,
  LANCE,
  PLATE,
  BARDING,
  HALF_BARDING,
  HIDE_OPTION,
  NO_SHIELD,
  NO_ARMOUR,
  FULL,
  PARTIAL,
  BUCKLER,
  SHIELD,
  XBOW,
  HEAVY_SHIELD,
  THROWING,
  THRUSTING,
  CAVALRY_SPEAR,
  JAVELIN,
  SLING,
  BOW,
  SWORD,
  AX,
  MIXED,
  PIKE,
  XYSTON,
  JAVELIN_THRUSTING,
  OPT_BUCKLER,
  OPT_BARDING,
  OPT_SHIELD,
  OPT_DRILLED,
  OPT_UP_NO_TO_HEAVY_SHIELD,
  OPT_DOWN_NO_ARMOUR,
  OPT_DOWN_PARTIAL_ARMOUR,
  OPT_UP_PARTIAL_ARMOUR,
  OPT_UP_FULL_ARMOUR,
  OPT_DOWN_FULL_TO_NO_ARMOUR,
  OPT_UPGRADE_CAVALRY_JAVELIN,
  OPT_DOWN_HEAVY_SHIELD,
  OPT_DOWN_BUCKLER,
  OPT_UP_HEAVY_SHIELD,
  OPT_CHARGING,
  OPT_UP_CHARIOT,
  OPT_HALF_BARDING,
  OPT_HUNTER,
  characterOptions,
  elephantOptions,
};
