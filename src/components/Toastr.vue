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
      opacity:0;
      transition: opacity 0.5s;
      animation: hidetoastr 4s;
    }
    @keyframes hidetoastr {
      0% {height: 50px}
      99% {height: 50px}
      100% {height: 0}
    }
    .toastr.toastr-visible{
      opacity:1;
      transition: opacity 0.3s;
      height: 100px;
    }
    .toastr-message{
      width: 500px;
      height: 100px;
      padding-top: 20px;
      margin: auto;
      color: white;
    }
</style>
