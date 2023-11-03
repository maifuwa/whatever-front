import {defineStore} from "pinia";
import {computed, ref} from "vue";
export const useCourseStore = defineStore('useCourseStore', () => {
    const schedules = ref([]);

    const getCourse = async () => {
        let response = await fetch('/static/courses.json');
        let json = await response.json();
        return json.data;
    }

    const initCourse = async () => {
        schedules.value = await getCourse();
        // schedules.value = JSON.parse(tmp);
    }

    const hasSchedules = computed(() => {
        //TODO:判断用户有没有课表
        return true;
    });

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

    return {initCourse, hasSchedules, weekCourse, dayCourse};
});