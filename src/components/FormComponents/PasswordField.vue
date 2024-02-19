<template>
    <div class="w-auto h-auto flex items-center relative  mt-1">
        <InputField :type="textPassword ? 'text' : 'password'" :id="id" :placeholder="placeholder" v-model="inputValue"
            @input="$emit('input', $event.target.value)" v-bind="$attrs" :error="error" class="mt-0" />
        <icon :icon="textPassword ? 'eye' : 'eye-slash'" class="absolute right-2 text-sm text-gray-400 cursor-pointer"
            @click="handlePassword" />
    </div>
</template>
  
<script setup>
import InputField from './InputField.vue';
import { ref } from 'vue';

const { id, placeholder, value } = defineProps({
    id: String,
    placeholder: {
        type: String,
        default: "Input Field",
    },
    value: String,
    error: false
});

const inputValue = ref(value);

const textPassword = ref(false)
const handlePassword = () => {
    textPassword.value = !textPassword.value
}
</script>