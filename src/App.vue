<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue';

export default {
  name: 'app',
  components: {
    Calculator,
  },
};
</script>


<style lang="scss">
    body {
      font-family:'verdana';
      position: relative;
    }
    input, select{
      font-family: 'verdana';
      font-weight: bold;
      max-width: 300px;
    }
    textarea:focus,select:focus, input:focus{
      outline: none;
    }
    #app{
      width:900px;
      margin:auto;
    }
    input.army-name{
      line-height: 30px;
      border-radius: 5px;
      padding-left: 3px;
      font-size: 16px;
      width: 250px;
    }
    h2.army-title {
      display: inline-block;
    }
    h2.army-title span {
      display: block;
      font-size: 80%;
      font-weight: normal;
    }
    .unit-row {
      border-bottom: 1px solid #505050;
      padding-bottom: 0.5rem;
      position:relative;
      min-height:60px;
    }
    .unit-row-stats {
      vertical-align: top;
      min-height: 40px;
    }
    .unit-cell {
      display: inline-block;
      box-sizing: border-box;
      // border-right:solid #a0a0a0 1px;
      vertical-align: top;
    }

    .unit-cell-name {
      font-weight: bold;
    }
    .unit-cell-wide {
      width: 25%;
    }
    .unit-cell-medium {
      width: 19%;
    }
    .unit-cell-small {
      width: 4%;
    }
    .unit-cell-full-on-mob {
      width: 20%;
    }
    .row-reposition{
      position:absolute;
    }
    .button-bar {
      float:right;
      margin: 1em;
    }

    .unit-option{
      border-radius: 5px;
      padding: 3px;
    }

    /* buttons */
    .unit-option-remove,
    .adjust-figure{
      font-size: 16px;
      cursor: pointer;
    }
    .unit-option-remove i {
      background: #505050;
      color: white;
      line-height: 20px;
      margin-left: -5px;
      padding: 0 3px;
      border-radius: 3px 0 0 3px;
    }
    .unit-option-remove {
      border-radius: 3px;
      border: 1px solid #505050;
      background: white;
      margin-right: 5px;
    }
    .unit-down,
    .unit-up{
      position:absolute;
      line-height: 20px;
      cursor: pointer;
    }
    .unit-up{
      top:8px;
    }
    .unit-down{
      top:50px;
    }
    .unit-delete{
      position: absolute;
      top: 8px;
      cursor: pointer;
      line-height: 26px;
      right: 0;
      font-size: 16px;
    }
    .top-button{
      position: relative;
      padding-top: 22px;
      margin-right: 2em;
    }
    .top-button-icon{
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -0.4em;
      font-size: 20px;
    }

    .top-buttons {
      display: inline-block;
      text-align: center;
      width: 500px;
    }
    @media only screen and (max-width: 890px) {
      #app{
        width:100%;
      }
      .unit-cell {
        padding-right: 1em;
      }
      .unit-cell-wide {
        width: 60%;
      }
      .unit-cell-medium{
        width: 33%;
      }
      .unit-cell-small{
        width: 10%;
      }
      .unit-cell-full-on-mob{
        width: 100%;
      }
      .unit-delete {
          position: absolute;
          top: unset;
          cursor: pointer;
          line-height: 20px;
          right: unset;
          bottom: 20px;
          left: 0;
          font-size: 15px;
      }

      .top-buttons {
        width: 300px;
      }
    }

@media print {
  select,
  button,
  .sharable-link {
    display: none;
  }
  button.unit-option-remove{
    display:inline-block;
  }
}


</style>
