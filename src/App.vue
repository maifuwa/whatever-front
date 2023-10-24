<script setup>
import Sidebar from "@/components/overall/sidebar.vue";
import Topbar from "@/components/overall/topbar.vue";

</script>

<template>
  <div class="overall">
    <div class="topbar">
      <topbar></topbar>
    </div>
    <div class="sidebar">
      <sidebar></sidebar>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.overall {
  background-color: #1D232A;
  width: 1440px;
  height: 100vh;

  position: relative;
  border-radius: 5px;
}

.sidebar{
  width: 204px;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
}

.topbar {
  width: 1236px;
  height: 80px;

  position: absolute;
  top: 0;
  left: 204px;
}

.content {
  height: auto;

  position: absolute;
  top: 80px;
  left: 204px;

  overflow: auto;
  padding: 10px 20px;
}

</style>
