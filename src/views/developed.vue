<script setup>
import Topbar from "@/components/overall/topbar.vue";
import {ref} from "vue";

const name = ref('developed')
</script>

<template>
  <topbar :name="name" />
  <div>暂未开发，敬请期待</div>
</template>

<style scoped>

</style>