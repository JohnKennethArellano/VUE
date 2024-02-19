<template>
    <form class="w-auto h-auto flex flex-col justify-center">
        <h1 class="w-full text-[1.5vw] text-gray-700 font-bold mb-3">{{ formTitle }}</h1>
        <slot />
    </form>
</template>

<script setup>
defineProps({
    formTitle: {
        type: String,
        default: "Form Title"
    },
})
</script>
