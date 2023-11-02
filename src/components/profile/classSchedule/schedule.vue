<script setup>
import {onMounted, ref, provide} from "vue";
import UploadCourse from "@/components/profile/classSchedule/uploadCourse.vue";
import Course from "@/components/profile/classSchedule/course.vue";

const schedules = ref({});

onMounted(async () => {
  // TODO: 获取课程表
  let response = await fetch('/static/courses.json');
  let json = await response.json()
  schedules.value = json.data;
  // schedules.value = undefined
});

provide('schedules', schedules);
</script>

<template>
  <div class="schedule">
    <upload-course v-if="schedules === undefined" />
    <course v-else />
  </div>
</template>

<style scoped lang="scss">
.schedule {
  width: 100%;
}
</style>