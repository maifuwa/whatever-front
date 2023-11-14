<script setup>
import {Bell, Login, Logout} from '@vicons/tabler'
import {GolfCourseSharp} from '@vicons/material'
import {useUserStore} from "../../store/user";
import {useRoute, useRouter} from "vue-router";
import {NIcon, useMessage} from "naive-ui";
import {doLogout} from "../../api/userInfo";
import {h} from "vue";

const route = useRoute();
const userStore = useUserStore();

const title = computed(() => {
  let path = route.fullPath;
  if (path.length === 1) {
    return "首页"
  }

  if (path.includes("profile")) {
    return "个人信息"
  } else if (path.includes("community")) {
    return "社区"
  } else if (path.includes("article")) {
    return "文章";
  }
});

const baseUrl = "http://127.0.0.1:8080";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon)});
}

const userOptions = ref([
  {
    label: "登录",
    key: "login",
    icon: renderIcon(Login),
    disabled: computed(() => userStore.isLogin)
  },
  {
    label: "查看课表",
    key: "course",
    icon: renderIcon(GolfCourseSharp),
    disabled: computed(() => !userStore.isLogin)
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(Logout),
    disabled: computed(() => !userStore.isLogin)
  }
]);

const router = useRouter();
const message = useMessage();

function handleSelect(key) {
  switch (key) {
    case 'login':
      router.push('/profile/nologin/login');
      break;
    case 'course':
      message.info("正在获取你的课表")
      break;
    case 'logout':
      doLogout()
          .then(res => {
            if (res.code === 200) {
              userStore.logout();
              message.success(res.data);
            } else {
              message.error(res.message);
            }
          });
      break;
  }
}
</script>

<template>
  <n-space class="h-20 px-10 text-2xl" justify="space-between" align="center">
    <h2>{{ title }}</h2>
    <n-space>
      <n-space class="text-xl">
        <n-dropdown trigger="hover" :options="userOptions" @select="handleSelect">
          <n-avatar
              :src="baseUrl + userStore.userInfo.avatarUrl"
              size="small"
              class="cursor-pointer"
              round
          />
        </n-dropdown>
        <span>{{ userStore.userInfo.name }}</span>
      </n-space>
      <n-divider vertical/>
      <n-icon size="25" :component="Bell"/>
    </n-space>
  </n-space>
</template>

<style scoped>

</style>