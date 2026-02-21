<template>
  <div>
    <div class="sharable-link" title="Click to copy sharable link">
      <label>Share this list
        <div class="input-flag">
          <i class="fa fa-link"  v-on:click="copyToClip"></i>
        </div>
        <input
              readonly
              :value="sharable"
              ref="sharableInput"
              v-on:click="copyToClip"
              class="sharable-input" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineExpose, ref } from 'vue';

const props = defineProps({
  sharable: {
    type: String,
    required: true,
  },
  showToastr: {
    type: Function,
    required: true,
  },
});
const sharableInput = ref<HTMLInputElement | null>(null);
const copyToClip = () => {
  if (!sharableInput.value) return;
  const inputElem = sharableInput.value;
  inputElem.focus();
  inputElem.select();
  inputElem.setSelectionRange(0, 99999);
  document.execCommand('copy');
  props.showToastr('Sharing link copied to clipboard');
};
defineExpose({
  copyToClip,
});
</script>
<style scoped lang="scss">
    .sharable-link {
      cursor: pointer;
      margin-top: 20px;
    }
    .sharable-link label {
      cursor:pointer;
    }

    .input-flag {
      background: darkslategrey;
      color: white;
      border: 5px solid darkslategray;
      border-radius: 8px 0 0 8px;
      display: inline-block;
      height: 25px;
      box-sizing: border-box;
    }
    .sharable-input {
      height: 25px;
      display: inline-block;
      box-sizing: border-box;
      vertical-align: top;
      cursor: pointer;
    }
</style>
