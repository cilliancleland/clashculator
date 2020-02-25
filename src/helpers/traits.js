
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

const TRAIT_DESCRIPTIONS = {
  [TRAIT_IRON_WILL]: ['affects fatigue effects', 'do not remove if fatigue is twice model count'],
  [TRAIT_SHIELD_OVERLAP]: ['requires heavy shield and close order, affects enemy to hit', 'melee or shooting attacks are -1 to hit'],
  [TRAIT_SKIRMISH_SPECIALIST]: ['requires loose order, affects save, grit, reaction', '+1 to save from missles, free reaction at 4", worse morale in melee unless fighting skirmishers'],
  [TRAIT_WALL_OF_SPEARS]: ['requires any spear or pike and close order, higher weapon initiave, affects hold', 'Free defensive attack with up to 50% before enemy attack'],
  [TRAIT_OFFENSIVE_SPEAR]: ['requires any type of spear or pike and close order, higher weapon initiative, affects attack', 'only surviving enemies get to counter-attack'],
  [TRAIT_DRILLED]: ['requires close order, affects movement', 'May move 4" straight forward in close order, no fatigue when forming close order'],
  [TRAIT_GUERRILLA]: ['requires loose order, affects enemy morale', '+1 test to enemy if melee from high area terrain, terrain is one easier for move, shoot, melee'],
  [TRAIT_FUROR]: ['requires loose order, affects All-Out Attack', 'addition d6 for enemy morale test triggered by all out attack'],
  [TRAIT_ALLIES]: ['affects actions', 'one less action if any fails in a force break test'],
  [TRAIT_MOUNTED]: ['affects moving, shooting, melee...', '...'],
  [TRAIT_IMPETUS]: ['requires cavalry spear, lance or kontos/xyston and loose order, affects attack, higher weapon initiative', '-1/-2 to save'],
  [TRAIT_IRA]: ['delays wound effects', 'models do not receive wounds until the end phase'],
  [TRAIT_FIDELIS]: ['affects morale tests', 'may re-roll failed dice during morale tests'],
  [TRAIT_EXTRA_JAVELIN]: ['may use ready to swap weapon to javelin', ''],
  [TRAIT_EXTRA_CAVALRY]: ['may use ready to swap weapon to cavalry spear', ''],
  [TRAIT_IMPULSUM]: ['requires throwing spear, affects throw', '+1 d6 if enemy tests morale'],
  [TRAIT_AIM]: ['bow & loose order, affects shooting', 'May use ready to re-roll misses'],
  [TRAIT_OMENS]: ['affects pre-game', 'may re-roll the omens test'],
  [TRAIT_MARAUDERS]: ['affects command range', 'always in command range of closest friendly commander'],
  [TRAIT_ELEPHANT]: ['affects everything', 'see elephant special rules'],
  [TRAIT_SLING]: ['requires sling and loose order, affects sling shooting', 'Long range becomes 16"'],
  [TRAIT_CHARIOT]: ['affects everything', 'see chariot special rules'],
  [TRAIT_MUSICIAN]: ['affects command range', 'increases command range for activations only'],
  [TRAIT_STANDARD]: ['affects rally', 'may re-roll 1s'],
  [TRAIT_BUCKLER]: ['affects melee', 'adds +1 to melee save only, ignored by shooting and fatigue'],
  [TRAIT_DETERMINED]: ['affects grit tests', 'ignore fatigue for grit tests'],
  [TRAIT_FERAL]: ['affects animals', 'see feral special rules'],
  [TRAIT_MACEDONIAN]: ['requires pike and close order, affects save', 'can claim shield for ranged save'],
  [TRAIT_ENDURANCE]: ['requires loose order, affects movement and fatigue', '3rd move is 6" and does not generate fatigue'],
  [TRAIT_CHARGE]: ['requires lcose order and long weapon, affecst attack', 'charge further, -1/-2 to enemy save, extra d6 for enemy morale test, only surviving enemies counterattack '],
  [TRAIT_HOWDA]: ['affects save', '+2 to save'],
};

export {
  TRAIT_DESCRIPTIONS,
  TRAIT_IRON_WILL,
  TRAIT_SHIELD_OVERLAP,
  TRAIT_SKIRMISH_SPECIALIST,
  TRAIT_WALL_OF_SPEARS,
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
};
