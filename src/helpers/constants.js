
import traits from './traits';

const PERIODS = {
  punic: 'Punic Wars',
  eagles: 'Rise of Eagles',
  samurai: 'Samurai (beta)',
  darkAge: 'Dark Ages (beta)',
  alex: 'Alexandrian (beta)',
};

const MILITES = 'milites';
const CIVIS = 'civis';
const RARE = 'rare';

// armour
const NO_SHIELD = 'no shield';
const NO_ARMOUR = 'no armour';
const PLATE = 'full plate armour';
const ENCLOSED = 'enclosed armour';
const FULL = 'full armour';
const PARTIAL = 'partial armour';
const FULL_IMPROVED = 'improved full armour';
const PARTIAL_IMPROVED = 'improved partial armour';
const NO_BARDING = 'no barding';
const BARDING = 'barding';
const HALF_BARDING = 'half barding';
// shields
const BUCKLER = 'buckler';
const SHIELD = 'shield';
const HEAVY_SHIELD = 'heavy shield';
const SHIELD_HOWDA = 'howda';
// weapon
const STONES = 'stones';
const JAVELIN = 'javelin';
const SLING = 'sling';
const BOW = 'bow';
const XBOW = 'crossbow';
const THROWING = 'throwing spear';
const THRUSTING = 'thrusting spear';
const SWORD = 'sword';
const LANCE = 'lance';
const JAVELIN_THRUSTING = 'javelin and thrusting spear';
const CAVALRY_SPEAR = 'cavalry spear';
const MIXED = 'mixed hand weapons';
const AX = 'double handed weapon';
const SCORPIO = 'Scorpio';
const PIKE = 'pike';
const KONTOS = 'kontos';
const XYSTON = 'xyston';
const YARI = 'yari';
const YUMI = 'yumi';
const TEPPO = 'teppo';
const NAGINATA = 'long weapon';
const NAGAE = 'nagae yari';
const CAVALRY_YARI = 'cavalry yari';
const ADDITIONAL = 'Additional hand weapon';
// other
const HIDE_OPTION = 'hideoption';

