<template>
    <div class="w-full h-full flex items-center">
        <span>{{ pageName }}</span>
        <div>
            <InputField type="text" id="search" placeholder="Search here" v-model="search"
                :error="search" />
        </div>
    </div>
</template>



<script setup>
import { ref  } from 'vue';

const search = ref('')
import InputField from './FormComponents/InputField.vue';
defineProps({
    pageName: String,
})
</script>
