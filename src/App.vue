<script setup>
import Sidebar from "@/components/overall/sidebar.vue";

</script>

<template>
  <div class="app">
    <div class="side">
      <sidebar/>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;

  background-color: #1D232A;
  color: #fff;
  .side {
    flex: 1;
    height: 100%;
  }
  .content {
    flex: 9;
  }
}



</style>
