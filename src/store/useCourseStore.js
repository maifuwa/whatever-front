import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {getUserCourse, loadUserCourse} from "@/api/userInfo";
export const useCourseStore = defineStore('useCourseStore', () => {
    const schedules = ref([]);
    const hasSchedules = ref(false);

    const getCourse = () => {
       getUserCourse()
           .then(res => {
               if (res.code === 200) {
                   schedules.value = res.data;
                   hasSchedules.value = true;
               }else {
                   hasSchedules.value = false;
               }
           })
    }

    function loadCourse(password, course) {
        loadUserCourse(password, course)
            .then(res => {
                if (res.code === 200) {
                    schedules.value = res.data;
                    hasSchedules.value = true;
                }else {
                    hasSchedules.value = false;
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

    return {hasSchedules, getCourse, loadCourse, dayCourse};
});