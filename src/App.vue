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
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      position: relative;
    }
    input, select{
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
      border-right:solid #a0a0a0 1px;
      vertical-align: top;
    }

    .unit-cell-name {
      font-weight: bold;
    }
    .unit-cell-large {
      width: 20%;
    }
    .unit-cell-medium {
      width: 19%;
    }
    .unit-cell-small {
      width: 3%;
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
    unit-option-remove
    .adjust-figure{
      font-size: 16px;
      cursor: pointer;
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
      right: 16px;
      font-size: 20px;
    }
    .top-button{
      position: relative;
      padding-top: 22px;
    }
    .top-button-icon{
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -0.5em;
      font-size: 20px;
    }

    @media only screen and (max-width: 900px) {
      #app{
        width:100%;
      }
      .unit-cell-medium{
        width: 30%;
      }
      .unit-cell-small{
        width: 10%;
      }

    }
</style>
