<script setup>
import { RouterLink } from "vue-router";
import { h } from "vue";
import { NIcon } from "naive-ui";
import { SmartHome, Notebook, BrandDocker, Alien} from '@vicons/tabler'

defineProps(["collapsed"])

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon)});
}

const menuOptions = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'index',
          }
        },
        { default: () => '首页'}
    ),
    key: 'index',
    icon: renderIcon(SmartHome)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'developed',
          }
        },
        { default: () => '文章'}
    ),
    key: 'article',
    icon: renderIcon(Notebook)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'developed',
          }
        },
        { default: () => '社区'}
    ),
    key: 'Community',
    icon: renderIcon(BrandDocker)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'profile',
          }
        },
        { default: () => '个人信息'}
    ),
    key: 'profile',
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
        default-value="index"
    />
  </n-space>
</template>

<style scoped>

</style>