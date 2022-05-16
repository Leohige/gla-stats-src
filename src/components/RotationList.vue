<template>
    <div class="relative shadow-md sm:rounded-lg">
        <div id="revue-embed" class="p-4 my-8 bg-white rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h3 class="mb-5 text-xl font-medium text-gray-900 dark:text-white">Pesquisar</h3>
        
            <div class="grid grid-cols-3 gap-4 items-end mb-3">
                <div class="grid grid-cols-2 col-span-1 gap-4">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input datepicker datepicker-autohide datepicker-format="dd/mm/yyyy" type="text" name="start_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Data inicial">
                    </div>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input datepicker datepicker-autohide datepicker-format="dd/mm/yyyy" type="text" name="end_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Data final">
                    </div>
                </div>
                
                <div class="col-span-2 relative">
                    <div class="relative w-full">
                        <input type="search" @keyup.enter="search()" v-model="search_character_name" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Digite o nome de um personagem..." required="">
                        <button type="button" @click="search()" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                </div>
            </div>

            <div class="mt-5 text-md font-medium text-gray-500 revue-form-footer dark:text-gray-300">Exibindo {{ total }} resultados.</div>
        </div>

        <div v-show="total" class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            Baú 1
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Baú 2
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Especial
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Data
                        </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                        <RotationRow 
                            v-for="weekly_rotation in weekly_rotations_paginated"
                            :key="weekly_rotation.id" 
                            :uuid="weekly_rotation.id"
                            :first_chest="weekly_rotation.first_chest"
                            :second_chest="weekly_rotation.second_chest"
                            :special_chest="weekly_rotation.special_chest"
                            :date="weekly_rotation.date"
                            :facebook_post="weekly_rotation.facebook_post" />
                </tbody>
            </table>
        </div>

        <div v-show="total" class="bg-white rounded-bl-lg rounded-br-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-700 dark:border-gray-700 flex justify-center">
            <Pagination :current="current_page" :total="total" :perPage="5" @page-changed="pageChanged($event)"/>
        </div>
    </div>
</template>

<script>
import RotationRow from "./RotationRow.vue"
import Pagination from "./Pagination.vue"
import weekly_rotations_data from '../data/weekly_rotations.json'

Object.freeze(weekly_rotations_data)

export default {
    components: {
        RotationRow,
        Pagination
    },
    data() {
        return {
            show_results: false,
            current_page: 1,
            start_date: '',
            end_date: '',
            search_character_name: '',
            weekly_rotations_filtered: [],
            weekly_rotations_paginated: [],
            weekly_rotations_data
        }
    },
    methods: {
        pageChanged(page) {
            this.current_page = page
            this.paginate(this.current_page)
        },
        paginate(page_number) {
            this.weekly_rotations_paginated = this.weekly_rotations_filtered.slice((page_number - 1) * 5, page_number * 5);
        },
        search() {
            let start_date = document.querySelector("input[name=start_date]").value
            let end_date = document.querySelector("input[name=end_date]").value
            let date_search = (start_date && end_date)

            if (!this.search_character_name) {
                this.weekly_rotations_filtered = this.weekly_rotations_data
                this.show_results = false;
                if (!date_search) {
                    return;
                }
            }

            this.weekly_rotations_filtered = this.weekly_rotations_data.filter((weekly_rotation) => {
                let found_character_by_name = true;

                if (this.search_character_name) {
                    found_character_by_name =   weekly_rotation.first_chest.join(' ').toLowerCase().includes(this.search_character_name.toLowerCase()) ||
                                                    weekly_rotation.second_chest.join(' ').toLowerCase().includes(this.search_character_name.toLowerCase()) ||
                                                    weekly_rotation.special_chest.join(' ').toLowerCase().includes(this.search_character_name.toLowerCase())
                }
                
                let found_character_by_date = true;
                if (date_search) {
                    found_character_by_date = this.checkDataInRange(start_date, end_date, weekly_rotation.date)
                }

                return found_character_by_name && found_character_by_date
            })

            this.show_results = true;
            this.pageChanged(1)
        },
        checkDataInRange(start_date, end_date, check_date) {
            let date = this.createDate(check_date).getTime()
            let start = this.createDate(start_date).getTime()
            let end = this.createDate(end_date).getTime()

            return (date >= start && date <= end);
        },
        createDate(date) {
            let splited_date = date.split('/')
            return new Date(splited_date[2], splited_date[1], splited_date[0])
        }
    },
    computed: {
        total() {
            return this.weekly_rotations_filtered.length
        }
    },
    mounted() {
        this.search()
        this.pageChanged(1)
    }
}
</script>

