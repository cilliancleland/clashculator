import { shallowMount } from '@vue/test-utils';
import PeriodSelector from '@/components/PeriodSelector.vue';
import { PERIODS } from '@/helpers/constants';

const periodKeys = Object.keys(PERIODS);

describe('PeriodSelector.vue', () => {
  it('renders  a selected radio button correctly', () => {
    const wrapper = shallowMount(PeriodSelector as any, {
      propsData: {
        selectedPeriod: 'punic',
        period: 'punic',
        selectPeriod: jest.fn((val: string) => {}),
      },
    });
    const radio = wrapper.find('input[type="radio"]');
    expect(radio.exists()).toBe(true);
    expect((radio.element as HTMLInputElement).checked).toBe(true);
  });

  it('renders an unselected radio button correctly', () => {
    const wrapper = shallowMount(PeriodSelector as any, {
      propsData: {
        selectedPeriod: 'punic',
        period: 'katanas',
        selectPeriod: jest.fn((val: string) => {}),
      },
    });
    const radio = wrapper.find('input[type="radio"]');
    expect(radio.exists()).toBe(true);
    expect((radio.element as HTMLInputElement).checked).toBe(false);
    // click the radio button and check if selectPeriod is called with the correct value
    radio.trigger('click');
    expect(wrapper.props().selectPeriod).toHaveBeenCalledWith('katanas');
  });
});
