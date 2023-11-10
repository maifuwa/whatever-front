import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    // 路由模式
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/',
            name: 'index',
            component:() => import('../view/index.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component:() => import('../view/profile.vue'),
        },
        {
            path: '/developed',
            name: 'developed',
            component:() => import('../view/developed.vue')
        }
    ]

})

export default router;