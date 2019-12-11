<template>
  <div class="unit-row unit-row-title" style="padding-left:32px;">
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
        Weapon
      </div>
      <div class="unit-cell unit-cell-medium">
        Armour
      </div>
      <div class="unit-cell unit-cell-medium">
        Traits
      </div>
    </div>
</template>

<script>
export default {
  name: 'TitleRow',
};
</script>
<style scoped lang="scss">
    .unit-row-title {
      background-color: #e0e0e0;
      font-weight: bold;
      min-height:1em;
      clear: both;
      min-height: 30px;
    }
    .unit-row {
      border-bottom: 1px solid #505050;
      padding-bottom: 0.5rem;
      position:relative;
    }
</style>
