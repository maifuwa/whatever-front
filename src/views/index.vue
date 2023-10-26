<script setup>

import Minor from "@/components/index/minor.vue";
import Recommend from "@/components/index/recommend.vue";
import Secondary from "@/components/index/secondary.vue";
</script>

<template>

  <div class="index">

    <div class="main">
      <recommend></recommend>
    </div>

    <div class="minor">
      <minor></minor>
    </div>

    <div class="main">
      <secondary></secondary>
    </div>

  </div>
</template>

<style scoped lang="scss">
.index {
  margin: 2% auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    width: 90%;
    margin-bottom: 1%;
  }

  .minor {
    width: 90%;
  }
}
</style>