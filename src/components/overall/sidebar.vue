<script setup>
import {usePageStore} from "../../store/page";

const pageStore = usePageStore();
</script>

<template>
  <n-space vertical justify="space-around">
    <img src="../../assets/images/logo.svg" alt="logo">
    <n-space vertical justify="space-between">
      <div v-for="(navigation, index) in pageStore.navigation" @click="pageStore.jump(index)">{{ navigation }}</div>
    </n-space>
  </n-space>
</template>

<style scoped>

</style>