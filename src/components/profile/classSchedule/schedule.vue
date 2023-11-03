<script setup>
import {onMounted} from "vue";
import UploadCourse from "@/components/profile/classSchedule/uploadCourse.vue";
import Course from "@/components/profile/classSchedule/course.vue";
import {useCourseStore} from "@/store/useCourseStore";


const courseStore = useCourseStore();
onMounted(() => courseStore.initCourse());
</script>

<template>
  <div class="schedule">
    <course v-if="courseStore.hasSchedules" />
    <upload-course v-else />
  </div>
</template>

<style scoped lang="scss">
.schedule {
  width: 100%;
}
</style>