<template>
    <div>
        <fieldset>
            <legend>Options</legend>
            <fieldset>
                <legend>Sorting</legend>
                <div>
                    <label>
                        <input type="radio" name="sorting" value="manual"
                            v-bind:checked="sorting=='manual'"
                            v-on:change="$emit('set-option', 'sorting', 'manual')"
                            />
                        Allow manual sort
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="sorting" value="auto"
                            v-bind:checked="sorting=='auto'"
                            v-on:change="$emit('set-option', 'sorting', 'auto')"
                         />
                        Automatic sort
                    </label>
                </div>
            </fieldset>
            <div>
                <label for="defaultNumber">Default number for new units</label>
                <input type="number" min="0" max="16" name="defaultNumber" id="defaultNumber"
                    v-bind:value="defaultNumber"
                    v-on:keyup="$emit('set-option', 'defaultNumber', $event.target.value)"
                    v-on:change="$emit('set-option', 'defaultNumber', $event.target.value)" />
            </div>
            <div>
                <label for="autoNumber">
                    <input type="checkbox" name="autoNumber" id="autoNumber" value="1"
                        v-bind:checked="autoNumber==true"
                        v-on:change="$emit('set-option', 'autoNumber', $event.target.checked)"
                        />
                    Automatically assign a random number to units when
                    printing for deployment tokens
                </label>
            </div>
            <div>
                <label for="showDeployTable">
                    <input type="checkbox" name="showDeployTable" id="showDeployTable" value="1"
                        v-bind:checked="showDeployTable==true"
                        v-on:change="$emit('set-option', 'showDeployTable', $event.target.checked)"
                        />
                    Print deployment fatigue table under traits
                </label>
            </div>
        </fieldset>
        <button
            title="Close"
            v-on:click="$emit('no-options')" >
                close
        </button>
    </div>
</template>


<script>
export default {
  name: 'OptionsScreen',
  props: [
    'sorting',
    'autoNumber',
    'defaultNumber',
    'showDeployTable',
  ],
};
</script>
