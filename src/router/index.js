import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    // 路由模式
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/',
            name: 'index',
            component:() => import('@/views/index.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component:() => import('@/views/profile.vue')
        },
        {
            path: '/developed',
            name: 'developed',
            component:() => import('@/views/developed.vue')
        }

    ]

})


export default router;