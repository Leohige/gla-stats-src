<template>
    <ul class="inline-flex items-center -space-x-px">
        <li class="disabled">
            <a
                @click.prevent="changePage(prevPage)"
                href="#"
                class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
            >
                <span class="sr-only">Previous</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </li>

        <li
            v-for="(page, index) in pages"
            :key="index"
            @click.prevent="changePage(page)"
            :class="
                    {
                        'cursor-pointer text-center w-11 z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-white': current == page,
                        'cursor-pointer text-center w-11 py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white': current != page
                    }"
        >
            <a href="#">
                {{ page }}
            </a>
        </li>

        <li>
            <a
                @click.prevent="changePage(nextPage)"
                href="#"
                class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
            >
                <span class="sr-only">Next</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    emits: ["page-changed"],
    props: {
        current: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        },
        perPage: {
            type: Number,
            default: 0
        },
        pageRange: {
            type: Number,
            default: 2
        }
    },
    data() {
        return {
            input: '',
        }
    },
    methods: {
        hasFirst: function() {
            return this.rangeStart !== 1
        },
        hasLast: function() {
            return this.rangeEnd < this.totalPages
        },
        hasPrev: function() {
            return this.current > 1
        },
        hasNext: function() {
            return this.current < this.totalPages
        },
        changePage: function(page) {
            if (page > 0 && page <= this.totalPages) {
                this.$emit('page-changed', page)
            }
        }
    },
    computed: {
        pages: function() {
            var pages = []
            for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
                pages.push(i)
            }
            return pages
        },
        rangeStart: function() {
            var start = this.current - this.pageRange
            return (start > 0) ? start : 1
        },
        rangeEnd: function() {
            var end = this.current + this.pageRange
            return (end < this.totalPages) ? end : this.totalPages
        },
        totalPages: function() {
            return Math.ceil(this.total / this.perPage)
        },
        nextPage: function() {
            return this.current + 1
        },
        prevPage: function() {
            return this.current - 1
        }
    }
}
</script>
