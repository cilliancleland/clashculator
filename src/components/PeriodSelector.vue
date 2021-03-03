<template>
      <label
        :for="period">
        <input  type="radio"
                name="period"
                :value="period"
                :id="period"
                :checked="period==selectedPeriod"
                v-on:change="$emit('select-period', $event.target.value)" />
        {{periodLabels[period]}}
      </label>
</template>


<script>
import { PERIODS } from '../helpers/constants';

export default {
  name: 'PeriodSelector',
  props: [
    'selectedPeriod',
    'period',
    'selectPeriod',
  ],
  data: function data() {
    return {
      periodLabels: PERIODS,
    };
  },
};
</script>
