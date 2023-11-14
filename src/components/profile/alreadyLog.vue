<script setup>
import {useRouter} from "vue-router";
import {useUserStore} from "../../store/user";

const router = useRouter();
const userStore = useUserStore();
onMounted(() => {
  if (!userStore.isLogin) {
    router.push("/profile/nologin/login");
  }
})
</script>

<template>
  <div>这里已经登陆</div>
</template>

<style scoped>

</style>