<template>
    <tr >
      <th>{{trait}}<span>({{traitPage}})</span></th>
      <td>
        <span class="conditions">
          {{traitConditions}}
        </span>
        {{traitText}}
      </td>
    </tr>
</template>


<script>
import traits from '../helpers/traits';

export default {
  name: 'TraitsList',
  props: ['trait'],
  computed: {
    desc: function desc() {
      return traits.descriptions[this.trait] || ['', '', ''];
    },
    traitConditions: function traitConditions() {
      return this.desc[0];
    },
    traitText: function traitText() {
      return this.desc[1];
    },
    traitPage: function traitText() {
      return this.desc[2];
    },
  },
};
</script>

<style scoped lang="scss">
  th {
    text-transform: capitalize;
    text-align: left;
    padding-right: 20px;
    padding-bottom: 18px;
  }
  th span {
    font-size: 80%;
  }
  span {
    font-style: italic;
    display: block;
    font-weight: normal;
  }
  td, th {
    border-bottom: solid grey 1px;
    border-top: solid grey 1px;
  }

</style>
