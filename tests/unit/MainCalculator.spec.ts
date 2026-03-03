import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { nextTick } from 'vue';
import MainCalculator from '@/components/MainCalculator.vue';
import allLists from '@/helpers/lists';

type ExposedVM = { selectNation: (n: string) => void; sharable: string };

const firstPunicNation = Object.keys(allLists.punic)[0];

const localStorageMock = {
  getItem: vi.fn().mockReturnValue(null),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

describe('MainCalculator.vue', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', localStorageMock);
    vi.spyOn(window.history, 'pushState').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('does not call pushState on initial mount', () => {
    shallowMount(MainCalculator as any);
    expect(window.history.pushState).not.toHaveBeenCalled();
  });

  it('calls pushState with the sharable URL when army state changes', async () => {
    const wrapper = shallowMount(MainCalculator as any);
    const vm = wrapper.vm as unknown as ExposedVM;
    vm.selectNation(firstPunicNation);
    await nextTick();
    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      'Clashculator',
      vm.sharable,
    );
  });
});
