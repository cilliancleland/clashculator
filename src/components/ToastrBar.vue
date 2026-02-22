<template>
    <div :class="displayClasses">
      <div class="toastr-message">
        {{message}}
      </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

const displayClasses = computed(() => {
  return props.message === '' ? 'toastr' : 'toastr toastr-visible';
});
</script>
<style scoped lang="scss">
    .toastr{
      position: fixed;
      bottom: 0;
      width: 100%;
      left: 0;
      background: green;
      opacity:0;
      transition: opacity 0.5s, height 0.5s;
      height: 0;
    }
    .toastr.toastr-visible{
      opacity:1;
      transition: opacity 0.3s;
      height: 100px;
    }
    .toastr-message{
      width: 500px;
      padding-top: 20px;
      margin: auto;
      color: white;
    }
</style>
