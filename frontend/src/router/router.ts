import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import MastersPage from '@/views/MastersPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import OrderPage from '@/views/OrderPage.vue'
import ForMasterPage from '@/views/ForMasterPage.vue'

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
        },
        {
            path:'/order',
            component:OrderPage
        },
        {
            path:'/master',
            component:ForMasterPage,
            meta:{requiresAuth:true,role:'MASTER'}
        }
    ],
})

router.beforeEach((to,from,next)=>{
    const token=localStorage.getItem('token')
    const rawUser=localStorage.getItem('user')
    const user=rawUser&&rawUser!=='undefined'?JSON.parse(rawUser):{}

    if(to.meta.requiresAuth&&!token)return next('/login')

    if(to.meta.role&&to.meta.role!==user.role)return next('/')

    if(token&&(to.path==='/login'||to.path==='/register'))return next('/')

    next()
})

export default router