import {defineStore} from "pinia";
import {computed, ref} from "vue";


export const usePageStore = defineStore('usePageStore', () => {
    const guides = ['index', 'article', 'community', 'profile'];
    const guidesZh = ['首页', '文章', '社区', '个人信息'];
    const selected = ref(0);

    const page = computed(() => {
        if (guides[selected.value] !== 'index' && guides[selected.value] !== 'profile') {
            return 'developed';
        }
        return guides[selected.value];
    })

    function select(select) {
        selected.value = select;
    }

    return {page, guidesZh,selected, select}
});