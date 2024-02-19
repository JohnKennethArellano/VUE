<template>
    <li :class="{ 'active': isActive(props.link) }" class="w-[90%] p-4 rounded-full mb-1">
        <router-link :to="props.link" class="link">
            <icon icon="table-cells-large" class="px-4 iconsInfo" />
            <span class="linksInfo">{{ text }}</span>
        </router-link>
    </li>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
    link: String,
    text: String,
});

const $route = useRoute();

const isActive = (route) => {
    return $route.path === route;
}
</script>

<style scoped>
/* Active state background color */
li.active {
    background: #B61C1D;
}

.linksInfo,
.iconsInfo {
    color: #B61C1D;
}

li.active .linksInfo,
li.active .iconsInfo {
    color: white;
}

li {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

li:before {
    content: "";
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    /* Change z-index to -1 */
    background-color: #B61C1D;
    transition: all ease .5s;
}

li:hover::before {
    width: 100%;
    z-index: 0;
    /* Change z-index to 0 */
}

li:hover .iconsInfo,
li:hover .linksInfo {
    color: white;
    position: relative;
    /* Add position: relative */
    z-index: 1;
    /* Add z-index: 1 */
}

li.active::before {
    width: 0;
}
</style>
