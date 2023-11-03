import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useAccountStore = defineStore("useAccountStore", () => {
    const user = ref({
        token: '',
        name: 'guest',
        avatarUrl: 'src/assets/images/avatars/avatar.jpg',
        introduction: '这个用户很懒，什么都没有写'
    });

    function changeUserInfo(name, introduction) {
        user.value.name = name;
        user.value.introduction = introduction;
    }

    function login(token, name, avatarUrl, introduction) {
        user.value.token = token;
        user.value.name = name;
        user.value.avatarUrl = avatarUrl;
        user.value.introduction = introduction;
    }

    const isLogin = computed(() => {
        return user.value.token !== '';
    })

    return {user, changeUserInfo, isLogin};
});

