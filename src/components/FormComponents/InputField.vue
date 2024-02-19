<template>
    <input type="text" :id="id" v-model="inputValue" :placeholder="placeholder" @input="$emit('input', $event.target.value)"
        v-bind="$attrs"
        class="w-[20vw] h-auto border text-sm border-gray-500 px-4 py-2 rounded outline-none focus:ring  transition-all mt-1 place"
        :class="{ 'border-red-500': !error }">
</template>
  
<script setup>
import { ref } from 'vue';

const { id, placeholder, value } = defineProps({
    id: String,
    placeholder: {
        type: String,
        default: "Input Field",
    },
    value: String,
    error: true
});

const inputValue = ref(value);

</script>