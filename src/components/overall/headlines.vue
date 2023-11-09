<script setup>
import { Bell } from '@vicons/tabler'
import {useUserStore} from "../../store/user";
import {usePageStore} from "../../store/page";

const userStore = useUserStore();
const pageStore = usePageStore();
</script>

<template>
  <n-space class="h-20 p-5" justify="space-between">
    <h2>{{pageStore.navigation[pageStore.navigationNow]}}</h2>
    <n-space>
      <n-space>
        <n-avatar
            :src="userStore.userInfo.avatarUrl"
            size="small"
            round
          />
        <span>{{userStore.userInfo.name}}</span>
      </n-space>
      <n-divider vertical/>
      <n-icon size="25" :component="Bell" />
    </n-space>
  </n-space>
</template>

<style scoped>

</style>