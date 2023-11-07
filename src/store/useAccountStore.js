import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useCourseStore} from "@/store/useCourseStore";

export const useAccountStore = defineStore("useAccountStore", () => {
    const courseStore = useCourseStore();

    const baseUrl = "http://127.0.0.1:8080";

    const user = ref({
        token: '',
        name: 'guest',
        avatarUrl:  baseUrl + '/images/avatar/default_avatar.png',
        introduction: '这个用户很懒，什么都没有写'
    });

    function changeUserInfo(name, introduction) {
        user.value.name = name;
        user.value.introduction = introduction;
    }

    function login(token, name, avatarUrl, introduction) {
        user.value.token = token;
        user.value.name = name;
        user.value.avatarUrl = baseUrl + avatarUrl;
        user.value.introduction = introduction;
    }

    function logout() {
        user.value = {
            token: '',
            name: 'guest',
            avatarUrl: baseUrl + '/images/avatar/default_avatar.png',
            introduction: '这个用户很懒，什么都没有写'
        };
        courseStore.clearCourse();
    }

    const isLogin = computed(() => {
        return user.value.token !== '';
    })

    return {user, changeUserInfo, isLogin, login, logout};
}, {
    persist: true,
});

