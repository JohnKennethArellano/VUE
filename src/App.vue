<script setup>
import Loader from './components/Loader.vue';
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
});
</script>

<template>
    <main class="w-auto h-auto">
        <Loader v-if="isLoading" />
        <router-view />
    </main>
</template>

<style scoped></style>
