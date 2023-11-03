<script setup>
import {useCourseStore} from "@/store/useCourseStore";
import CourseAllSingle from "@/components/profile/classSchedule/CourseAllSingle.vue";

const courseStore = useCourseStore();
defineProps(['weekNum']);

</script>

<template>
  <div class="courseAll">
    <div class="day" v-for="index in 7">
      <div class="course" v-for="course in courseStore.dayCourse(weekNum, index)">
        <course-all-single :course="course"></course-all-single>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.courseAll {
  width: 100%;
  display: flex;
  justify-content: space-around;
  .day {
    display: flex;
    flex-direction: column;

    .course {
      margin-bottom: 20%;
    }
  }
}
</style>