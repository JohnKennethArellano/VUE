<script setup>
import { ref } from 'vue';
import LogInForm from '@/components/LogInForm.vue';
import Register from '@/components/Register.vue';
const link = ref(true);
const linkMessage = ref('Sign Up');
const linkMessage1 = ref("Don't Have An Account ?");
const FormChange = () => {
    link.value = !link.value;
    linkMessage.value = link.value ? 'Sign Up' : 'Log In';
    linkMessage1.value = link.value ? "Don't Have An Account ?" : "Already have an account ?";
}
</script>

<template>
    <div class="flex-col">
        <div class="w-full flex justify-center">
            <img src="../assets/Images/logo.png" alt="Bulsu Logo" class="w-[12vw]">
        </div>
        <div class="w-full text-center">
            <p class="text-md mb-1  ">BULACAN STATE UNIVERSITY</p>
            <p class="text-[1.3vw] font-bold mb-3">RESEARCH MANAGEMENT OFFICE</p>
        </div>
        <div class="w-auto h-auto px-[5vw] py-[2vw] flex flex-col align-middle justify-center shadow-lg rounded">
            <LogInForm v-if="link" />
            <Register v-else />
            <span class="text-center mt-4" @click="FormChange"><span class="text-sm text-gray-400">{{ linkMessage1
            }}</span><span
                    class="pl-2 text-sm font-bold  text-red-600 cursor-pointer hover:text-red-400 transition-all">{{
                        linkMessage }}</span></span>
        </div>

    </div>
</template>
