import { createRouter, createWebHistory } from 'vue-router'

// Frontend Layout
import Frontend from '../layouts/Frontend.vue'

// Backend Layout
import Backend from '../layouts/Backend.vue'

// Frontend Pages
import Home from '../views/frontend/Home.vue'
import Login from '../views/frontend/Login.vue'
import Profile from '../views/frontend/Profile.vue'
import Register from '../views/frontend/Register.vue'

// Backend Pages
import Dashboard from '../views/backend/Dashboard.vue'

const routes = [
    {
        // Frontend Routes
        path: '/',
        component: Frontend,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
                meta: {
                    title: 'หน้าหลัก',
                }
            },
            {
                path: '/login',
                name: 'Login',
                component: Login,
                meta: {
                    title: 'เข้าสู่ระบบ',
                }
            },
            {
                path: '/register',
                name: 'Register',
                component: Register,
                meta: {
                    title: 'สมัครสมาชิก',
                }
            },
            {
                path: '/profile',
                name: 'Profile',
                component: Profile,
                meta: {
                    title: 'ข้อมูลสมาชิก',
                }
            }
        ],
    },
    {
        // Backend Routes
        path: '/backend',
        component: Backend,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard,
                meta: {
                    title: 'Dahsboard',
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router