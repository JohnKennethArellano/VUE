<template>
    <span :v-if="error" class="text-red-500 text-sm">{{ msg }}</span>
</template>

<script setup>
defineProps({
    error: Boolean,
    msg: String
})
</script>