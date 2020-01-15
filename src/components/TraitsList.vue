<template>
    <tr >
      <th>{{trait}}</th>
      <td>
        <span class="conditions">
          {{traitConditions}}
        </span>
        {{traitText}}
      </td>
    </tr>
</template>


<script>
import { TRAIT_DESCRIPTIONS } from '../helpers/traits';

export default {
  name: 'TraitsList',
  props: ['trait'],
  computed: {
    traitConditions: function traitConditions() {
      const desc = TRAIT_DESCRIPTIONS[this.trait] || ['', ''];
      return desc[0];
    },
    traitText: function traitText() {
      const desc = TRAIT_DESCRIPTIONS[this.trait] || ['', ''];
      return desc[1];
    },
  },
};
</script>

<style scoped lang="scss">
  th {
    text-transform: capitalize;
    text-align: left;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  span {
    font-style: italic;
    display: block;
  }
  td, th {
    border-bottom: solid grey 1px;
    border-top: solid grey 1px;
  }

</style>
