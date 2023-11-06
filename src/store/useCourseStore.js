import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {getUserCourse, loadUserCourse} from "@/api/userInfo";
export const useCourseStore = defineStore('useCourseStore', () => {
    const schedules = ref([]);
    const getCourse = () => {
       getUserCourse()
           .then(res => {
               if (res.code === 200) {
                   schedules.value = res.data;
               }
           })
    }

    function loadCourse(password, course) {
        loadUserCourse(password, course)
            .then(res => {
                if (res.code === 200) {
                    schedules.value = res.data;
                }
            })
    }

    function weekCourse (weekNum) {
       return schedules.value
           .filter(s => s.week.indexOf(','+ weekNum + ',') !== -1)
           .map(({name, courseNum, day, campus, location, teacher, credit}) => ({
               name, courseNum, day, campus, location, teacher, credit
           }));
    }

    function dayCourse(weekNum, day) {
        return weekCourse(weekNum).filter(s => s.day === day);
    }

    function clearCourse() {
        schedules.value = [];
    }

    return {schedules, getCourse, loadCourse, dayCourse, clearCourse};
}, {
    persist: true,
});