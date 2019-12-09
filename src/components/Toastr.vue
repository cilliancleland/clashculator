<template>
    <div :class="displayClasses">
      <div class="toastr-message">
        {{message}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'Toastr',
  props: {
    message: String,
  },
  computed: {
    displayClasses() {
      return this.message === ''
        ? 'toastr'
        : 'toastr toastr-visible';
    },
  },
};
</script>
<style scoped lang="scss">
    .toastr{
      position: fixed;
      bottom: 0;
      width: 100%;
      left: 0;
      background: green;
      display: none;
      opacity:0;
      transition: opacity 0.5s;
      animation: hidetoastr 4s;
    }
    @keyframes hidetoastr {
      0% {display: block}
      100% {display: none}
    }
    .toastr.toastr-visible{
      display:block;
      opacity:1;
      transition: opacity 0.3s;
    }
    .toastr-message{
      display: block;
      width: 500px;
      height: 100px;
      padding-top: 20px;
      margin: auto;
      color: white;
    }
</style>
