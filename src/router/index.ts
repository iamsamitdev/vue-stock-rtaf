import { createRouter, createWebHistory } from 'vue-router'

// Frontend Layout
import Frontend from '../layouts/Frontend.vue'

// Home Page
import Home from '../views/frontend/Home.vue'
// Login Page
import Login from '../views/frontend/Login.vue'
// Profile Page
import Profile from '../views/frontend/Profile.vue'


const routes = [
    {
        path: '/',
        component: Frontend,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/profile',
                name: 'Profile',
                component: Profile,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router