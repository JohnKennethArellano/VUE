<template>
    <div class="mainContainer">
        <div class="navigationBar">
            <NavigationBar/>
        </div>
        <div class="sidebar">
            <SideBar />
        </div>
        <div class="w-full h-full overflow-y-scroll main p-3">
            <TableVue>
                <thead class="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subjects
                        </th>
                        <th scope="col" class="px-6 py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="student in students"
                        :key="student.id">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ student.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ student.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ student.address.street }}, {{ student.address.city }}, {{ student.address.state }}, {{
                                student.address.zip }}
                        </td>
                        <td class="px-6 py-4">
                            {{ student.subjects.join(', ') }}
                        </td>
                        <td class="px-6 py-4 grid place-content-center">
                            <icon icon="eye" class="hover:text-green-400 cursor-pointer transition-all" />
                        </td>
                    </tr>
                </tbody>
            </TableVue>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import SideBar from '../../components/SideBar.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import TableVue from "../../components/TableComponents/Table.vue";
const students = ref([]);

const getData = async () => {
    try {
        const response = await axios.post('https://run.mocky.io/v3/ca19db11-43b5-4121-a179-1128b17b63b3');
        students.value = response.data.students;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
onMounted(getData)

</script>
