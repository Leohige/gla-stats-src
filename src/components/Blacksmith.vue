<template>
    <div class="relative shadow-md sm:rounded-lg">
        <div class="relative overflow-x-auto rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-7 text-center">
                            <input type="checkbox" v-model="check_all" @change="toggleAllItems()" class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 dark:focus:ring-0 dark:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Item
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Nível Atual
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Nível Desejado
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Tentativas
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- head -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- checkbox -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <input type="checkbox" v-model="head.active" class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 dark:focus:ring-0 dark:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                        </td>

                        <!-- slot -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Cabeça
                            </p>
                        </td>

                        <!-- level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="head.current_level == 0 ? head.current_level = 12 : head.current_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="head.current_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="head.current_level == 12 ? head.current_level = 0 : head.current_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- desired level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="head.desired_level == 0 ? head.desired_level = 12 : head.desired_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="head.desired_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="head.desired_level == 12 ? head.desired_level = 0 : head.desired_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- tries -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="head.tries == 0 ? head.tries = 12 : head.tries -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="head.tries" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="head.tries == 12 ? head.tries = 0 : head.tries += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- body -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- checkbox -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <input type="checkbox" v-model="body.active" class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 dark:focus:ring-0 dark:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                        </td>

                        <!-- slot -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Corpo
                            </p>
                        </td>

                        <!-- level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="body.current_level == 0 ? body.current_level = 12 : body.current_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="body.current_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="body.current_level == 12 ? body.current_level = 0 : body.current_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- desired level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="body.desired_level == 0 ? body.desired_level = 12 : body.desired_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="body.desired_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="body.desired_level == 12 ? body.desired_level = 0 : body.desired_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- tries -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="body.tries == 0 ? body.tries = 12 : body.tries -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="body.tries" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="body.tries == 12 ? body.tries = 0 : body.tries += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- legs -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- checkbox -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <input type="checkbox" v-model="legs.active" class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 dark:focus:ring-0 dark:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                        </td>

                        <!-- slot -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Calça
                            </p>
                        </td>

                        <!-- level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="legs.current_level == 0 ? legs.current_level = 12 : legs.current_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="legs.current_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="legs.current_level == 12 ? legs.current_level = 0 : legs.current_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- desired level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="legs.desired_level == 0 ? legs.desired_level = 12 : legs.desired_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="legs.desired_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="legs.desired_level == 12 ? legs.desired_level = 0 : legs.desired_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- tries -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="legs.tries == 0 ? legs.tries = 12 : legs.tries -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="legs.tries" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="legs.tries == 12 ? legs.tries = 0 : legs.tries += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- emblem -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- checkbox -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <input type="checkbox" v-model="emblem.active" class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 dark:focus:ring-0 dark:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                        </td>

                        <!-- slot -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Emblema
                            </p>
                        </td>

                        <!-- level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="emblem.current_level == 0 ? emblem.current_level = 12 : emblem.current_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="emblem.current_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="emblem.current_level == 12 ? emblem.current_level = 0 : emblem.current_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- desired level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="emblem.desired_level == 0 ? emblem.desired_level = 12 : emblem.desired_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="emblem.desired_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="emblem.desired_level == 12 ? emblem.desired_level = 0 : emblem.desired_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- tries -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="emblem.tries == 0 ? emblem.tries = 12 : emblem.tries -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="emblem.tries" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="emblem.tries == 12 ? emblem.tries = 0 : emblem.tries += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- weapon -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- checkbox -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <input type="checkbox" v-model="weapon.active" class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 dark:focus:ring-0 dark:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                        </td>

                        <!-- slot -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Arma
                            </p>
                        </td>

                        <!-- level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="weapon.current_level == 0 ? weapon.current_level = 12 : weapon.current_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="weapon.current_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="weapon.current_level == 12 ? weapon.current_level = 0 : weapon.current_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>


                        <!-- desired level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="weapon.desired_level == 0 ? weapon.desired_level = 12 : weapon.desired_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="weapon.desired_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="weapon.desired_level == 12 ? weapon.desired_level = 0 : weapon.desired_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- tries -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="weapon.tries == 0 ? weapon.tries = 12 : weapon.tries -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="weapon.tries" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="weapon.tries == 12 ? weapon.tries = 0 : weapon.tries += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- accessory -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- checkbox -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <input type="checkbox" v-model="accessory.active" class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 dark:focus:ring-0 dark:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                        </td>

                        <!-- slot -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Acessório
                            </p>
                        </td>

                        <!-- level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="accessory.current_level == 0 ? accessory.current_level = 12 : accessory.current_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="accessory.current_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="accessory.current_level == 12 ? accessory.current_level = 0 : accessory.current_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- desired level -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="accessory.desired_level == 0 ? accessory.desired_level = 12 : accessory.desired_level -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="accessory.desired_level" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="accessory.desired_level == 12 ? accessory.desired_level = 0 : accessory.desired_level += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- tries -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="accessory.tries == 0 ? accessory.tries = 12 : accessory.tries -= 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[50px]">
                                    <input type="text" v-model="accessory.tries" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="accessory.tries == 12 ? accessory.tries = 0 : accessory.tries += 1" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="relative shadow-md sm:rounded-lg mt-10">
        <div class="relative overflow-x-auto rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-7 text-center">
                            Pedra
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Mínimo
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Máximo
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Valor
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Total Mínimo
                        </th>
                        <th scope="col" class="px-6 py-7 text-center">
                            Total Máximo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- sky -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- item -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Céu
                            </p>
                        </td>

                        <!-- min -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-green-400">
                                {{ minSky }}
                            </p>
                        </td>

                        <!-- max -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-red-400">
                                {{ maxSky }}
                            </p>
                        </td>

                        <!-- value -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="prices.sky == 0 ? prices.sky = 20000 : prices.sky -= 500" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[80px]">
                                    <input type="text" v-model="prices.sky" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="prices.sky == 20000 ? prices.sky = 0 : prices.sky += 500" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- total min -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-green-400">
                                {{ minSkyPrice.toLocaleString('pt-BR') }}
                            </p>
                        </td>

                        <!-- total max -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-red-400">
                                {{ maxSkyPrice.toLocaleString('pt-BR') }}
                            </p>
                        </td>
                    </tr>

                    <!-- wisdom -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- item -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Sábio
                            </p>
                        </td>

                        <!-- min -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-green-400">
                                {{ minWisdom }}
                            </p>
                        </td>

                        <!-- max -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-red-400">
                                {{ maxWisdom }}
                            </p>
                        </td>

                        <!-- value -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="prices.wisdom == 0 ? prices.wisdom = 20000 : prices.wisdom -= 500" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[80px]">
                                    <input type="text" v-model="prices.wisdom" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="prices.wisdom == 20000 ? prices.wisdom = 0 : prices.wisdom += 500" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- total min -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-green-400">
                                {{ minWisdomPrice.toLocaleString('pt-BR') }}
                            </p>
                        </td>

                        <!-- total max -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-red-400">
                                {{ maxWisdomPrice.toLocaleString('pt-BR') }}
                            </p>
                        </td>
                    </tr>

                    <!-- carmesim -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <!-- item -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-gray-300">
                                Carmesim
                            </p>
                        </td>

                        <!-- min -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-green-400">
                                {{ minCarmesim }}
                            </p>
                        </td>

                        <!-- max -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-red-400">
                                {{ maxCarmesim }}
                            </p>
                        </td>

                        <!-- value -->
                        <td scope="row" class="px-6 py-4">
                            <div class="flex justify-center">
                                <button type="submit" @click="prices.carmesim == 0 ? prices.carmesim = 20000 : prices.carmesim -= 500" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-l-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <div class="relative w-[80px]">
                                    <input type="text" v-model="prices.carmesim" class="text-center block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required="">
                                </div>

                                <button type="submit" @click="prices.carmesim == 20000 ? prices.carmesim = 0 : prices.carmesim += 500" class="flex-shrink-0 inline-flex items-center p-2.5 text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>

                        <!-- total min -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-green-400">
                                {{ minCarmesimPrice.toLocaleString('pt-BR') }}
                            </p>
                        </td>

                        <!-- total max -->
                        <td scope="row" class="px-6 py-4 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-red-400">
                                {{ maxCarmesimPrice.toLocaleString('pt-BR') }}
                            </p>
                        </td>
                    </tr>

                    <!-- total -->
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" colspan="4" class="px-6 py-7 text-center"></td>

                        <!-- total min -->
                        <td scope="row" class="px-6 py-7 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-green-400">
                                {{ minCarmesimPrice.toLocaleString('pt-BR') }}
                            </p>
                        </td>

                        <!-- total max -->
                        <td scope="row" class="px-6 py-7 text-center">
                            <p class="text-gray-800 text-md font-medium dark:text-red-400">
                                {{ maxCarmesimPrice.toLocaleString('pt-BR') }}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>


