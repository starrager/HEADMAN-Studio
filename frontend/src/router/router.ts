import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import Services from '@/views/Services.vue'

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            component:HomePage
        },
        {
            path:'/register',
            component:RegisterPage
        },
        {
            path:'/login',
            component:LoginPage
        },
        {
            path:'/services',
            component:Services
        }
    ],
})

export default router