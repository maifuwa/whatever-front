<script setup>

import {useUserStore} from "../store/user";
import AlreadyLog from "../components/profile/alreadyLog.vue";
import NoLogin from "../components/profile/noLogin.vue";

const userStore = useUserStore();
</script>

<template>
  <already-log v-if="userStore.isLogin"></already-log>
  <no-login v-else></no-login>
</template>

<style scoped>

</style>