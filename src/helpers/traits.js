const TRAIT_IRON_WILL = 'iron Will';
const TRAIT_SHIELD_OVERLAP = 'shield overlap';
const TRAIT_SKIRMISH_SPECIALIST = 'skirmish specialist';
const TRAIT_WALL_OF_SPEARS = 'wall of spears';
const TRAIT_OFFENSIVE_SPEAR = 'offensive spear';
const TRAIT_DRILLED = 'drilled';
const TRAIT_GUERRILLA = 'guerrilla';
const TRAIT_FUROR = 'furor';
const TRAIT_ALLIES = 'allies';
const TRAIT_MOUNTED = 'mounted';
const TRAIT_IMPETUS = 'impetus';
const TRAIT_IRA = 'ira';
const TRAIT_FIDELIS = 'fidelis';
const TRAIT_FERAL = 'feral';
const TRAIT_EXTRA_CAVALRY = 'extra equipment-(cavalry spear)';
const TRAIT_EXTRA_JAVELIN = 'extra equipment-(javelin)';
const TRAIT_DETERMINED = 'determined';
const TRAIT_IMPULSUM = 'impulsum';
const TRAIT_AIM = 'aimed shot';
const TRAIT_OMENS = 'omens re-roll';
const TRAIT_MACEDONIAN = 'macedonian drill';
const TRAIT_ENDURANCE = 'endurance';
const TRAIT_MARAUDERS = 'marauders';
const TRAIT_ELEPHANT = 'elephant';
const TRAIT_CHARGE = 'massed charge';
const TRAIT_SLING = 'sling specialist';
const TRAIT_BUCKLER = 'buckler';
const TRAIT_CHARIOT = 'chariot';
const TRAIT_HOWDA = 'howda';
const TRAIT_MUSICIAN = 'musician';
const TRAIT_STANDARD = 'standard-bearer';
const TRAIT_OVERHEAD = 'overhead shooting';
const TRAIT_STALWART = 'stalwart';
const TRAIT_BREAKER = 'shield breaker';
const TRAIT_PLATE = 'plate armour';
const TRAIT_DOUBLE = 'double hander';
const TRAIT_WARHORSE = 'war horse';
const TRAIT_SHIELDBREAKER = 'shield breaker';
const TRAIT_HUNTER = 'hunter';
const TRAIT_THRUST = 'thrust';
const TRAIT_ELUSIVE = 'elusive';
const TRAIT_COMBINED_ARMS = 'combined arms';
const TRAIT_CUTTHROAT = 'cut-throat';
const TRAIT_RAIN = 'rain of blows';
const TRAIT_COMMAND_ALL = 'Battle Line Commander';
const TRAIT_COMMAND_GALLIC = 'Headhunter';
const TRAIT_COMMAND_ROMAN = 'Tactical Coordination';
const TRAIT_COMMAND_ITALIAN = 'Zealot';
const TRAIT_COMMAND_SPANISH = 'Pathfinder';
const TRAIT_COMMAND_PYRRHIC = 'Resolute Commander';
const TRAIT_COMMAND_NUMIDIAN = 'At an Easy Trot';
const TRAIT_COMMAND_GREEK = 'One of Us';
const TRAIT_COMMAND_PUNIC = 'Multicultural';
const TRAIT_EXTRA_BOW = 'extra equipment bow';
const TRAIT_EXTRA_TWO = 'extra equipment two handed weapon';
const TRAIT_SPARABARA = 'sparabara';

