<template>
    <FormContainer @submit="HandleInput" formTitle="Login to your account">
        <slot />
        <div class="mb-4 flex flex-col">
            <Label text="Employee IDs" for="email" />
            <InputField id="email" placeholder="Enter email" v-model="email" :error="errors.email" />
            <ErrorMessage :error="errors.email" :msg="message.email" />
        </div>
        <div class="mb-5 flex flex-col">
            <div class="h-auto w-full  flex justify-end">
                <Label text="Password" for="password" />
                <span
                    class="w-auto text-sm font-bold  text-red-600 cursor-pointer hover:text-red-400 transition-all">Forgot?</span>
            </div>
            <PasswordField id="password" placeholder="Enter password" v-model="password" :error="errors.password" />
            <ErrorMessage :error="errors.password" :msg="message.password" />
        </div>
        <Button type="submit" text="Submit" />
    </FormContainer>
</template>

<script setup>

import { ref } from 'vue'
import axios from 'axios'
// import router from '@/router'
// import Swal from 'sweetalert2'
// Form Components
import FormContainer from '@/components/FormComponents/FormContainer.vue'
import PasswordField from '@/components/FormComponents/PasswordField.vue'
import InputField from '@/components/FormComponents/InputField.vue'
import Label from '@/components/FormComponents/Labels.vue'
import Button from '@/components/FormComponents/Buttons.vue'
import ErrorMessage from './FormComponents/ErrorMessage.vue'
import router from '@/router'


const email = ref('')
const password = ref('')
const errors = ref({
    email: true,
    password: true,
})
const message = ref({
    email: '',
    password: '',
})
const HandleInput = async (e) => {
    e.preventDefault();
    let isValid = true;
    if (email.value.trim() == "") {
        errors.value.email = false;
        message.value.email = "Email required";
        isValid = false
    } else {
        errors.value.email = true;
        message.value.email = "";
    }
    if (password.value.trim() == "") {
        errors.value.password = false;
        message.value.password = "Password required";
        isValid = false
    } else {
        errors.value.password = true;
        message.value.password = "";
    }

    if (isValid) {
        try {
            router.push({ name: 'adminDashboard' })
            // const response = await axios.post('http://localhost:8000/api/login', {
            //     email: email.value,
            //     password: password.value,
            // })
            // localStorage.setItem('token', response.data.token.plainTextToken)
            // // Swal.fire({
            // //     title: "Login Successful",
            // //     icon: "success",
            // //     timer: 1500,
            // //     showConfirmButton: false
            // // }).then(() => {
            // //     router.push({ name: 'adminDashboard' })
            // // })
        } catch (error) {

        }
    }
}
</script>
