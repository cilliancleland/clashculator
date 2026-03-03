<template>
    <tr class="trait-row">
      <th class="trait-head">{{trait}}<span>({{traitPage}})</span></th>
      <td class="trait-desc">
        <span class="conditions">
          {{traitConditions}}
        </span>
        {{traitText}}
      </td>
    </tr>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { traitDescriptions } from '../helpers/traits';

const props = defineProps({
  trait: {
    type: String,
    required: true,
  },
});
const desc = computed((): [string, string, string] => {
  return traitDescriptions[props.trait] || ['', '', ''];
});
const traitConditions = computed(() => { return desc.value[0]; });
const traitText = computed(() => { return desc.value[1]; });
const traitPage = computed(() => { return desc.value[2]; });

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
