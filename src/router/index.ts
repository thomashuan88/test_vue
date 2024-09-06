// create a router and export it
import { createRouter, createWebHistory } from 'vue-router'
import { login } from '@/utils/auth';
import Profile from '@/components/Profile.vue'
import Login from '@/components/Login.vue'
// import Home from '@/components/Home.vue'
// import News from '@/components/News.vue'
// import About from '@/components/About.vue'

// create a router
const router = createRouter({
    history: createWebHistory(), // router mode
    routes: [   // router path and component
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            beforeEnter: async (to, from, next) => {
                const token = localStorage.getItem('userToken');
                if (!token) {
                    try {
                        const username = 'your_username';
                        const password = 'your_password';
                        const token = await login(username, password);
                        localStorage.setItem('userToken', token);
                    } catch (error) {
                        console.error(error);
                        next({ name: 'login' });
                    }
                }
                next();
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        // {
        //     path: '/home',
        //     component: Home
        // },
        // {
        //     path: '/news',
        //     component: News
        // },
        // {
        //     path: '/about',
        //     component: About
        // }
    ]
})

// export the router
export default router