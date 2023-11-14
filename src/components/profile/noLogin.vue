<script setup>

import {useRouter} from "vue-router";
import {useUserStore} from "../../store/user";

const router = useRouter();
const userStore = useUserStore();
onMounted(() => {
  if (userStore.isLogin) {
    router.push("/profile/userInfo");
  }
});
</script>

<template>
  <n-space vertical class="text-xl pt-20">
    <router-view/>
  </n-space>
</template>

<style scoped>

</style>