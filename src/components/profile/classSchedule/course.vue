<script setup>

import {provide, ref} from "vue";
import ShowWeek from "@/components/profile/classSchedule/showWeek.vue";
import CourseAll from "@/components/profile/classSchedule/courseAll.vue";
import CourseCard from "@/components/profile/classSchedule/courseCard.vue";
import dayjs from "dayjs";

const startDays = ref(dayjs('2023-09-11'));
let nowWeek = dayjs().diff(startDays.value, 'week');
const weekNum = ref(nowWeek);

provide('startDays', startDays.value);
</script>

<template>
  <div class="course">
    <show-week :weekNum="weekNum" @add-week="weekNum++" @sub-week="weekNum--"></show-week>
    <course-card v-if="weekNum === nowWeek"></course-card>
    <course-all v-else></course-all>
  </div>
</template>

<style scoped lang="scss">
.course {
  width: 100%;


}
</style>