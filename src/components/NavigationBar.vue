<template>
    <div class="w-full h-full flex items-center p-4 border">
        <span class="text-red-600 text-3xl">{{ pageName }}</span>
        <div>

        </div>
    </div>
</template>



<script setup>
defineProps({
    pageName: {
        type: String,
        default: "Dashboard"
    },
})
</script>
