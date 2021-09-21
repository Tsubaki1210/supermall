import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const All = () => import('../views/all/All')
const Cart = () => import('../views/cart/Cart')
const User = () => import('../views/user/User')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/all',
        component: All
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/user',
        component: User
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router