const TRAIT_DESCRIPTIONS = {
  [TRAIT_SPARABARA]: ['affects movement, being attacked', `When this unit is in close formation the unit is treated as if they have heavy shields. The
  front rank is depicted as sparabara armed spearmen. While in close formation any figure not in the
  front rank may fire bows and they gain the unit gains the shield overlap rule. When in loose formation
  there are not a sufficient number of shields to afford protection to the unit and they are treated as
  having armor 7. All figures may fire bows when in lose formation. Their formation determines their
  armor for the purpose of fatigue.`],
  [TRAIT_EXTRA_BOW]: ['affects shooting', 'can switch to bow for an action'],
  [TRAIT_EXTRA_TWO]: ['affects melee', 'can switch to two handed weapon for an action'],
  [TRAIT_IRON_WILL]: ['affects fatigue effects', 'do not remove if fatigue is twice model count', 'p.73'],
  [TRAIT_SHIELD_OVERLAP]: ['requires heavy shield and close order, affects enemy to hit', 'melee or shooting attacks are -1 to hit', 'p.70'],
  [TRAIT_SKIRMISH_SPECIALIST]: ['requires loose order, affects save, grit, reaction', '+1 to save from missles, free reaction at 4", worse morale in melee unless fighting skirmishers', 'p.70'],
  [TRAIT_WALL_OF_SPEARS]: ['requires any spear or pike and close order, higher weapon initiave, affects hold', 'Free defensive attack with up to 50% before enemy attack', 'p.71'],
  [TRAIT_OFFENSIVE_SPEAR]: ['requires any type of spear or pike and close order, higher weapon initiative, affects attack', 'only surviving enemies get to counter-attack', 'p.70'],
  [TRAIT_DRILLED]: ['requires close order, affects movement', 'May move 4" straight forward in close order, no fatigue when forming close order', 'p.66'],
  [TRAIT_GUERRILLA]: ['requires loose order, affects enemy morale', '+1 test to enemy if melee from high area terrain, terrain is one easier for move, shoot, melee', 'p.67'],
  [TRAIT_FUROR]: ['requires loose order, affects All-Out Attack', 'addition d6 for enemy morale test triggered by all out attack', 'p.73'],
  [TRAIT_ALLIES]: ['affects actions', 'one less action if any fails in a force break test', 'p.72'],
  [TRAIT_MOUNTED]: ['affects moving, shooting, melee...', '...', 'p.69'],
  [TRAIT_IMPETUS]: ['requires cavalry spear, lance or kontos/xyston and loose order, affects attack, higher weapon initiative', '-1/-2 to save', 'p.67'],
  [TRAIT_IRA]: ['delays wound effects', 'models do not receive wounds until the end phase', 'p.73'],
  [TRAIT_FIDELIS]: ['affects morale tests', 'may re-roll failed dice during morale tests', 'p.73'],
  [TRAIT_EXTRA_JAVELIN]: ['may use ready to swap weapon to javelin', '', 'p.66'],
  [TRAIT_EXTRA_CAVALRY]: ['may use ready to swap weapon to cavalry spear', '', 'p.66'],
  [TRAIT_IMPULSUM]: ['requires throwing spear, affects throw', '+1 d6 if enemy tests morale', 'p.68'],
  [TRAIT_AIM]: ['bow & loose order, affects shooting', 'May use ready to re-roll misses', 'p.66'],
  [TRAIT_OMENS]: ['affects pre-game', 'may re-roll the omens test', 'p.118'],
  [TRAIT_MARAUDERS]: ['affects command range', 'always in command range of closest friendly commander', 'p.73'],
  [TRAIT_ELEPHANT]: ['affects everything', 'see elephant special rules', 'p.76'],
  [TRAIT_SLING]: ['requires sling and loose order, affects sling shooting', 'Long range becomes 16"', 'p.71'],
  [TRAIT_CHARIOT]: ['affects everything', 'see chariot special rules', 'p.82'],
  [TRAIT_MUSICIAN]: ['affects command range', 'increases command range for activations only', 'p.118'],
  [TRAIT_STANDARD]: ['affects rally', 'may re-roll 1s', 'p.118'],
  [TRAIT_BUCKLER]: ['affects melee', 'adds +1 to melee save only, ignored by shooting and fatigue', 'p.64'],
  [TRAIT_DETERMINED]: ['affects grit tests', 'ignore fatigue for grit tests', 'p.72'],
  [TRAIT_FERAL]: ['affects animals', 'see feral special rules', 'p.72'],
  [TRAIT_MACEDONIAN]: ['requires pike and close order, affects save', 'can claim shield for ranged save', 'p.68'],
  [TRAIT_ENDURANCE]: ['requires loose order, affects movement and fatigue', '3rd move is 6" and does not generate fatigue', 'p.72'],
  [TRAIT_CHARGE]: ['requires close order and long weapon, affects attack', 'charge further, -1/-2 to enemy save, extra d6 for enemy morale test, only surviving enemies counterattack ', 'p.68'],
  [TRAIT_HOWDA]: ['affects save', '+2 to save', 'p.80'],
  [TRAIT_OVERHEAD]: ['close order, affects shoot action', 'Can shoot over friends in 4", counts as long range', 'playtest'],
  [TRAIT_STALWART]: ['affects morale tests', 'may re-roll failed dice during morale tests', 'playtest'],
  [TRAIT_BREAKER]: ['requires loose order and double handed weapon, affects melee', 'Additional d6 to enemy morale test', 'playtest'],
  [TRAIT_PLATE]: ['affects save', 're-roll ones', 'playtest'],
  [TRAIT_DOUBLE]: ['affects melee', '-2 to enemy save, must use shields like special equipment', 'playtest'],
  [TRAIT_WARHORSE]: ['affects attack action', 're-roll 1s to hit vs infantry', 'playtest'],
  [TRAIT_SHIELDBREAKER]: ['requires double hander and loose order, affects enemy morale', 'Additional d6 to enemy morale test', 'playtest'],
  [TRAIT_HUNTER]: ['affects shoot action', 're-roll 1s to hit when shoot is first action', 'playtest'],
  [TRAIT_THRUST]: ['requires spear or pike and loose order, affects atack', 'enemy may not couter-attack, but gain +1 to morale, attacker always retreats, 3"', 'playtest'],
  [TRAIT_ELUSIVE]: ['requires loose order, affects defend', 'When selecting defend as combat response the unit may re-roll any ones rolled', 'playtest'],
  [TRAIT_COMBINED_ARMS]: ['requires mixed hand weapons and loose order, affects Attack', 'When executing an attack action, troops with this characteristic can re-roll any ones and twos they got on their to hit roll', 'playtest'],
  [TRAIT_CUTTHROAT]: ['affects morale', 'enemy roll an extra d6 for morale tests', 'playtest'],
  [TRAIT_RAIN]: ['requires loose order and additional hand weapon, affects all-out attack', 're-roll 1s to hit', 'playtest'],
  [TRAIT_COMMAND_ALL]: ['Command Ability', 'Command Ability', 'Fields of Blood'],
  [TRAIT_COMMAND_GALLIC]: ['Command Ability', 'Generic Command Ability', 'Fields of Blood'],
  [TRAIT_COMMAND_ROMAN]: ['Command Ability', 'Roman Command Ability', 'Fields of Blood'],
  [TRAIT_COMMAND_ITALIAN]: ['Command Ability', 'Italian Command Ability', 'Fields of Blood'],
  [TRAIT_COMMAND_SPANISH]: ['Command Ability', 'Iberian Command Ability', 'Fields of Blood'],
  [TRAIT_COMMAND_PYRRHIC]: ['Command Ability', 'Pyrrhic Command Ability', 'Fields of Blood'],
  [TRAIT_COMMAND_NUMIDIAN]: ['Command Ability', 'Numidian Command Ability', 'Fields of Blood'],
  [TRAIT_COMMAND_GREEK]: ['Command Ability', 'Greek Command Ability', 'Fields of Blood'],
  [TRAIT_COMMAND_PUNIC]: ['Command Ability', 'Carthaginian Command Ability', 'Fields of Blood'],
};

