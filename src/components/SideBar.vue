<template>
    <nav class="py-5 navSide" :class="{ 'collapsed': isCollapsed }">
        <div class="w-auto h-[10vh] flex items-center relative">
            <div class="w-auto transition-all" :class="{ 'hidden': isCollapsed }">
                <img src="../assets/Images/logo.png" alt="Bulsu Logo" class="w-[6vw]">
            </div>
            <span class="w-auto text-[1.5vw] font-bold  text-red-600 transition-all"
                :class="{ 'hidden': isCollapsed }">
                BulSU - RMO
            </span>
            <button @click="toggleSideBar"
                class="w-[2vw] h-[2vw] bg-white shadow-md rounded-full absolute right-[-1vw] flex items-center justify-center">
                <icon :icon="isCollapsed ? 'chevron-right' : 'chevron-left'" class="text-sm text-red-600   " />
            </button>

        </div>
        <ul class="w-full flex flex-col items-center mt-5" :class="{ 'hidden': isCollapsed }">
            <Links link="/admin/dashboard" text="Dashboard" />
            <Links link="/admin/researchProposal" text="Research Proposal" />
            <Links link="/admin/createProposal" text="Create Proposal" />
        </ul>
    </nav>
</template>

<script setup>
import Links from './SideBarComponent/Links.vue';

import { ref } from 'vue';

let isCollapsed = ref(false)

const toggleSideBar = () => {
    isCollapsed.value = !isCollapsed.value
}
</script>


