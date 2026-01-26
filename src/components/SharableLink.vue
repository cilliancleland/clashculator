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

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'SharableLink',
  props: {
    sharable: String,
    showToastr: Function,
  },
  methods: {
    copyToClip: function copyToClip() {
      if (!this.$refs.sharableInput) return;
      const inputElem = this.$refs.sharableInput as HTMLInputElement;
      inputElem.focus();
      inputElem.select();
      inputElem.setSelectionRange(0, 99999);
      document.execCommand('copy');
      this.$emit('show-toastr', 'Sharing link copied to clipboard');
    },
  },
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
