<script setup>
import Sidebar from "@/components/overall/sidebar.vue";
import Topbar from "@/components/overall/topbar.vue";
import Login from "@/components/overall/login.vue";
import {ref, provide} from "vue";


const isLoginShow = ref(true);
provide("isLoginShow", isLoginShow);
provide('changeLoginShow', () => isLoginShow.value = !isLoginShow.value);
</script>

<template>
  <div class="app">
    <div class="side">
      <sidebar/>
    </div>

    <div class="content">
      <topbar />
      <router-view></router-view>
    </div>
  </div>

  <login></login>
</template>

<style scoped lang="scss">
.app {
  width: 100vw;
  height: 100vh;

  overflow: auto;

  display: flex;
  justify-content: space-between;

  background-color: #1D232A;
  color: #fff;
  .side {
    flex: 1;
    height: 100%;

    position: sticky;
    top: 0;
  }
  .content {
    flex: 9;
  }
}


</style>
