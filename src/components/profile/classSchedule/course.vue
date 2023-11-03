<script setup>

import {provide, ref} from "vue";
import ShowWeek from "@/components/profile/classSchedule/showWeek.vue";
import CourseAll from "@/components/profile/classSchedule/courseAll.vue";
import dayjs from "dayjs";

const startDays = ref(dayjs('2023-09-11'));
const weekNum = ref(dayjs().diff(startDays.value, 'week'));

provide('startDays', startDays.value);
</script>

<template>
  <div class="course">
    <show-week :weekNum="weekNum" @add-week="weekNum++" @sub-week="weekNum--"></show-week>
    <course-all :weekNum="weekNum"></course-all>
  </div>
</template>

<style scoped lang="scss">
.course {
  width: 100%;

  .showWeek {
    margin-bottom: 5%;
  }
}
</style>