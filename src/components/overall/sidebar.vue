<script setup>
import { RouterLink } from "vue-router";
import { h } from "vue";
import { NIcon } from "naive-ui";
import { SmartHome, Notebook, BrandDocker, Alien} from '@vicons/tabler'
import {useUserStore} from "../../store/user";

defineProps(["collapsed"])

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon)});
}

const userStore = useUserStore();
const profilePath = computed(() => {
  return userStore.isLogin ? '/profile/userInfo' : '/profile/nologin/login';
});

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
            path: '/developed'
          }
        },
        { default: () => '文章'}
    ),
    key: '2',
    icon: renderIcon(Notebook)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: '/developed'
          }
        },
        { default: () => '社区'}
    ),
    key: '3',
    icon: renderIcon(BrandDocker)
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
  <n-space vertical justify="center" size="large" style="height: 40%">
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
        default-value="1"
        class="text-xl"
    />
  </n-space>
</template>

<style scoped>

</style>