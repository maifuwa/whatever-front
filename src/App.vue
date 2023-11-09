<script setup>
import {darkTheme, dateZhCN, zhCN} from "naive-ui";
import Sidebar from "./components/overall/sidebar.vue";
import Headlines from "./components/overall/headlines.vue";

</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-space vertical size="large">
      <n-layout has-sider style="width: 100vw;height: 100vh;">
        <!--侧边栏-->
        <n-layout-sider
            collapse-mode="width"
            :collapsed-width="10"
            :show-collapsed-content="false"
            :show-trigger="'arrow-circle'"
            :width="'10%'"
            bordered
            class="p-10">
          <sidebar></sidebar>
        </n-layout-sider>
        <!--顶栏和内容-->
        <n-layout>
          <n-layout-header bordered>
            <headlines></headlines>
          </n-layout-header>
          <n-layout-content>
            <router-view></router-view>
          </n-layout-content>
        </n-layout>

      </n-layout>
    </n-space>
  </n-config-provider>
</template>

<style scoped>

</style>