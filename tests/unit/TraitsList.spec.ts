import { shallowMount } from '@vue/test-utils';
import TraitsList from '@/components/TraitsList.vue';

describe('TraitsList.vue', () => {
  it('doesn\'t crash if no matchinbg trait', () => {
    const wrapper = shallowMount(TraitsList, {
      propsData: { trait: 'nope' },
    });
    const traitHead = wrapper.find('th.trait-head');
    expect(traitHead.exists()).toBe(true);
  });
  it('renders traits in order with correct classes', () => {
    const trait = 'guerrilla';
    const wrapper = shallowMount(TraitsList, {
      propsData: { trait },
    });

    const traitHead = wrapper.find('th.trait-head');
    expect(traitHead.exists()).toBe(true);
    expect(traitHead.text()).toBe('guerrilla(p.67)');

    const traitConditions = wrapper.find('td.trait-desc');
    expect(traitConditions.exists()).toBe(true);
    expect(traitConditions.text()).toContain('requires loose order, affects enemy morale');
    expect(traitConditions.text()).toContain('+1 test to enemy if melee from high area terrain, terrain is one easier for throw, shoot, melee');
  });
});
