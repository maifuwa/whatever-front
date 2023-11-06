<script setup>
import {onMounted} from "vue";
import UploadCourse from "@/components/profile/classSchedule/uploadCourse.vue";
import Course from "@/components/profile/classSchedule/course.vue";
import {useCourseStore} from "@/store/useCourseStore";


const courseStore = useCourseStore();
onMounted(() => courseStore.getCourse());
</script>

<template>
  <div class="schedule">
    <upload-course v-if="courseStore.schedules === []" />
    <course v-else />
  </div>
</template>

<style scoped lang="scss">
.schedule {
  width: 100%;
}
</style>