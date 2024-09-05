// create a router and export it
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

// create a router
const router = createRouter({
    history: createWebHistory(), // router mode
    routes: [   // router path and component
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        }
    ]
})

// export the router
export default router