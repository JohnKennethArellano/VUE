<template>
    <FormContainer @submit="HandleInput" formTitle="Create your account">
        <div class="w-auto h-auto flex gap-5">
            <div class="w-auto">
                <div class="mb-2 flex flex-col">
                    <Label text="First Name" for="fName" />
                    <InputField id="fName" placeholder="Enter your first name" v-model="formData.fName"
                        :error="errors.fName" />
                    <ErrorMessage :error="errors.fName" :msg="message.fName" />
                </div>
                <div class="mb-2 flex flex-col">
                    <Label text="Password" for="password" />
                    <InputField id="password" placeholder="Password" v-model="formData.password" :error="errors.password" />
                    <ErrorMessage :error="errors.password" :msg="message.password" />
                </div>
                <div class="mb-2 flex flex-col">
                    <Label text="Department / Campus" for="department" />
                    <InputField id="department" placeholder="Enter your department" v-model="formData.department"
                        :error="errors.department" />
                    <ErrorMessage :error="errors.department" :msg="message.department" />
                </div>
            </div>
            <div class="w-auto">
                <div class="mb-2 flex flex-col">
                    <Label text="Last Name" for="lName" />
                    <InputField type="lName" id="lName" placeholder="Enter your last name" v-model="formData.lName"
                        :error="errors.lName" />
                    <ErrorMessage :error="errors.lName" :msg="message.lName" />
                </div>
                <div class="mb-2 flex flex-col">
                    <Label text="Confirm Password" for="password_confirmation" />
                    <InputField type="password" id="password_confirmation" placeholder="Re-enter your password"
                        v-model="formData.password_confirmation" :error="errors.confirmPassword" />
                    <ErrorMessage :error="errors.confirmPassword" :msg="message.confirmPassword" />
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center mt-4">
            <Button type="submit" text="Submit" />
        </div>
    </FormContainer>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
// Form Components
import FormContainer from '@/components/FormComponents/FormContainer.vue';
import InputField from '@/components/FormComponents/InputField.vue';
import Label from '@/components/FormComponents/Labels.vue';
import Button from '@/components/FormComponents/Buttons.vue';
import ErrorMessage from './FormComponents/ErrorMessage.vue';

const formData = {
    lName: ref(''),
    password: ref(''),
    fName: ref(''),
    department: ref(''),
    password_confirmation: ref('')
};

const errors = ref({
    lName: true,
    fName: true,
    department: true,
    password: true,
    confirmPassword: true,
});

const message = ref({
    lName: '',
    fName: '',
    password: '',
    department: '',
    confirmPassword: ''
});

const HandleInput = async (e) => {
    e.preventDefault();

    // Validation logic
    if (formData.fName.value == '') {
        errors.value.fName = false;
        message.value.fName = "First name required";
    } else {
        errors.value.fName = true;
        message.value.fName = "";
    }

    if (formData.lName.value == '') {
        errors.value.lName = false;
        message.value.lName = "Last name required";
    } else {
        errors.value.lName = true;
        message.value.lName = "";
    }

    if (formData.department.value == '') {
        errors.value.department = false;
        message.value.department = "Department required";
    } else {
        errors.value.department = true;
        message.value.department = "";
    }

    if (formData.password.value == '') {
        errors.value.password = false;
        message.value.password = "Password required";
    } else {
        errors.value.password = true;
        message.value.password = "";
    }

    if (formData.password_confirmation.value == '') {
        errors.value.confirmPassword = false;
        message.value.confirmPassword = "Password confirmation required";
    } else if (formData.password_confirmation.value.trim() != formData.password.value.trim()) {
        errors.value.confirmPassword = false;
        message.value.confirmPassword = "Password does not match";
    } else {
        errors.value.confirmPassword = true;
        message.value.confirmPassword = "";
    }

    if (Object.values(errors.value).every(value => value)) {
        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                email: formData.email,
                password: formData.password,
                name: formData.fullName,
                password_confirmation: formData.password_confirmation
            });
            console.log(response.data);
        } catch (error) {
            if (error.response.data.datas.password) {
                errors.value.confirmPassword = false;
                message.value.confirmPassword = error.response.data.datas.password;
            }
        }
    }
};  
</script>
