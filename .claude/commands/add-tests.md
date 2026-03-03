Add tests for the Vue component specified by the user (or the most recently edited component if none is specified).

## Process

1. **Read the component** at `src/components/<ComponentName>.vue` to understand its props, emitted events, computed behaviour, and rendered output.
2. **Check for an existing test file** at `tests/unit/<ComponentName>.spec.ts`. If one exists, read it and add only the missing cases rather than replacing it.
3. **Write or extend the spec file**, following the project conventions below.

## Project test conventions

- Framework: **Vitest** + **@vue/test-utils**
- Always use `shallowMount` to isolate the component from its children
- Import style: `import Foo from '@/components/Foo.vue'`
- Cast the component: `shallowMount(Foo as any, { props: { ... } })`
- Use `describe('Foo.vue', () => { ... })` as the top-level block
- Import `{ describe, it, expect, vi }` from `vitest` as needed
- Build a `baseProps` object that satisfies all required props (use `vi.fn()` for function props)
- For `SelectedUnit` props, build a `baseRow` object — see `tests/unit/UnitRow.spec.ts` for the full shape

## What to test (cover as many as are applicable)

- The component mounts without errors
- Required props are passed through to child components (verify with `.findComponent(...).props(...)`)
- Conditional rendering (v-if / v-show) for each meaningful branch
- CSS classes applied conditionally (computed class bindings)
- Emitted events — use `wrapper.find('...').trigger('click')` and `expect(wrapper.emitted(...)).toBeTruthy()`
- Accessibility attributes (`aria-label`, `role`, `aria-live`, etc.)
- Computed output visible in the rendered text

## After writing the tests

Run the new spec in isolation to confirm it passes:

```
npx vitest run tests/unit/<ComponentName>.spec.ts
```

Report how many tests were added and the final pass/fail result.
