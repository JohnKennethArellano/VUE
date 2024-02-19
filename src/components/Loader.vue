<template>
    <div class="absolute w-full h-full top-0 left-0 z-10 flex items-center justify-center mainHolder">
        <div class="circles"></div>
        <div class="circles"></div>
        <div class="circles"></div>
        <div class="circles"></div>
        <div class="circles"></div>
    </div>
</template>



<script setup>

</script>

<style scoped>
.mainHolder {
    backdrop-filter: blur(5px);
}

.circles {
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    margin-right: 1vw;
    transition: all ease-in 1s;
    animation: bounce 1.5s infinite;
}

.circles:nth-child(1) {
    animation-delay: 200ms;
}

.circles:nth-child(2) {
    animation-delay: 400ms;
}

.circles:nth-child(3) {
    animation-delay: 600ms;
}

.circles:nth-child(4) {
    animation-delay: 800ms;
}

.circles:nth-child(5) {
    animation-delay: 1000ms;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
        background-color: #d23434;
    }


    50% {
        transform: translateY(-1vw);
    }

    100% {
        transform: translateY(0);
        background-color: #ffffff;
    }
}
</style>