export default {
    data() {
        return {
            check_all: true,
            head: {
                active: true,
                current_level: 0,
                desired_level: 0,
                tries: 0,
                stones: {
                    min: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    },
                    max: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    }
                }
            },
            body: {
                active: true,
                current_level: 0,
                desired_level: 0,
                tries: 0,
                stones: {
                    min: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    },
                    max: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    }
                }
            },
            legs: {
                active: true,
                current_level: 0,
                desired_level: 0,
                tries: 0,
                stones: {
                    min: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    },
                    max: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    }
                }
            },
            emblem: {
                active: true,
                current_level: 0,
                desired_level: 0,
                tries: 0,
                stones: {
                    min: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    },
                    max: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    }
                }
            },
            weapon: {
                active: true,
                current_level: 0,
                desired_level: 0,
                tries: 0,
                stones: {
                    min: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    },
                    max: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    }
                }
            },
            accessory: {
                active: true,
                current_level: 0,
                desired_level: 0,
                tries: 0,
                stones: {
                    min: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    },
                    max: {
                        sky: 0,
                        wisdom: 0,
                        carmesim: 0
                    }
                }
            },
            tries_per_level: {
                '1': 3,
                '2': 4,
                '3': 5,
                '4': 6,
                '5': 5,
                '6': 6,
                '7': 8,
                '8': 11,
                '9': 11,
                '10': 12,
                '11': 13,
                '12': 15,
            },
            stone_min_level: {
                'sky': 0,
                'wisdom': 5,
                'carmesim': 9
            },
            stone_max_level: {
                'sky': 4,
                'wisdom': 8,
                'carmesim': 12
            },
            prices: {
                sky: 0,
                wisdom: 0,
                carmesim: 0
            }
        }
    },
    computed: {
        minSky() {
            return this.head.stones.min.sky + this.legs.stones.min.sky + this.emblem.stones.min.sky + this.body.stones.min.sky + this.weapon.stones.min.sky + this.accessory.stones.min.sky;
        },
        minWisdom() {
            return this.head.stones.min.wisdom + this.legs.stones.min.wisdom + this.emblem.stones.min.wisdom + this.body.stones.min.wisdom + this.weapon.stones.min.wisdom + this.accessory.stones.min.wisdom;
        },
        minCarmesim() {
            return this.head.stones.min.carmesim + this.legs.stones.min.carmesim + this.emblem.stones.min.carmesim + this.body.stones.min.carmesim + this.weapon.stones.min.carmesim + this.accessory.stones.min.carmesim;
        },
        minSkyPrice() {
            return this.minSky * this.prices.sky;
        },
        minWisdomPrice() {
            return this.minWisdom * this.prices.wisdom;
        },
        minCarmesimPrice() {
            return this.minCarmesim * this.prices.carmesim;
        },
        minTotal() {
            return (this.minSkyPrice + this.minWisdomPrice + this.minCarmesimPrice);
        },

        maxSky() {
            return this.head.stones.max.sky + this.legs.stones.max.sky + this.emblem.stones.max.sky + this.body.stones.max.sky + this.weapon.stones.max.sky + this.accessory.stones.max.sky;
        },
        maxWisdom() {
            return this.head.stones.max.wisdom + this.legs.stones.max.wisdom + this.emblem.stones.max.wisdom + this.body.stones.max.wisdom + this.weapon.stones.max.wisdom + this.accessory.stones.max.wisdom;
        },
        maxCarmesim() {
            return this.head.stones.max.carmesim + this.legs.stones.max.carmesim + this.emblem.stones.max.carmesim + this.body.stones.max.carmesim + this.weapon.stones.max.carmesim + this.accessory.stones.max.carmesim;
        },
        maxSkyPrice() {
            return this.maxSky * this.prices.sky;
        },
        maxWisdomPrice() {
            return this.maxWisdom * this.prices.wisdom;
        },
        maxCarmesimPrice() {
            return this.maxCarmesim * this.prices.carmesim;
        },
        maxTotal() {
            return (this.maxSkyPrice + this.maxWisdomPrice + this.maxCarmesimPrice);
        }
    },
    methods: {
        reset: function() {
            this.head.stones.min.sky = 0;
            this.head.stones.min.wisdom = 0;
            this.head.stones.min.carmesim = 0;
            this.legs.stones.min.sky = 0;
            this.legs.stones.min.wisdom = 0;
            this.legs.stones.min.carmesim = 0;
            this.emblem.stones.min.sky = 0;
            this.emblem.stones.min.wisdom = 0;
            this.emblem.stones.min.carmesim = 0;
            this.body.stones.min.sky = 0;
            this.body.stones.min.wisdom = 0;
            this.body.stones.min.carmesim = 0;
            this.weapon.stones.min.sky = 0;
            this.weapon.stones.min.wisdom = 0;
            this.weapon.stones.min.carmesim = 0;
            this.accessory.stones.min.sky = 0;
            this.accessory.stones.min.wisdom = 0;
            this.accessory.stones.min.carmesim = 0;

            this.head.stones.max.sky = 0;
            this.head.stones.max.wisdom = 0;
            this.head.stones.max.carmesim = 0;
            this.legs.stones.max.sky = 0;
            this.legs.stones.max.wisdom = 0;
            this.legs.stones.max.carmesim = 0;
            this.emblem.stones.max.sky = 0;
            this.emblem.stones.max.wisdom = 0;
            this.emblem.stones.max.carmesim = 0;
            this.body.stones.max.sky = 0;
            this.body.stones.max.wisdom = 0;
            this.body.stones.max.carmesim = 0;
            this.weapon.stones.max.sky = 0;
            this.weapon.stones.max.wisdom = 0;
            this.weapon.stones.max.carmesim = 0;
            this.accessory.stones.max.sky = 0;
            this.accessory.stones.max.wisdom = 0;
            this.accessory.stones.max.carmesim = 0;
        },
        calcItemStones: function(type, stone, value) {
            let current_level = Number(type.current_level) + 1;
            let desired_level = Number(type.desired_level);
            let current_tries = Number(type.tries);
            type.stones.min[stone] = 0;
            type.stones.max[stone] = 0;

            if (desired_level < this.stone_min_level[stone]) {
                return;
            }

            if (current_level < this.stone_min_level[stone]) {
                current_level = this.stone_min_level[stone];
                current_tries = 0;
            }

            for (let i = current_level; i <= desired_level; i++) {
                if (i > this.stone_max_level[stone]) {
                    return;
                }

                type.stones.min[stone] += value;
                type.stones.max[stone] += value * (this.tries_per_level[i] - current_tries);
                current_tries = 0;

                if (type.stones.max[stone] < 0) {
                    type.stones.max[stone] = 0;
                }
            }
        },
        computeStone: function() {
            this.reset()

            if (this.head.active) {
                this.calcItemStones(this.head, 'sky', 2);
                this.calcItemStones(this.head, 'wisdom', 2);
                this.calcItemStones(this.head, 'carmesim', 2);
            }

            if (this.legs.active) {
                this.calcItemStones(this.legs, 'sky', 2);
                this.calcItemStones(this.legs, 'wisdom', 2);
                this.calcItemStones(this.legs, 'carmesim', 2);
            }

            if (this.emblem.active) {
                this.calcItemStones(this.emblem, 'sky', 2);
                this.calcItemStones(this.emblem, 'wisdom', 2);
                this.calcItemStones(this.emblem, 'carmesim', 2);
            }

            if (this.body.active) {
                this.calcItemStones(this.body, 'sky', 4);
                this.calcItemStones(this.body, 'wisdom', 4);
                this.calcItemStones(this.body, 'carmesim', 4);
            }

            if (this.weapon.active) {
                this.calcItemStones(this.weapon, 'sky', 4);
                this.calcItemStones(this.weapon, 'wisdom', 4);
                this.calcItemStones(this.weapon, 'carmesim', 4);
            }

            if (this.accessory.active) {
                this.calcItemStones(this.accessory, 'sky', 8);
                this.calcItemStones(this.accessory, 'wisdom', 8);
                this.calcItemStones(this.accessory, 'carmesim', 8);
            }

            if (!this.check_all && this.head.active && this.body.active && this.legs.active && this.emblem.active && this.weapon.active && this.accessory.active) {
                this.check_all = true
            }
        },
        checkInputValue(input_type, input_name, input_value, min, max) {
            this[input_type][input_name] = Number(input_value);
            this[input_type][input_name] = input_value | min;
            this[input_type][input_name] = this[input_type][input_name] < min ? min : this[input_type][input_name] > max ? max : this[input_type][input_name];
        },
        enableAllItems() {
            this.head.active = true;
            this.body.active = true;
            this.legs.active = true;
            this.emblem.active = true;
            this.weapon.active = true;
            this.accessory.active = true;
        },
        disableAllItems() {
            this.head.active = false;
            this.body.active = false;
            this.legs.active = false;
            this.emblem.active = false;
            this.weapon.active = false;
            this.accessory.active = false;
        },
        toggleAllItems() {
            this.check_all ? this.enableAllItems() : this.disableAllItems()
        },
        checkDisableAllCheckbox(active) {
            if (!active && this.check_all) {
                this.check_all = false
            }
        }
    },
    watch: {
        'head.active'(active) { this.checkDisableAllCheckbox(active); this.computeStone() },
        'head.current_level'() { this.checkInputValue('head', 'current_level', this.head.current_level, 0, 12); this.computeStone() },
        'head.desired_level'() { this.checkInputValue('head', 'desired_level', this.head.desired_level, 0, 12); this.computeStone() },
        'head.tries'() { this.checkInputValue('head', 'tries', this.head.tries, 0, 15); this.computeStone() },
        'legs.active'(active) { this.checkDisableAllCheckbox(active); this.computeStone() },
        'legs.current_level'() { this.checkInputValue('legs', 'current_level', this.legs.current_level, 0, 12); this.computeStone() },
        'legs.desired_level'() { this.checkInputValue('legs', 'desired_level', this.legs.desired_level, 0, 12); this.computeStone() },
        'legs.tries'() { this.checkInputValue('legs', 'tries', this.legs.tries, 0, 15); this.computeStone() },
        'emblem.active'(active) { this.checkDisableAllCheckbox(active); this.computeStone() },
        'emblem.current_level'() { this.checkInputValue('emblem', 'current_level', this.emblem.current_level, 0, 12); this.computeStone() },
        'emblem.desired_level'() { this.checkInputValue('emblem', 'desired_level', this.emblem.desired_level, 0, 12); this.computeStone() },
        'emblem.tries'() { this.checkInputValue('emblem', 'tries', this.emblem.tries, 0, 15); this.computeStone() },
        'body.active'(active) { this.checkDisableAllCheckbox(active); this.computeStone() },
        'body.current_level'() { this.checkInputValue('body', 'current_level', this.body.current_level, 0, 12); this.computeStone() },
        'body.desired_level'() { this.checkInputValue('body', 'desired_level', this.body.desired_level, 0, 12); this.computeStone() },
        'body.tries'() { this.checkInputValue('body', 'tries', this.body.tries, 0, 15); this.computeStone() },
        'weapon.active'(active) { this.checkDisableAllCheckbox(active); this.computeStone() },
        'weapon.current_level'() { this.checkInputValue('weapon', 'current_level', this.weapon.current_level, 0, 12); this.computeStone() },
        'weapon.desired_level'() { this.checkInputValue('weapon', 'desired_level', this.weapon.desired_level, 0, 12); this.computeStone() },
        'weapon.tries'() { this.checkInputValue('weapon', 'tries', this.weapon.tries, 0, 15); this.computeStone() },
        'accessory.active'(active) { this.checkDisableAllCheckbox(active); this.computeStone() },
        'accessory.current_level'() { this.checkInputValue('accessory', 'current_level', this.accessory.current_level, 0, 12); this.computeStone() },
        'accessory.desired_level'() { this.checkInputValue('accessory', 'desired_level', this.accessory.desired_level, 0, 12); this.computeStone() },
        'accessory.tries'() { this.checkInputValue('accessory', 'tries', this.accessory.tries, 0, 15); this.computeStone() }
    },
    setup() {
        
    },
}
</script>

