<template>
      <label
        :for="period">
        <input  type="radio"
                name="period"
                :value="period"
                :id="period"
                :checked="period==selectedPeriod"
                v-on:change="handleChange" />
        {{periodLabels[period]}}
      </label>
</template>


<script lang="ts">
import Vue from 'vue';
import { PERIODS } from '../helpers/constants';

export default Vue.extend({
  name: 'PeriodSelector',
  props: {
    selectedPeriod: String,
    period: String,
    selectPeriod: Function,
  },
  data: function data() {
    return {
      periodLabels: PERIODS,
    };
  },
  methods: {
    handleChange(event: Event) {
      this.$emit('select-period', (event.target as HTMLInputElement).value);
    },
  },
});
</script>
