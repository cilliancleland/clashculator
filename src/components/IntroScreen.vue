
<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'IntroScreen',
  props: [
    'selectedNation',
    'lists',
    'localSaves',
    'savedName',
    'loadArmy',
    'selectNation',
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
</style>