export {
  TRAIT_COMMAND_ALL,
  TRAIT_COMMAND_GALLIC,
  TRAIT_COMMAND_ROMAN,
  TRAIT_COMMAND_ITALIAN,
  TRAIT_COMMAND_SPANISH,
  TRAIT_COMMAND_PYRRHIC,
  TRAIT_COMMAND_NUMIDIAN,
  TRAIT_COMMAND_GREEK,
  TRAIT_COMMAND_PUNIC,
  TRAIT_DESCRIPTIONS,
  TRAIT_IRON_WILL,
  TRAIT_SHIELD_OVERLAP,
  TRAIT_SKIRMISH_SPECIALIST,
  TRAIT_WALL_OF_SPEARS,
  TRAIT_EXTRA_BOW,
  TRAIT_EXTRA_TWO,
  TRAIT_OFFENSIVE_SPEAR,
  TRAIT_DRILLED,
  TRAIT_GUERRILLA,
  TRAIT_FUROR,
  TRAIT_ALLIES,
  TRAIT_MOUNTED,
  TRAIT_IMPETUS,
  TRAIT_IRA,
  TRAIT_FIDELIS,
  TRAIT_FERAL,
  TRAIT_EXTRA_CAVALRY,
  TRAIT_EXTRA_JAVELIN,
  TRAIT_DETERMINED,
  TRAIT_IMPULSUM,
  TRAIT_AIM,
  TRAIT_OMENS,
  TRAIT_MACEDONIAN,
  TRAIT_ENDURANCE,
  TRAIT_MARAUDERS,
  TRAIT_ELEPHANT,
  TRAIT_CHARGE,
  TRAIT_SLING,
  TRAIT_BUCKLER,
  TRAIT_CHARIOT,
  TRAIT_HOWDA,
  TRAIT_MUSICIAN,
  TRAIT_STANDARD,
  TRAIT_OVERHEAD,
  TRAIT_BREAKER,
  TRAIT_PLATE,
  TRAIT_DOUBLE,
  TRAIT_WARHORSE,
  TRAIT_STALWART,
  TRAIT_SHIELDBREAKER,
  TRAIT_HUNTER,
  TRAIT_THRUST,
  TRAIT_ELUSIVE,
  TRAIT_COMBINED_ARMS,
  TRAIT_CUTTHROAT,
  TRAIT_RAIN,
  TRAIT_SPARABARA,
};
