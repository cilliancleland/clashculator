<template>
  <div class="unit-row unit-row-title">
    <button class="button-sort"
        aria-label="Sort units"
        title="Sort"
        v-on:click="$emit('army-sort')" >
      <i class="fa fa-sort" aria-hidden="true"></i>
    </button>
    <div class="unit-cell unit-cell-wide">
      Troop type
    </div>
    <div class="unit-cell unit-cell-small">
      ML
    </div>
    <div class="unit-cell unit-cell-small">
      SH
    </div>
    <div class="unit-cell unit-cell-small">
      GR
    </div>
    <div class="unit-cell unit-cell-small">
      SV
    </div>
    <div class="unit-cell unit-cell-medium">
      Weapon (initiative)
    </div>
    <div class="unit-cell unit-cell-medium">
      Armour
    </div>
    <div class="unit-cell unit-cell-medium">
      Traits
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TitleRow',
  props: {
    sorting: String,
  },
};
</script>
<style scoped lang="scss">
    .unit-row-title {
      background-color: #e0e0e0;
      font-weight: bold;
      min-height:1em;
      clear: both;
      min-height: 30px;
      padding-left:32px;
      position: relative;
      border-bottom: 1px solid #505050;
      padding-bottom: 0.5rem;
      position:relative;
    }
    .button-sort {
      position: absolute;
      left: 1px;
      line-height: 20px;
      cursor: pointer;
      width: 28px;
    }
</style>
