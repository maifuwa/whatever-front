<script setup>
import { Bell } from '@vicons/tabler'
import {useUserStore} from "../../store/user";
import {useRoute} from "vue-router";

const router = useRoute();
const userStore = useUserStore();

const title = computed(() => {
  console.log(router.path)

   switch (router.name) {
    case 'index':
      return '首页';
     case 'profile':
       return "个人信息";
     default:
       return "暂未开发"
  }
});

</script>

<template>
  <n-space class="h-20 px-10 text-2xl" justify="space-between" align="center">
    <h2>{{title}}</h2>
    <n-space>
      <n-space class="text-xl">
        <n-avatar
            :src="userStore.userInfo.avatarUrl"
            size="small"
            round
          />
        <span>{{userStore.userInfo.name}}</span>
      </n-space>
      <n-divider vertical />
      <n-icon size="25" :component="Bell" />
    </n-space>
  </n-space>
</template>

<style scoped>

</style>