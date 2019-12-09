<template>
  <div>
    <h2>Share this list</h2>
    <span class="sharable-link" title="Click to copy sharable link">
      <input v-model="sharable" ref="sharableInput"  v-on:click="copyToClip" />
      <i class="fa fa-link"  v-on:click="copyToClip"></i>
    </span>
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
    .sharable-link{
      cursor:pointer;
    }
</style>
