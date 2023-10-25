<script setup>
import Topbar from "@/components/overall/topbar.vue";
import {ref} from "vue";

const name = ref('profile')
</script>

<template>
  <topbar :name="name" />
  <div>用户信息</div>
</template>

<style scoped>

</style>