const traits = {};

traits.IRON_WILL = 'iron Will';
traits.SHIELD_OVERLAP = 'shield overlap';
traits.SKIRMISH_SPECIALIST = 'skirmish specialist';
traits.WALL_OF_SPEARS = 'wall of spears';
traits.OFFENSIVE_SPEAR = 'offensive spear';
traits.DRILLED = 'drilled';
traits.GUERRILLA = 'guerrilla';
traits.FUROR = 'furor';
traits.ALLIES = 'allies';
traits.MOUNTED = 'mounted';
traits.IMPETUS = 'impetus';
traits.IRA = 'ira';
traits.FIDELIS = 'fidelis';
traits.FERAL = 'feral';
traits.EXTRA_CAVALRY = 'extra equipment-(cavalry spear)';
traits.EXTRA_JAVELIN = 'extra equipment-(javelin)';
traits.EXTRA_WAR_BOW = 'extra equipment-(war bow)';
traits.DETERMINED = 'determined';
traits.IMPULSUM = 'impulsum';
traits.AIM = 'aimed shot';
traits.OMENS = 'Omens';
traits.FAMILY = 'family support';
traits.MACEDONIAN = 'macedonian drill';
traits.ENDURANCE = 'endurance';
traits.MARAUDERS = 'marauders';
traits.ELEPHANT = 'elephant';
traits.CHARGE = 'massed charge';
traits.SLING = 'sling specialist';
traits.BUCKLER = 'buckler';
traits.CHARIOT = 'chariot';
traits.HEAVY_CHARIOT = 'heavy chariot';
traits.HOWDA = 'howda';
traits.MUSICIAN = 'musician';
traits.STANDARD = 'standard-bearer';
traits.TSUKAIBAN = 'tsukaiban';
traits.OVERHEAD = 'overhead shot';
traits.STALWART = 'stalwart';
traits.BREAKER = 'shield breaker';
traits.PLATE = 'plate armour';
traits.DOUBLE = 'double hander';
traits.WARHORSE = 'war horse';
traits.SHIELDBREAKER = 'shield breaker';
traits.HUNTER = 'hunter';
traits.THRUST = 'thrust';
traits.ELUSIVE = 'elusive';
traits.COMBINED_ARMS = 'combined arms';
traits.CUTTHROAT = 'cut-throat';
traits.RAIN = 'rain of blows';
traits.COMMAND_ALL = 'Battle Line Commander';
traits.COMMAND_GALLIC = 'Headhunter';
traits.COMMAND_ROMAN = 'Tactical Coordination';
traits.COMMAND_ITALIAN = 'Zealot';
traits.COMMAND_SPANISH = 'Pathfinder';
traits.COMMAND_PYRRHIC = 'Resolute Commander';
traits.COMMAND_NUMIDIAN = 'At an Easy Trot';
traits.COMMAND_GREEK = 'One of Us';
traits.COMMAND_PUNIC = 'Multicultural';
traits.EXTRA_BOW = 'extra equipment bow';
traits.EXTRA_TWO = 'extra equipment two handed weapon';
traits.SPARABARA = 'sparabara';
traits.VOLLEY = 'volley';
traits.KAKOMU = 'kakomu';
traits.HARINEZUMI = 'harinezumi';
traits.FUREKAESHI = 'furekaeshi';
traits.HONOURABLE = 'honourable';
traits.KURIDASHI = 'kuridashi';
traits.NAGINATA = 'naginata';
traits.GAUCHE = 'main gauche';
traits.GRIZZLED = 'grizzled';
traits.INDEPENDENT = 'independant';
traits.POORLY = 'poorly equiped';
traits.BUSHMASTER = 'bushmaster';
traits.VICIOUS = 'vicious';
traits.LINE_BREAKER = 'line breaker';
traits.ROBUR = 'robur';
traits.GUSHING = 'gushing wounds';
traits.OVERWHELM = 'overwhelm';
traits.PARRY = 'parry reposte';
traits.GUARDED = 'guarded attack';
traits.EXTRA_SHIELD = 'extra equipment - shield';
traits.UTEYA = 'uteya';
traits.PARRY_OFF = 'off hand parry';
traits.PARRY_RIPOSTE = 'parry riposte';
traits.FORM_UP = 'form up';
traits.DUTY = 'duty bound';
traits.PAVAIS = 'pavais';
traits.SAKE = 'Sake ration';
traits.GEISHA = 'Geisha';
traits.ASSASSIN = 'Assassin';
traits.MASTER_ASSASSIN = 'Master Assassin';
traits.SHRINE = 'Protable Buddish Shrine';
traits.ASHIGARU = 'ashigaru drill';
traits.RUTHLESS = 'ruthless';
traits.FICKLE = 'fickle';
traits.MOUNTED_GUNNERY = 'mounted gunnery';
traits.ROTATIONAL_FIRE = 'rotational fire';
traits.BROTHERHOOD = 'brotherhood';
traits.EXTENDED_NAGAE = 'extended nagae-yari';
traits.HEAVY_STRIKE = 'heavy strike';
traits.NORIKUZISHI = 'norikuzishi';
traits.TATE = 'tate specialist';
traits.SISTERHOOD = 'sisterhood';
traits.SISTERHOOD = 'sisterhood';
traits.SHARPSHOOTER = 'sharpshooter';
traits.SHIELDS_UP = 'Shields Up!';
traits.MOMENTUM = 'momentum';
traits.EXTRA_POLEARM = 'extra equipment polearm';
traits.MANDARIN = 'mandarin duck';
traits.YOJI = 'yoji-gakure';
traits.DEADLY_STRIKE = 'deadly strike';
traits.OLD_WAYS = 'the old ways';
traits.EXTRA = 'extra equipment';
traits.ARCHANIST_3 = 'archanist(3)';
traits.ARCHANIST_2 = 'archanist(2)';
traits.ARCHANIST_1 = 'archanist(1)';
traits.DVERGER = 'Dverger';
traits.SHIELDWALL = 'Shieldwall';
traits.SCHILTRON = 'Schiltron';
traits.STRIKE = 'Strike';
traits.SHIELDS_UP = 'Shields up';
traits.UNDEAD = 'UNDEAD';
traits.SELF_MOTIVATED = 'Self motivated';
traits.IMPLACABLE = 'Implacable';
traits.LARGE_CREATURE = 'Large creature';
traits.BLITZ = 'Blitz';
traits.SIMPLEMINDED = 'Simpleminded';
traits.PRIDE = 'Pride';
traits.BLADE_WAVE = 'Blade wave';
traits.STUBBORN = 'Stubborn';
traits.WAR_MOUNT = 'War mount';
traits.PIKE_SPECIALIST = 'Pike Specialist';
traits.NATURAL_ARMOUR_1 = 'Natural armour(1)';
traits.NATURAL_ARMOUR_2 = 'Natural armour(2)';
traits.NATURAL_ARMOUR_3 = 'Natural armour(3)';
traits.NATURAL_ARMOUR_4 = 'Natural armour(4)';
traits.DVERGR = 'Dvergr';
traits.HACK = 'Hack';

