import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue'
import RotationList from './components/RotationList.vue'
import Blacksmith from './components/Blacksmith.vue'
import Patients from './components/Patients.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    { name: 'Início', path: '/', component: Home },
    { name: 'Rotação Semanal', path: '/weekly-rotation', component: RotationList },
    { name: 'Ferreiro', path: '/blacksmith', component: Blacksmith },
    { name: 'Pacientes', path: '/patients', component: Patients },
    { name: 'Not Found', path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
