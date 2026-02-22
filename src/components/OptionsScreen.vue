<template>
    <div>
        <fieldset>
            <legend>Options</legend>
            <fieldset>
                <legend>Sorting</legend>
                <div>
                    <label>
                        <input type="radio" name="sorting" value="manual" id="sorting-manual"
                            v-bind:checked="sorting=='manual'"
                            v-on:change="doEmit('sorting', 'manual')"
                            />
                        Allow manual sort
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="sorting" value="auto" id="sorting-auto"
                            v-bind:checked="sorting=='auto'"
                            v-on:change="doEmit('sorting', 'auto')"
                         />
                        Automatic sort
                    </label>
                </div>
            </fieldset>
            <div>
                <label for="defaultNumber">Default number for new units</label>
                <input type="number" min="0" max="16" name="defaultNumber" id="defaultNumber"
                    v-bind:value="defaultNumber"
                    @input="(e) =>handleTextChange('defaultNumber', e)"
                    @change="(e) =>handleTextChange('defaultNumber', e)" />
            </div>
            <div>
                <label for="autoNumber">
                    <input type="checkbox" name="autoNumber" id="autoNumber" value="1"
                        v-bind:checked="autoNumber==true"
                        @change="(e) => handleCheckboxChange('autoNumber', e)"
                        />
                    Automatically assign a random number to units when
                    printing for deployment tokens
                </label>
            </div>
            <div>
                <label for="showDeployTable">
                    <input type="checkbox" name="showDeployTable" id="showDeployTable" value="1"
                        v-bind:checked="showDeployTable==true"
                        @change="(e) => handleCheckboxChange('showDeployTable', e)"
                        />
                    Print deployment fatigue table under traits
                </label>
            </div>
        </fieldset>
        <button id="close-button"
            title="Close"
            @click="emit('no-options')" >
                close
        </button>
    </div>
</template>


<script setup lang="ts">
import { defineProps, defineExpose, defineEmits } from 'vue';

defineProps({
  sorting: String,
  autoNumber: Boolean,
  defaultNumber: Number,
  showDeployTable: Boolean,
});
const emit = defineEmits(['set-option', 'no-options']);

const doEmit = (option: string, value: any) => {
  emit('set-option', option, value);
};
const handleCheckboxChange = (option: string, event: Event) => {
  doEmit(option, (event.target as HTMLInputElement).checked);
};
const handleTextChange = (option: string, event: Event) => {
  doEmit(option, (event.target as HTMLInputElement).value);
};
defineExpose({
  doEmit,
  handleCheckboxChange,
  handleTextChange,
});
</script>
