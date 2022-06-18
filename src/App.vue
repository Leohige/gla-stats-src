<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <NavBar></NavBar>
        <Breadcrumb></Breadcrumb>
        <router-view v-slot="{ Component }">
            <keep-alive>
                <Markdown :html="true" :xhtmlOut="true" :source="source" />
            </keep-alive>
        </router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar.vue'
import Breadcrumb from '@/components/ui/Breadcrumb.vue'
import Footer from '@/components/ui/Footer.vue'
import Markdown from 'vue3-markdown-it';
import {compile} from "vue"

export default {
    data() {
        return {
            source: compile("<Footer/>")
        }
    },
    components: {
        NavBar,
        Breadcrumb,
        Footer,
        Markdown
    },
    mounted() {
        document.documentElement.classList.add('dark')
    }
}
</script>
