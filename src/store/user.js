import {defineStore} from "pinia";

export const useUserStore = defineStore('user', () => {

    const userInfo = ref({
        token: '',
        name: 'guest',
        avatarUrl: '/images/avatar/default_avatar.png',
        // avatarUrl: '/src/assets/images/default_avatar.png',
        introduction: '这个用户很懒，什么都没有写'
    });

    const isLogin = computed(() => userInfo.value.token !== '');

    function login(token, name, avatarUrl, introduction) {
        userInfo.value.token = token;
        userInfo.value.name = name;
        userInfo.value.avatarUrl = avatarUrl;
        userInfo.value.introduction = introduction;
    }

    function logout() {
        userInfo.value = {
            token: '',
            name: 'guest',
            avatarUrl: '/images/avatar/default_avatar.png',
            // avatarUrl: '/src/assets/images/default_avatar.png',
            introduction: '这个用户很懒，什么都没有写'
        };
    }

    return {
        userInfo,
        isLogin,
        login,
        logout
    };
}, {
    persist: true,
});