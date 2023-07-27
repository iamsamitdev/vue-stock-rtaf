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
import Product from '../views/backend/Product.vue'

// ฟังก์ชันสำหรับทำ Route Guard
function authGuard(to: any, from: any, next: any) {
    // อ่านค่า token จาก localStorage
    let token = ""

    // ตรวจสอบว่ามี token หรือไม่
    try {
        token = localStorage.getItem('token') || ""
        if(token != ""){
            next() // ไปต่อ
        }else{
            next({name: 'Login'}) // ไปหน้า login
        }
    } catch (error) {
        console.log(error)
    }
}

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
        beforeEnter: authGuard,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard,
                meta: {
                    title: 'Dahsboard',
                },
            },
            {
                path: 'product',
                name: 'Product',
                component: Product,
                meta: {
                    title: 'Product',
                },
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router