const WEAPON_INITIATIVES = {
  [JAVELIN]: '',
  [SLING]: '',
  [BOW]: '',
  [STONES]: '',
  [XBOW]: '',
  [THROWING]: '(2)',
  [THRUSTING]: '(3)',
  [SWORD]: '(1)',
  [LANCE]: '(2)',
  [JAVELIN_THRUSTING]: '(3)',
  [CAVALRY_SPEAR]: '(2)',
  [MIXED]: '(1)',
  [AX]: '(1)',
  [PIKE]: '(4)',
  [XYSTON]: '(3)',
  [YARI]: '(3)',
  [YUMI]: '',
  [TEPPO]: '',
  [NAGINATA]: '(2)',
  [NAGAE]: '(4)',
  [CAVALRY_YARI]: '(3)',
  [SCORPIO]: '',
  [ADDITIONAL]: '(1)',
  [KONTOS]: '(3)',
};
const OPT_NOT_POORLY = {
  name: 'remove pooly equipped',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [],
  removeTraits: [traits.POORLY],
};
const OPT_BUCKLER = {
  name: 'Add buckler (+1pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: 'buckler',
  upgradeTraits: [traits.BUCKLER],
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
const OPT_DOWN_HALF_BARDING = {
  name: 'change to half barding (-1pts/model),',
  cost: -1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeBarding: HALF_BARDING,
  upgradeTraits: [],
};
const OPT_DOWN_FULL_TO_NO_BARDING = {
  name: 'remove horse barding (-2pts/model)',
  cost: -2,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeBarding: NO_BARDING,
  upgradeTraits: [],
};
const OPT_JAVELIN_SHIELD = {
  name: 'upgrade to shield and extra equipmnent javelin (+3)',
  cost: 3,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: SHIELD,
  upgradeBarding: '',
  upgradeTraits: [traits.EXTRA_JAVELIN],
};
const OPT_THROWING_OFFENSIVE = {
  name: 'upgrade to throwing spears and offensive spear (+4)',
  cost: 4,
  upgradeWeapon: THROWING,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeBarding: '',
  upgradeTraits: [traits.OFFENSIVE_SPEAR],
};
const OPT_UP_THROWING = {
  name: 'upgrade to throwing spears',
  cost: 0,
  upgradeWeapon: THROWING,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeBarding: '',
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
  upgradeTraits: [traits.DRILLED],
};
const OPT_SHIELD = {
  name: 'Add shield (+1pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: SHIELD,
  upgradeTraits: [],
};
const OPT_UP_FULL_TO_ENCLOSED_ARMOUR = {
  name: 'Upgrade to enclosed armour',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: ENCLOSED,
  upgradeShield: '',
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
const OPT_DOWN_NO_SHIELD = {
  name: 'Downgrade to no shield',
  cost: -1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: NO_SHIELD,
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
const OPT_DOWN_ENCLOSED_TO_FULL = {
  name: 'Downgrade to full armour',
  cost: -2,
  upgradeWeapon: '',
  upgradeArmour: FULL,
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
const OPT_UP_IMPROVED_FULL_ARMOUR = {
  name: 'Upgrade to improved full armor (+1 pts/model)',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: FULL_IMPROVED,
  upgradeShield: '',
  upgradeTraits: [],
};
const OPT_UPGRADE_CAVALRY_JAVELIN = {
  name: 'Upgrade to gain javelin and extra equipment javelin (+3 pts/model)',
  cost: 3,
  upgradeWeapon: 'javelin and extra equipment javelin',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [traits.EXTRA_JAVELIN],
};
const OPT_UPGRADE_EXTRA_BOW = {
  name: 'add bow and extra equipment(bow ) trait (3pts/model)',
  cost: 3,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [traits.EXTRA_BOW],
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
const OPT_UP_SHIELD_AND_OVERLAP = {
  name: 'Upgrade to heavy shield and shield overlap ( +2 pts)',
  cost: 2,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: HEAVY_SHIELD,
  upgradeTraits: [traits.SHIELD_OVERLAP],
};
const OPT_UP_SHIELD = {
  name: 'Add shield',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: SHIELD,
  upgradeTraits: [],
};
const OPT_UP_SHIELD_EXTRA = {
  name: 'Add shield and extra equipment shield',
  cost: 1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: SHIELD,
  upgradeTraits: [traits.EXTRA_SHIELD],
};
const OPT_DOWN_BUCKLER = {
  name: 'Downgrade to buckler ( -1 pts)',
  cost: -1,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: BUCKLER,
  upgradeTraits: [traits.BUCKLER],
};
const OPT_UP_EXTRA_BOW = {
  name: 'upgrade to extra equipment bow (+3)',
  cost: 3,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [traits.EXTRA_BOW],
};
const OPT_CHARGING = {
  name: 'Upgrade to gain: impetus, cavalry spear & extra equipment-(cavalry spear) (+ 3pts/model)',
  cost: 3,
  upgradeWeapon: '',
  upgradeArmour: '',
  upgradeShield: '',
  upgradeTraits: [traits.IMPETUS, traits.EXTRA_CAVALRY],
};
const OPT_UP_CHARIOT = {
  name: 'Upgrade to Chariot',
  cost: 8,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  unlessMounted: true,
  upgradeTraits: [traits.CHARIOT],
};
const OPT_HUNTER = {
  name: 'Upgrade to hunter',
  cost: 1,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeTraits: [traits.HUNTER],
};

const OPT_COMMAND_ALL = {
  name: traits.COMMAND_ALL,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_ALL,
  upgradeTraits: [traits.COMMAND_ALL],
};
const OPT_COMMAND_NUMIDIAN = {
  name: traits.COMMAND_NUMIDIAN,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_NUMIDIAN,
  upgradeTraits: [traits.COMMAND_NUMIDIAN],
};
const OPT_COMMAND_PYRRHIC = {
  name: traits.COMMAND_PYRRHIC,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_PYRRHIC,
  upgradeTraits: [traits.COMMAND_PYRRHIC],
};
const OPT_COMMAND_SPANISH = {
  name: traits.COMMAND_SPANISH,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_SPANISH,
  upgradeTraits: [traits.COMMAND_SPANISH],
};
const OPT_COMMAND_ITALIAN = {
  name: traits.COMMAND_ITALIAN,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_ITALIAN,
  upgradeTraits: [traits.COMMAND_ITALIAN],
};
const OPT_COMMAND_ROMAN = {
  name: traits.COMMAND_ROMAN,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_ROMAN,
  upgradeTraits: [traits.COMMAND_ROMAN],
};
const OPT_COMMAND_GREEK = {
  name: traits.COMMAND_GREEK,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_GREEK,
  upgradeTraits: [traits.COMMAND_GREEK],
};
const OPT_COMMAND_GALLIC = {
  name: traits.COMMAND_GALLIC,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_GALLIC,
  upgradeTraits: [traits.COMMAND_GALLIC],
};
const OPT_COMMAND_PUNIC = {
  name: traits.COMMAND_PUNIC,
  cost: 15,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: '',
  upgradeCommand: traits.COMMAND_PUNIC,
  upgradeTraits: [traits.COMMAND_PUNIC],
};
const OPT_JAV_TO_BOW = {
  name: 'change javelin to bow (free)',
  cost: 0,
  upgradeArmour: '',
  upgradeShield: '',
  upgradeWeapon: BOW,
  upgradeTraits: [],
};

const elephantOptions = [
  {
    name: 'purchase thrusting spears (2 pts)', cost: 1, upgradeArmour: '', upgradeShield: '', upgradeWeapon: THRUSTING, upgradeTraits: [],
  },
  OPT_JAV_TO_BOW,
  {
    name: 'Upgrade to full armor (2ps)', cost: 1, upgradeArmour: FULL, upgradeShield: '', upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'Downgrade to no armor (-4pts)', cost: -2, upgradeArmour: NO_ARMOUR, upgradeShield: '', upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'add shields (+2pts)', cost: 1, upgradeArmour: '', upgradeShield: SHIELD, upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'add howda -tower- for crew 8pts', cost: 4, upgradeArmour: '', upgradeShield: SHIELD_HOWDA, upgradeWeapon: '', upgradeTraits: [traits.HOWDA],
  },
];
const indianElephantOptions = [
  {
    name: 'purchase thrusting spears (2 pts)', cost: 1, upgradeArmour: '', upgradeShield: '', upgradeWeapon: THRUSTING, upgradeTraits: [],
  },
  OPT_JAV_TO_BOW,
  {
    name: 'Upgrade to partial armor (2ps)', cost: 1, upgradeArmour: PARTIAL, upgradeShield: '', upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'add shields (+2pts)', cost: 1, upgradeArmour: '', upgradeShield: SHIELD, upgradeWeapon: '', upgradeTraits: [],
  },
  {
    name: 'add howda -tower- for crew 8pts', cost: 4, upgradeArmour: '', upgradeShield: SHIELD_HOWDA, upgradeWeapon: '', upgradeTraits: [traits.HOWDA],
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
    name: 'Upgrade to Horse', cost: 4, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', unlessMounted: true, unlessHeavyShield: true, upgradeTraits: [traits.MOUNTED],
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
    name: 'Attach a musician', cost: 15, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', upgradeTraits: [traits.MUSICIAN],
  },
  {
    name: 'Attach a standard-bearer', cost: 15, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', upgradeTraits: [traits.STANDARD],
  },
];
const samuraiCharacterOptions = [
  {
    name: 'Upgrade to Cavalry Spear(must be mounted)', cost: 1, upgradeArmour: '', upgradeShield: '', upgradeWeapon: CAVALRY_SPEAR, requiresMounted: true, upgradeTraits: [],
  },
  {
    name: 'Upgrade to long weapon', cost: 2, upgradeArmour: '', upgradeShield: '', upgradeWeapon: NAGINATA, upgradeTraits: [traits.NAGINATA],
  },
  {
    name: 'Upgrade to Horse', cost: 4, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', unlessMounted: true, unlessHeavyShield: true, upgradeTraits: [traits.MOUNTED],
  },
  OPT_UP_FULL_TO_ENCLOSED_ARMOUR,
  OPT_DOWN_FULL_TO_NO_ARMOUR,
  OPT_DOWN_PARTIAL_ARMOUR,
  {
    name: 'Attach a musician', cost: 15, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', upgradeTraits: [traits.MUSICIAN],
  },
  {
    name: 'Attach a standard-bearer', cost: 15, upgradeArmour: '', upgradeShield: '', upgradeWeapon: '', upgradeTraits: [traits.STANDARD],
  },
];

const SAVE_MODS = {};
SAVE_MODS[NO_ARMOUR] = 0;
SAVE_MODS[NO_SHIELD] = 0;
SAVE_MODS[BUCKLER] = 0;
SAVE_MODS[FULL] = 2;
SAVE_MODS[FULL_IMPROVED] = 2;
SAVE_MODS[PLATE] = 3;
SAVE_MODS[ENCLOSED] = 3;
SAVE_MODS[PARTIAL] = 1;
SAVE_MODS[PARTIAL_IMPROVED] = 1;
SAVE_MODS[SHIELD] = 1;
SAVE_MODS[HEAVY_SHIELD] = 2;
SAVE_MODS[SHIELD_HOWDA] = 2;
SAVE_MODS[BARDING] = 1;
SAVE_MODS[HALF_BARDING] = 0;
SAVE_MODS[NO_BARDING] = 0;

export {
  SAVE_MODS,
  MILITES,
  CIVIS,
  RARE,
  LANCE,
  PLATE,
  ENCLOSED,
  BARDING,
  HALF_BARDING,
  HIDE_OPTION,
  NO_SHIELD,
  NO_ARMOUR,
  FULL,
  PARTIAL,
  FULL_IMPROVED,
  PARTIAL_IMPROVED,
  BUCKLER,
  SHIELD,
  XBOW,
  HEAVY_SHIELD,
  THROWING,
  THRUSTING,
  ADDITIONAL,
  CAVALRY_SPEAR,
  STONES,
  JAVELIN,
  SCORPIO,
  SLING,
  BOW,
  SWORD,
  AX,
  MIXED,
  PIKE,
  XYSTON,
  KONTOS,
  JAVELIN_THRUSTING,
  YARI,
  YUMI,
  TEPPO,
  NAGINATA,
  NAGAE,
  CAVALRY_YARI,
  OPT_BUCKLER,
  OPT_BARDING,
  OPT_SHIELD,
  OPT_DRILLED,
  OPT_UP_NO_TO_HEAVY_SHIELD,
  OPT_UP_SHIELD_AND_OVERLAP,
  OPT_UP_SHIELD,
  OPT_DOWN_NO_ARMOUR,
  OPT_DOWN_PARTIAL_ARMOUR,
  OPT_DOWN_NO_SHIELD,
  OPT_UP_PARTIAL_ARMOUR,
  OPT_UP_FULL_ARMOUR,
  OPT_DOWN_FULL_TO_NO_ARMOUR,
  OPT_UPGRADE_CAVALRY_JAVELIN,
  OPT_DOWN_HEAVY_SHIELD,
  OPT_UP_IMPROVED_FULL_ARMOUR,
  OPT_DOWN_BUCKLER,
  OPT_UPGRADE_EXTRA_BOW,
  OPT_UP_HEAVY_SHIELD,
  OPT_CHARGING,
  OPT_UP_CHARIOT,
  OPT_HALF_BARDING,
  OPT_JAV_TO_BOW,
  OPT_THROWING_OFFENSIVE,
  OPT_UP_THROWING,
  OPT_HUNTER,
  OPT_COMMAND_ALL,
  OPT_COMMAND_NUMIDIAN,
  OPT_COMMAND_PYRRHIC,
  OPT_COMMAND_SPANISH,
  OPT_COMMAND_ITALIAN,
  OPT_COMMAND_ROMAN,
  OPT_COMMAND_GREEK,
  OPT_COMMAND_GALLIC,
  OPT_COMMAND_PUNIC,
  OPT_UP_EXTRA_BOW,
  OPT_JAVELIN_SHIELD,
  OPT_DOWN_HALF_BARDING,
  OPT_DOWN_FULL_TO_NO_BARDING,
  OPT_DOWN_ENCLOSED_TO_FULL,
  OPT_NOT_POORLY,
  OPT_UP_SHIELD_EXTRA,
  characterOptions,
  samuraiCharacterOptions,
  elephantOptions,
  indianElephantOptions,
  WEAPON_INITIATIVES,
  PERIODS,
};
