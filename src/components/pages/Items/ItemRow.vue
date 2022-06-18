<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <!-- name session -->
        <td scope="row" class="px-6 py-4">
            <div class="flex -space-x-7 justify-center font-bold text-md">
                {{ name }}
            </div>
        </td>

        <!-- sprite session -->
        <td scope="row" class="px-6 py-4">
            <div class="flex -space-x-7 justify-center">
                <Sprite :item="slug" />
            </div>
        </td>

         <!-- category session -->
        <td scope="row" class="px-6 py-4">
            <div class="flex -space-x-7 justify-center">
                {{ category }}
            </div>
        </td>

        <!-- class session -->
        <td scope="row" class="px-6 py-4">
            <div class="flex -space-x-7 justify-center">
                <span v-if="this.class != '-'" class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">{{ class }}</span>
                <span v-if="this.class == '-'">{{ class }}</span>
            </div>
        </td>

        <!-- level session -->
        <td class="px-6 py-4 text-center">
            <div class="flex -space-x-7 justify-center">
                {{ level }}
            </div>
        </td>

        <!-- links session -->
        <td class="px-6 py-4">
            <div class="flex space-x-2 justify-center">
                <router-link
                        :to="{ name: 'Item', params: { slug: slug, subtitle: 'Erina' }}"
                        class="w-full md:w-auto py-2 pr-4 pl-3 inline-flex items-center py-2 pr-4 pl-3 text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        active-class="w-full md:w-auto py-2 pr-4 pl-3 inline-flex items-center text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    >
                Ver
                </router-link>
            </div>
        </td>
    </tr>
</template>

<script>
import Sprite from '@/components/ui/Sprite.vue'

export default {
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    components: {
        Sprite
    },
    computed: {
        slug() {
            return this.item.slug;
        },
        name() {
            if (!this.item.hasOwnProperty('name')) {
                return 'Missing Name';
            }

            return this.item.name;
        },
        level() {
            if (!this.item.hasOwnProperty('level')) {
                return '-';
            }

            return this.item.level;
        },
        category() {
            if (!this.item.hasOwnProperty('category')) {
                return 'Missing Category';
            }

            return this.item.category;
        },
        class() {
            if (!this.item.hasOwnProperty('class')) {
                return '-';
            }

            return this.item.class;
        }
    }
}
</script>
