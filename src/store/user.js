import {defineStore} from "pinia";

export const useUserStore = defineStore('user', () => {
    const baseUrl = "http://127.0.0.1:8080";

    const userInfo = ref({
        token: '',
        name: 'guest',
        // avatarUrl:  baseUrl + '/images/avatar/default_avatar.png',
        avatarUrl: '/src/assets/images/default_avatar.png',
        introduction: '这个用户很懒，什么都没有写'
    });

    const isLogin = computed(() => userInfo.value.token !== '');


    return {
        userInfo,
        isLogin
    }
});