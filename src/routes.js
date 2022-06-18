import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/components/pages/Home/Home.vue'
import WeeklyRotation from '@/components/pages/WeeklyRotation/WeeklyRotation.vue'
import Blacksmith from '@/components/pages/Blacksmith/Blacksmith.vue'
import Patients from '@/components/pages/Patients/Patients.vue'
import Items from '@/components/pages/Items/Items.vue'
import Item from '@/components/pages/Item/Item.vue'
import NotFound from '@/components/pages/NotFound/NotFound.vue'

const routes = [
    { name: 'Início', path: '/', component: Home },
    { name: 'Rotação Semanal', path: '/weekly-rotation', component: WeeklyRotation },
    { name: 'Ferreiro', path: '/blacksmith', component: Blacksmith },
    { name: 'Pacients', path: '/patients', component: Patients },
    { 
        name: 'Itens', 
        path: '/items', 
        component: Items, 
        children: [
            { 
                name: 'Item', 
                path: '/items/:slug', 
                component: Item
            }
        ]
    },
    { name: 'Not Found', path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
