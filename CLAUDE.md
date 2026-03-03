# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Clashculator is a web-based army builder/calculator for the tabletop miniature wargame *Clash of Spears*. It lets players select a historical period and nation, build an army by adding units, configure options (weapons, armour, shields, traits), and calculate stats like save values, points costs, and deployment tokens.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build (base path: /clashculator/)
npm run test         # Run tests in watch mode (vitest)
npm run test:unit    # Run all tests once (vitest run)
```

Run a single test file:
```bash
npx vitest run tests/unit/UnitRow.spec.ts
```

## Architecture

### Data layer (`src/helpers/`)

- **`types.ts`** — Core TypeScript interfaces. `Unit`/`Troops`/`Character` are the base game unit types. `SelectedUnit` extends `Unit` with runtime state (size, selectedOptions, upgrades). `SavedArmy` is the localStorage persistence format.
- **`lists.ts`** — Aggregates all period army lists into `allLists: LookupLists`, keyed by period ID (`punic`, `eagles`, `katanas`, `darkAge`, `alex`, `condottieri`, `arcane`).
- **`constants.ts`** — All armour, weapon, and shield string constants; `SAVE_MODS` lookup (armour type → save modifier); reusable `Option` objects (prefixed `OPT_*`); period-specific character option arrays. This is the central registry for all upgrade options.
- **`traits.ts`** — All trait name string constants as a `LookupString` object.
- **`helpers.ts`** — Pure calculation functions: `calcSaveNumber`, `calcSaveSymbol`, `numDeploymentCounters`, `shuffle`.
- **`punic.ts`, `eagles.ts`, `katanas.ts`, etc.** — Individual period army list data files, each exporting a `LookupArmy` (nation name → unit lookup).

### App layer (`src/components/`)

- **`MainCalculator.vue`** — Root component containing all app state (`armyContents`, `selectedNation`, `selectedPeriod`, options). Handles army serialization/deserialization for shareable URLs (compact base-32 encoding) and localStorage saves. Passes props/callbacks down to child components.
- **`IntroScreen.vue`** — Period/nation selection shown before an army is started.
- **`UnitRow.vue`** — Renders a single unit row; composes `UnitRowStats`, `UnitRowOptions`, and `UnitRowTraits`.
- **`UnitRowOptions.vue`** — Renders the unit's available upgrade options with mutually exclusive logic.
- **`UnitRowStats.vue`** — Displays the unit's computed stats (save, weapon, armour, etc.).
- **`UnitRowTraits.vue`** — Displays active traits for a unit.
- **`TraitsList.vue`** — Renders trait descriptions at the bottom of the army list.

### URL sharing format

The compact army URL format encodes units as base-32 strings: nation index + per-unit `[size][unitIndex][options as 15-bit binary→base-32]` + `_armyName`. Legacy formats (`a=` base64 JSON, `b=` early compact) are also decoded for backwards compatibility.

### Key patterns

- Options on units use index-based selection (`selectedOptions: number[]`) into the unit's `options` array — not by name.
- Save calculation: start at 7, subtract `SAVE_MODS` for armour + shield + barding. Lower is better. A `*` symbol means buckler or half-barding applies.
- `SelectedUnit` is created via `reactive()` in `addUnit()` inside `MainCalculator.vue`; the `unitSize()` method must be bound to the instance.
- `ArmyService.ts` exists as a class but is **not currently used** — army state lives directly in `MainCalculator.vue` as `ref`/`reactive` values.

## Tests

Tests use Vitest + `@vue/test-utils`. Unit tests live in `tests/unit/`. Helper function tests are in `tests/unit/helpers/`. Component tests use `shallowMount` to isolate components from their children.
