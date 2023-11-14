<script setup>
import {RouterLink, useRoute} from "vue-router";
import { h } from "vue";
import { NIcon } from "naive-ui";
import { SmartHome, Notebook, BrandDocker, Alien} from '@vicons/tabler'
import {useUserStore} from "../../store/user";

defineProps(["collapsed"])

const userStore = useUserStore();
const profilePath = computed(() => {
  return userStore.isLogin ? '/profile/userInfo' : '/profile/nologin/login';
});

const route = useRoute();
const selected = computed(() => {
  let path = route.fullPath;
  if (path.length === 1) {
    return "1"
  }

  if (path.includes("community")) {
    return "2"
  }else if (path.includes("article")) {
    return "3"
  } else if (path.includes("profile")) {
    return "4";
  }
});

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon)});
}

const menuOptions = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: '/',
          }
        },
        { default: () => '首页'}
    ),
    key: '1',
    icon: renderIcon(SmartHome)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: '/community'
          }
        },
        { default: () => '社区'}
    ),
    key: '2',
    icon: renderIcon(BrandDocker)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: '/article'
          }
        },
        { default: () => '文章'}
    ),
    key: '3',
    icon: renderIcon(Notebook)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: profilePath.value
          }
        },
        { default: () => '个人信息'}
    ),
    key: '4',
    icon: renderIcon(Alien)
  },
];

</script>

<template>
  <n-space vertical justify="center" size="large" class="mt-5">
    <n-space justify="center">
      <n-image
          width="100"
          src="/src/assets/images/logo.svg"
          preview-disabled
      />
    </n-space>
    <n-menu
        :options="menuOptions"
        :collapsed="collapsed"
        :collapsed-width="80"
        :collapsed-icon-size="25"
        :value="selected"
        class="text-xl"
    />
  </n-space>
</template>

<style scoped>

</style>