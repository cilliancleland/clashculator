<template>
  <div>
    <div class="sharable-link" title="Click to copy sharable link">
      <label>Share this list
        <div class="input-flag">
          <i class="fa fa-link"  v-on:click="copyToClip"></i>
        </div>
        <input
              readonly
              v-model="sharable"
              ref="sharableInput"
              v-on:click="copyToClip"
              class="sharable-input" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharableLink',
  props: ['sharable', 'showToastr'],
  methods: {
    copyToClip: function copyToClip() {
      this.$refs.sharableInput.focus();
      this.$refs.sharableInput.select();
      this.$refs.sharableInput.setSelectionRange(0, 99999);
      document.execCommand('copy');
      this.$emit('show-toastr', 'Sharing link copied to clipboard');
    },
  },
};
</script>
<style scoped lang="scss">
    .sharable-link {
      cursor: pointer;
      margin-top: 20px;
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
    }
</style>
