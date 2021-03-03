
<template>
  <div>
    <div class="period-selector">
      <period-selector
        v-for="(period) in periods"
        v-bind:key="period"
        v-bind:period="period"
        v-bind:selected-period = "selectedPeriod"
        v-on="$listeners"
      ></period-selector>
    </div>
    <select id="armySelect"
            v-bind:value="selectedNation"
            class="add-unit"
            v-on:change="$emit('select-nation', $event.target.value)">
      <option value="">Please select an army to start</option>
      <option v-for="(value, name) in lists" :value="name" v-bind:key="name">
      {{ name }}
      </option>
    </select>
    <span v-if="localSaves.length">
      or
      <select id="saveSelect"
              v-bind:value="savedName"
              class="add-unit"
              v-on:change="$emit('load-army', $event.target.value)">
          <option value="">Load a saved army</option>
          <option v-for="(value) in localSaves" :value="value" v-bind:key="value">
            {{ value }}
          </option>
      </select>
    </span>
    <h3>What's new</h3>
      <ul>
        <li>
          Added Samurai beta lists.
        </li>
        <li>
          Fixed a couple of options for Numidians.
        </li>
        <li>Fixed soothsayer bug (please report any bugs on
          <a href="https://www.facebook.com/groups/TheWargameSpot/" target="_blank">
          Facebook</a>.
          Bug reports are always welcome)</li>
        <li>Added command abilities from the excellent new supplement
          <a href="https://www.wargamevault.com/product/310813/FIELDS-of-BLOOD"  target="_blank">
          <b>FIELDS of <span  style="color:red">BLOOD</span></b>
          </a>
        </li>
        <li>Options button. Set default unit size, auto sorting and print options</li>
        <li>Alexandrian army lists</li>
      </ul>
    <p>

    </p>
  </div>
</template>

<script>
import PeriodSelector from './PeriodSelector.vue';

export default {
  name: 'IntroScreen',
  components: {
    'period-selector': PeriodSelector,
  },
  props: [
    'selectedNation',
    'selectedPeriod',
    'periods',
    'lists',
    'localSaves',
    'savedName',
    'loadArmy',
    'selectNation',
    'selectPeriod',
  ],
};
</script>
<style scoped lang="scss">
    .add-unit {
      border-radius: 10px;
      padding: 1rem;
      font-size: 16px;
      max-width: 100%;
    }
    .period-selector {
      padding: 0.5rem;
    }
</style>
