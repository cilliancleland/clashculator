<template>
    <div class="top-buttons">
      <button
        title="FAQ"
        v-on:click="$emit('show-faq')"
        class="top-button">
        <i class="fa fa-question top-button-icon"></i> FAQ
      </button>
      <button
        title="Options"
        v-on:click="$emit('show-options')"
        class="top-button">
        <i class="fa fa-cog top-button-icon"></i> Options
      </button>
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
      <button
        title="Print"
        v-on:click="print"
        v-bind:class="{ 'top-button': 1 }">
        <i class="fa fa-print top-button-icon"></i> Print
      </button>
    </div>

</template>

<script>
export default {
  name: 'TopButtons',
  props: [
    'armyChanged',
    'showFaq',
    'showOptions',
    'reset',
    'saveLocally',
    'deleteLocally',
  ],
  methods: {
    print() {
      window.print();
    },
  },
};
</script>
<style scoped lang="scss">

</style>
