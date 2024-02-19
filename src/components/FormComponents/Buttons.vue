<template>
    <button
        class="w-[20vw] h-auto border border-red-700 bg-red-700 text-lg text-white rounded px-4 py-2 hover:bg-white hover:text-red-700 transition-all">{{
            text
        }}</button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: "Button"
    },
})
</script>