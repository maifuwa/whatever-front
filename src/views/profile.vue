<script setup>
import UserInfo from "@/components/profile/userInfo.vue";
import ClassSchedule from "@/components/profile/classSchedule.vue";

</script>

<template>
  <div class="profile">

    <user-info></user-info>

    <class-schedule></class-schedule>

  </div>
</template>

<style scoped lang="scss">
  .profile {
    margin: 2% auto;
    display: flex;
    justify-content: space-around;

    .userInfo {
      width: 20%;
    }

    .classSchedule {
      width: 60%;
    }
  }


</style>