traits.descriptions = {
  [traits.SPARABARA]: ['affects movement, being attacked', `When this unit is in close formation the unit is treated as if they have heavy shields. The
  front rank is depicted as sparabara armed spearmen. While in close formation any figure not in the
  front rank may fire bows and they gain the unit gains the shield overlap rule. When in loose formation
  there are not a sufficient number of shields to afford protection to the unit and they are treated as
  having armor 7. All figures may fire bows when in lose formation. Their formation determines their
  armor for the purpose of fatigue.`],
  [traits.EXTRA_BOW]: ['affects shooting', 'can switch to bow for an action'],
  [traits.EXTRA_TWO]: ['affects melee', 'can switch to two handed weapon for an action'],
  [traits.IRON_WILL]: ['affects fatigue effects', 'do not remove if fatigue is twice model count', 'p.73'],
  [traits.SHIELD_OVERLAP]: ['requires heavy shield and close order, affects enemy to hit', 'melee or shooting attacks are -1 to hit', 'p.70'],
  [traits.SKIRMISH_SPECIALIST]: ['requires loose order, affects save, grit, reaction', '+1 to save from missles, free reaction at 4", worse morale in melee unless fighting skirmishers', 'p.70'],
  [traits.WALL_OF_SPEARS]: ['requires any spear or pike and close order, higher weapon initiave, affects hold', 'Free defensive attack with up to 50% before enemy attack', 'p.71'],
  [traits.OFFENSIVE_SPEAR]: ['requires any type of spear or pike and close order, higher weapon initiative, affects attack', 'only surviving enemies get to counter-attack', 'p.70'],
  [traits.DRILLED]: ['requires close order, affects movement', 'May move 4" straight forward in close order, no fatigue when forming close order', 'p.66'],
  [traits.GUERRILLA]: ['requires loose order, affects enemy morale', '+1 test to enemy if melee from high area terrain, terrain is one easier for throw, shoot, melee', 'p.67'],
  [traits.FUROR]: ['requires loose order, affects All-Out Attack', 'addition d6 for enemy morale test triggered by all out attack', 'p.73'],
  [traits.ALLIES]: ['affects actions', 'one less action if any fails in a force break test', 'p.72'],
  [traits.MOUNTED]: ['affects moving, shooting, melee...', '...', 'p.69'],
  [traits.IMPETUS]: ['requires cavalry spear, lance or kontos/xyston and loose order, affects attack, higher weapon initiative', '-1/-2 to save', 'p.67'],
  [traits.IRA]: ['delays wound effects', 'models do not receive wounds until the end phase', 'p.73'],
  [traits.FIDELIS]: ['affects morale tests', 'may re-roll failed dice during morale tests', 'p.73'],
  [traits.EXTRA_WAR_BOW]: ['may use ready to swap weapon to war bow', '', 'p.66'],
  [traits.EXTRA_JAVELIN]: ['may use ready to swap weapon to javelin', '', 'p.66'],
  [traits.EXTRA_CAVALRY]: ['may use ready to swap weapon to cavalry spear', '', 'p.66'],
  [traits.IMPULSUM]: ['requires throwing spear, affects throw', '+1 d6 if enemy tests morale', 'p.68'],
  [traits.AIM]: ['bow & loose order, affects shooting', 'May use ready to re-roll misses', 'p.66'],
  [traits.OMENS]: ['affects pre-game', 'may re-roll the omens test', 'p.118'],
  [traits.MARAUDERS]: ['affects command range', 'always in command range of closest friendly commander', 'p.73'],
  [traits.ELEPHANT]: ['affects everything', 'see elephant special rules', 'p.76'],
  [traits.SLING]: ['requires sling and loose order, affects sling shooting', 'Long range becomes 16"', 'p.71'],
  [traits.CHARIOT]: ['affects everything', 'see chariot special rules', 'p.82'],
  [traits.MUSICIAN]: ['affects command range', 'increases command range for activations only', 'p.118'],
  [traits.STANDARD]: ['affects rally', 'may re-roll 1s', 'p.118'],
  [traits.BUCKLER]: ['affects melee', 'adds +1 to melee save only, ignored by shooting and fatigue', 'p.64'],
  [traits.DETERMINED]: ['affects grit tests', 'ignore fatigue for grit tests', 'p.72'],
  [traits.FERAL]: ['affects animals', 'see feral special rules', 'p.72'],
  [traits.MACEDONIAN]: ['requires pike and close order, affects save', 'can claim shield for ranged save', 'p.68'],
  [traits.ENDURANCE]: ['requires loose order, affects movement and fatigue', '3rd move is 6" and does not generate fatigue', 'p.72'],
  [traits.CHARGE]: ['requires close order and long weapon, affects attack', 'charge further, -1/-2 to enemy save, extra d6 for enemy morale test, only surviving enemies counterattack ', 'p.68'],
  [traits.HOWDA]: ['affects save', '+2 to save', 'p.80'],
  [traits.OVERHEAD]: ['', 'Arcane Companion p19', 'Arcane Companion'],
  [traits.STALWART]: ['affects morale tests', 'may re-roll failed dice during morale tests', 'playtest'],
  [traits.BREAKER]: ['requires loose order and double handed weapon, affects melee', 'Additional d6 to enemy morale test', 'playtest'],
  [traits.PLATE]: ['affects save', 're-roll ones', 'playtest'],
  [traits.DOUBLE]: ['affects melee', '-2 to enemy save, must use shields like special equipment', 'playtest'],
  [traits.WARHORSE]: ['affects attack action', 're-roll 1s to hit vs infantry', 'playtest'],
  [traits.SHIELDBREAKER]: ['requires double hander and loose order, affects enemy morale', 'Additional d6 to enemy morale test', 'playtest'],
  [traits.HUNTER]: ['affects shoot action', 're-roll 1s to hit when shoot is first action', 'playtest'],
  [traits.THRUST]: ['requires spear or pike and loose order, affects atack', 'enemy may not couter-attack, but gain +1 to morale, attacker always retreats, 3"', 'playtest'],
  [traits.ELUSIVE]: ['requires loose order, affects defend', 'When selecting defend as combat response the unit may re-roll any ones rolled', 'playtest'],
  [traits.COMBINED_ARMS]: ['', 'See Clash of Katanas expansion, Arcane companion p18', 'Clash of Katanas, Arcane Companion'],
  [traits.CUTTHROAT]: ['affects morale', 'Arcane Companion p 19', 'Arcane Companion'],
  [traits.RAIN]: ['requires loose order and additional hand weapon, affects all-out attack', 're-roll 1s to hit', 'playtest'],
  [traits.COMMAND_ALL]: ['Command Ability', 'Command Ability', 'Fields of Blood'],
  [traits.COMMAND_GALLIC]: ['Command Ability', 'Generic Command Ability', 'Fields of Blood'],
  [traits.COMMAND_ROMAN]: ['Command Ability', 'Roman Command Ability', 'Fields of Blood'],
  [traits.COMMAND_ITALIAN]: ['Command Ability', 'Italian Command Ability', 'Fields of Blood'],
  [traits.COMMAND_SPANISH]: ['Command Ability', 'Iberian Command Ability', 'Fields of Blood'],
  [traits.COMMAND_PYRRHIC]: ['Command Ability', 'Pyrrhic Command Ability', 'Fields of Blood'],
  [traits.COMMAND_NUMIDIAN]: ['Command Ability', 'Numidian Command Ability', 'Fields of Blood'],
  [traits.COMMAND_GREEK]: ['Command Ability', 'Greek Command Ability', 'Fields of Blood'],
  [traits.COMMAND_PUNIC]: ['Command Ability', 'Carthaginian Command Ability', 'Fields of Blood'],
  [traits.GAUCHE]: ['affects melee, requires loose order', ' When selecting defend as their combat response these troops may re-roll any failed attempts to cancel hits.', 'samurai'],
  [traits.GRIZZLED]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.INDEPENDENT]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.POORLY]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.BUSHMASTER]: ['', 'See Rise of Eagles/Clash of Katanas expansion/Arcane Companion P 18', 'Rise of Eagles/Clash of Katanas/Arcane Companion'],
  [traits.VICIOUS]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.LINE_BREAKER]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.ROBUR]: ['', 'See Rise of Eagles expansion, Arcane Companion p 20', 'Rise of Eagles/Arcane Companion'],
  [traits.GUSHING]: ['', 'See Rise of Eagles expansion, Arcane Companion p 20', 'Rise of Eagles/Arcane Companion'],
  [traits.HACK]: ['', 'See Arcane Companion p 20', 'Arcane Companion'],
  [traits.PARRY]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.GUARDED]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.OVERWHELM]: ['', 'See Rise of Eagles expansion, Arcane Companion p 19', 'Rise of Eagles/Arcane Companion'],
  [traits.FAMILY]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.HEAVY_CHARIOT]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.EXTRA_SHIELD]: ['', 'See Rise of Eagles expansion', 'Rise of Eagles'],
  [traits.UTEYA]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.PARRY]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.FORM_UP]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.DUTY]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.PAVAIS]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.SAKE]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.GEISHA]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.ASSASSIN]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.MASTER_ASSASSIN]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.SHRINE]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.VOLLEY]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.KAKOMU]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.HARINEZUM]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.FUREKAESHI]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.KURIDASHI]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.NAGINATA]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.HONOURABLE]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.MOMENTUM]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.EXTRA_POLEARM]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.MANDARIN]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.YOJI]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.DEADLY_STRIKE]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.OLD_WAYS]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.EXTRA]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.PARRY_OFF]: ['', 'See Clash of Katanas expansion/Arcane Companion p19', 'Clash of Katanas/Arcane Companion'],
  [traits.RUTHLESS]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.FICKLE]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.HARINEZUMI]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.ASHIGARU]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.ROTATIONAL_FIRE]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.BROTHERHOOD]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.EXTENDED_NAGAE]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.HEAVY_STRIKE]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.SHIELDS_UP]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.TSUKAIBAN]: ['', 'See Clash of Katanas expansion', 'Clash of Katanas'],
  [traits.ARCANIST_3]: ['', 'See Arcane Companion, p. 9', 'Arcane Companion'],
  [traits.ARCANIST_2]: ['', 'See Arcane Companion, p. 9', 'Arcane Companion'],
  [traits.ARCANIST_1]: ['', 'See Arcane Companion, p. 9', 'Arcane Companion'],
  [traits.DVERGER]: ['', 'See Arcane Companion, p. 20', 'Arcane Companion'],
  [traits.SHIELDWALL]: ['', 'See Arcane Companion, p. 23', 'Arcane Companion'],
  [traits.SCHILTRON]: ['', 'See Arcane Companion, p. 23', 'Arcane Companion'],
  [traits.STRIKE]: ['', 'See Arcane Companion, p. 23', 'Arcane Companion'],
  [traits.SHIELDS_UP]: ['', 'See Arcane Companion, p. 23', 'Arcane Companion'],
  [traits.UNDEAD]: ['', 'See Arcane Companion, p. 11', 'Arcane Companion'],
  [traits.SELF_MOTIVATED]: ['', 'See Arcane Companion, p. 22', 'Arcane Companion'],
  [traits.IMPLACABLE]: ['', 'See Arcane Companion, p. 20', 'Arcane Companion'],
  [traits.LARGE_CREATURE]: ['', 'See Arcane Companion, p. 19', 'Arcane Companion'],
  [traits.BLITZ]: ['', 'See Arcane Companion, p. 18', 'Arcane Companion'],
  [traits.SIMPLEMINDED]: ['', 'See Arcane Companion, p. 21', 'Arcane Companion'],
  [traits.PRIDE]: ['', 'See Arcane Companion, p. 21', 'Arcane Companion'],
  [traits.BLADE_WAVE]: ['', 'See Arcane Companion, p. 21', 'Arcane Companion'],
  [traits.STUBBORN]: ['', 'See Arcane Companion, p. 23', 'Arcane Companion'],
  [traits.WAR_MOUNT]: ['', 'See Arcane Companion, p. 23', 'Arcane Companion'],
  [traits.PIKE_SPECIALIST]: ['', 'See Arcane Companion, p. 21', 'Arcane Companion'],
  [traits.NATURAL_ARMOUR_1]: ['', 'See Arcane Companion, p. 21', 'Arcane Companion'],
  [traits.NATURAL_ARMOUR_2]: ['', 'See Arcane Companion, p. 21', 'Arcane Companion'],
  [traits.NATURAL_ARMOUR_3]: ['', 'See Arcane Companion, p. 21', 'Arcane Companion'],
  [traits.NATURAL_ARMOUR_4]: ['', 'See Arcane Companion, p. 21', 'Arcane Companion'],
  [traits.DVERGR]: ['', 'See Arcane Companion, p. 20', 'Arcane Companion'],
  [traits.SHARPSHOOTER]: ['', 'See Arcane Companion, p. 22', 'Arcane Companion'],

};
export default traits;
