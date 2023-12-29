import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ShopView from '../views/ShopView.vue'
import DetailProductView from '../views/DetailProductView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            component: AboutView
        },
        {
            path: '/shop',
            name: 'shop',
            component: ShopView
        },
        {
            path: '/detail/:id',
            component: DetailProductView
        },
        {
            path: '/:notFound(.*)',
            component: PageNotFoundView
        }
    ]
    })
export default router