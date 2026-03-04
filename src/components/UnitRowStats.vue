<template>
  <div>
    <div class="unit-row-stats">
      <div class="unit-cell unit-cell-full-on-mob">
        <button v-on:click="removeFigure"
          aria-label="Remove figure"
          title="Remove figure"
          v-if="row.fixedFigures === undefined"
          class="adjust-figure">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        {{row.size}} figures
        <span v-if="row.traits.includes('feral')">
          (+1)
        </span>
        <button v-on:click="addFigure"
          aria-label="Add figure"
          title="Add figure"
          v-if="row.fixedFigures === undefined"
          class="adjust-figure">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
      <div class="unit-cell unit-cell-wide">
        @ {{row.cost}}
        <span v-if="optionsCostPerFigure !== 0">({{ optionsCostPerFigure > 0 ? '+' : '' }}{{ optionsCostPerFigure }})</span>
        points each
      </div>
      <div class="unit-cell unit-cell-wide">
        Total unit cost:  {{rowCost}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { SelectedUnit } from '../helpers/types';

const props = defineProps({
  row: {
    type: Object as PropType<SelectedUnit>,
    required: true,
  },
  rowIndex: {
    type: Number,
    required: true,
  },
  updateRow: {
    type: Function,
    required: true,
  },
});
const optionsCostPerFigure = computed((): number => {
  return props.row.selectedOptions.reduce((total, selectedOption) => {
    return total + props.row.options[selectedOption].cost;
  }, 0);
});
const rowCost = computed((): number => {
  const { row } = props;
  const numFigs = row.size || 1;
  return Math.round((numFigs * (row.cost + optionsCostPerFigure.value)));
});
function addFigure(): void {
  props.updateRow(props.rowIndex, 'size', Math.min(props.row.size + 1, 15));
}
function removeFigure(): void {
  props.updateRow(props.rowIndex, 'size', Math.max(props.row.size - 1, 0));
}
</script>
