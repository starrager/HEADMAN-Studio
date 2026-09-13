import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import MastersPage from '@/views/MastersPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'

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
            component:ServicesPage
        },
        {
            path:'/masters',
            component:MastersPage
        },
        {
            path:'/aboutus',
            component:AboutPage
        },
        {
            path:'/contacts',
            component:ContactsPage
        },
        {
            path:'/profile',
            component:ProfilePage
        }
    ],
})

export default router