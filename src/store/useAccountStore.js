import {defineStore} from "pinia";
import {ref} from "vue";

export const useAccountStore = defineStore("useAccountStore", () => {
    const user = ref({
        name: 'guest',
        avatarUrl: 'src/assets/images/avatars/avatar.jpg',
        introduction: '这个用户很懒，什么都没有写'
    });

    function changeUserInfo(name, introduction) {
        user.value.name = name;
        user.value.introduction = introduction;
    }

    return {user, changeUserInfo};
});

