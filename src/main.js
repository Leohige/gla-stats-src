import { createApp } from 'vue'
import App from './App.vue'
import 'flowbite/dist/flowbite.js';
import '@/index.css'
import router from '@/routes'
import Markdown from 'vue3-markdown-it';
import Footer from '@/components/ui/Footer.vue'

createApp(App).use(router).use(Markdown).component('Footer', Footer).mount('#app');
