<template>
    <div class="top-buttons">
      <button
        title="Reset"
        v-on:click="$emit('reset')"
        class="top-button">
        <i class="fa fa-undo top-button-icon"></i> Reset
      </button>
      <button
        title="Save locally"
        v-on:click="$emit('save-locally')"
        :disabled="armyChanged"
        v-bind:class="{ 'top-button': 1, 'top-button-disabled': armyChanged }">
        <i class="fa fa-floppy-o top-button-icon"></i> Save
      </button>
      <button
        title="Delete army from device"
        v-on:click="$emit('delete-locally')"
        :disabled="!armyChanged"
        v-bind:class="{ 'top-button': 1, 'top-button-disabled': !armyChanged }">
        <i class="fa fa-trash top-button-icon"></i> Delete
      </button>
    </div>

</template>

<script>
export default {
  name: 'TopButtons',
  props: [
    'armyChanged',
    'reset',
    'saveLocally',
    'deleteLocally',
  ],
};
</script>
<style scoped lang="scss">

</style>
