<template>
      <label
        :for="period">
        <input  type="radio"
                name="period"
                :value="period"
                :id="period"
                :checked="period==selectedPeriod"
                @click="handleChange" />
        {{periodLabels[period]}}
      </label>
</template>


<script setup lang="ts">
import { defineProps, reactive, defineExpose } from 'vue';
import { PERIODS } from '../helpers/constants';

const props = defineProps({
  selectedPeriod: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  selectPeriod: {
    type: Function,
    required: true,
  },
});

const periodLabels = reactive(PERIODS);
const handleChange = (event: Event) => {
  props.selectPeriod((event.target as HTMLInputElement).value);
};
defineExpose({
  handleChange,
  periodLabels,
});
</script>
