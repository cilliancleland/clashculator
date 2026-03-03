<template>
    <div class="top-buttons">
      <button
        title="FAQ"
        v-on:click="showFaq"
        class="top-button">
        <i class="fa fa-question top-button-icon"></i> FAQ
      </button>
      <button
        title="Options"
        v-on:click="showOptions"
        class="top-button">
        <i class="fa fa-cog top-button-icon"></i> Options
      </button>
      <button
        title="Reset"
        v-on:click="reset"
        class="top-button">
        <i class="fa fa-undo top-button-icon"></i> Reset
      </button>
      <button
        title="Save locally"
        v-on:click="saveLocally"
        :disabled="armyUnchanged"
        v-bind:class="{ 'top-button': 1, 'top-button-disabled': armyUnchanged }">
        <i class="fa fa-floppy-o top-button-icon"></i> Save
      </button>
      <button
        title="Delete army from device"
        v-on:click="deleteLocally"
        :disabled="!armyUnchanged"
        v-bind:class="{ 'top-button': 1, 'top-button-disabled': !armyUnchanged }">
        <i class="fa fa-trash top-button-icon"></i> Delete
      </button>
      <button
        title="Print"
        v-on:click="print"
        v-bind:class="{ 'top-button': 1 }">
        <i class="fa fa-print top-button-icon"></i> Print
      </button>
    </div>

</template>
  
<script setup lang="ts">

const props = defineProps({
  armyUnchanged: {type: Boolean, required: true},
  showFaq: {type: Function, required: true},
  showOptions: {type: Function, required: true},
  reset: {type: Function, required: true},
  saveLocally: {type: Function, required: true},
  deleteLocally: {type: Function, required: true},
});

function print(): void {
  window.print();
}
</script>
<style scoped lang="scss">

</style>
