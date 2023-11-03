<script setup>

defineProps(['course'])
</script>

<template>
  <div class="single">
    <p>{{course.name}}</p>
    <p>{{course.courseNum + "(8:00~11:15)"}}</p>
    <p>{{course.campus + " " + course.location}}</p>
    <p>{{course.teacher}}</p>
    <p>{{"学分: " + course.credit}}</p>
  </div>
</template>

<style scoped lang="scss">
.single {
  width: 100%;
  p {
    margin-bottom: 6%;
    &:nth-of-type(1) {
      font-size: 25px;
    }
  }

}
</style>