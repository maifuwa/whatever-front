<script setup>

import {useUserStore} from "../store/user";
import {useRoute, useRouter} from "vue-router";

const userStore = useUserStore();
const router = useRouter()

</script>

<template>
  <router-view />
</template>

<style scoped>

</style>