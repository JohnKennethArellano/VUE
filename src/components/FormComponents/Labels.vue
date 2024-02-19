<template>
    <label class="w-full h-auto text-sm text-gray-800">{{ text }}</label>
</template>

<script setup>
defineProps({
    text: String,
})

</script>