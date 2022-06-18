<template>
    <main class="flex-grow lg:px-8 px-4 py-6 sm:px-0">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 px-4 py-6 sm:px-0">
            <div class="relative sm:rounded-lg">
                <div class="p-4 mb-8 mt-2 bg-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h3 class="mb-5 text-xl font-medium text-gray-900 dark:text-gray-300">Pesquisar</h3>

                    <div class="grid md:grid-cols-3 gap-4 items-end mb-3">
                        <div class="grid sm:grid-cols-1 col-span-1 gap-4">
                            <div class="relative">
                                <select class="block p-2 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="all" selected>Tudo</option>
                                    <option value="US">Item Genérico</option>
                                    <option value="CA">Cabeça</option>
                                    <option value="FR">Corpo</option>
                                    <option value="DE">Pernas</option>
                                    <option value="DE">Arma</option>
                                    <option value="DE">Acessório</option>
                                    <option value="DE">Emblema</option>
                                    <option value="DE">Visual do Navio</option>
                                    <option value="DE">Roupa</option>
                                    <option value="DE">Navegação</option>
                                    <option value="DE">Consumível</option>
                                    <option value="DE">Icone de Perfil</option>
                                    <option value="DE">Gema</option>
                                    <option value="DE">Den Den Mushi</option>
                                    <option value="DE">Cristal</option>
                                    <option value="DE">Pedra do Despertar</option>
                                </select>                                
                            </div>
                        </div>

                        <div class="md:col-span-2 relative">
                            <div class="relative w-full">
                                <input
                                    type="search"
                                    @keyup.enter="search()"
                                    v-model="search_item_name"
                                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:border-blue-500"
                                    placeholder="Digite o nome de um item..."
                                    required=""
                                />
                                <button
                                    type="button"
                                    @click="search()"
                                    class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5 text-md font-medium text-gray-500 revue-form-footer dark:text-gray-300">Exibindo {{ total }} resultados.</div>
                </div>

                <div v-show="total" class="relative overflow-x-auto rounded-tr-lg rounded-tl-lg border-l border-r dark:border-l-0 dark:border-r-0">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-md text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-7 text-center">
                                    Nome
                                </th>
                                <th scope="col" class="px-6 py-7 text-center">
                                    
                                </th>
                                <th scope="col" class="px-6 py-7 text-center">
                                    Categoria
                                </th>
                                <th scope="col" class="px-6 py-7 text-center">
                                    Classe
                                </th>
                                <th scope="col" class="px-6 py-7 text-center">
                                    Level
                                </th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <ItemRow
                                v-for="item in item_list_paginated"
                                :key="item.slug"
                                :item="item"
                            />
                        </tbody>
                    </table>
                </div>

                <div v-show="total" class="bg-white rounded-bl-lg rounded-br-lg shadow-md p-6 dark:bg-gray-700 dark:border-gray-700 flex justify-center">
                    <Pagination :current="current_page" :total="total" :perPage="5" @page-changed="pageChanged($event)" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ItemRow from "@/components/pages/Items/ItemRow.vue"
import Pagination from "@/components/ui/Pagination.vue"
import item_list_data from '@/data/item_list.json'

Object.freeze(item_list_data)

export default {
    components: {
        ItemRow,
        Pagination,
        ItemRow
    },
    data() {
        return {
            show_results: false,
            current_page: 1,
            start_date: '',
            end_date: '',
            search_item_name: '',
            item_list_filtered: [],
            item_list_paginated: [],
            item_list_data
        }
    },
    methods: {
        pageChanged(page) {
            this.current_page = page
            this.paginate(this.current_page)
        },
        paginate(page_number) {
            this.item_list_paginated = Object.freeze(this.item_list_filtered.slice((page_number - 1) * 5, page_number * 5));
        },
        search() {
            if (!this.search_item_name) {
                this.item_list_filtered = this.item_list_data
                this.show_results = false;
            }

            this.item_list_filtered = this.item_list_data.filter((item) => {
                let found_item_by_name = true;

                if (this.search_item_name) {
                    found_item_by_name =   item.name.toLowerCase().includes(this.search_item_name.toLowerCase())
                }

                return found_item_by_name
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
            return this.item_list_filtered.length
        }
    },
    mounted() {
        this.search()
        this.pageChanged(1)
    }
}
</script>
