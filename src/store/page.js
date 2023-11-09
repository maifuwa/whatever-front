import router from "../router";
import {defineStore} from "pinia";

export const usePageStore = defineStore('page', () => {
    const navigation = ['首页', '文章', '社区', '个人信息'];
    const navigationNow = ref(0);
    function jump(index) {
        switch (index) {
            case 1:
            case 2:
                router.push('/developed');
                navigationNow.value = index;
                break;
            case 3:
                router.push('/profile');
                navigationNow.value = index;
                break;
            default:
                router.push('/');
                navigationNow.value = index;
        }
    }

    return {
        navigation,
        navigationNow,
        jump
    }

})