<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <!-- chest 1 session -->
        <td scope="row" class="px-6 py-4">
            <div class="flex -space-x-7 justify-center">
                <Medal v-once v-show="first_chest[0]" :character="first_chest[0]" />
                <Medal v-once v-show="first_chest[1]" :character="first_chest[1]" />
                <Medal v-once v-show="first_chest[2]" :character="first_chest[2]" />
            </div>
        </td>

        <!-- chest 2 session -->
        <td scope="row" class="px-6 py-4">
            <div class="flex -space-x-7 justify-center">
                <Medal v-once v-show="second_chest[0]" :character="second_chest[0]" />
                <Medal v-once v-show="second_chest[1]" :character="second_chest[1]" />
                <Medal v-once v-show="second_chest[2]" :character="second_chest[2]" />
            </div>
        </td>

        <!-- special chest session -->
        <td scope="row" class="px-6 py-4">
            <div class="flex -space-x-7 justify-center">
                <Medal v-once v-show="special_chest[0]" :character="special_chest[0]" />
            </div>
        </td>

        <!-- date session -->
        <td class="px-6 py-4 text-center">
            <span class="bg-gray-100 text-gray-800 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                <svg class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                {{ date }}
            </span>
        </td>

        <!-- links session -->
        <td class="px-6 py-4">
            <div class="flex space-x-2 justify-center">
                <a :href="facebook_post" target="_blank" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center">
                    <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
                    </svg>
                </a>
            </div>
        </td>
    </tr>
</template>

<script>
    import Medal from './Medal.vue'
    import Tooltip from './Tooltip.vue'

    export default {
        props: {
            uuid: {
                type: String,
                default: ''
            },
            first_chest: {
                type: Array,
                default: ['', '', '']
            },
            second_chest: {
                type: Array,
                default: ['', '', '']
            },
            special_chest: {
                type: Array,
                default: ['', '', '']
            },
            date: {
                type: String,
                default: 'Missing Date'
            },
            facebook_post: {
                type: String,
                default: 'http://facebook.com'
            }
        },
        components: {
            Medal,
            Tooltip
        },
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/images/characters_medal/${name}.png`, import.meta.url)
            },
            getBannerImageUrl(name) {
                return new URL(`../assets/images/banners/${name}.png`, import.meta.url)
            }
        }
    }
</script>