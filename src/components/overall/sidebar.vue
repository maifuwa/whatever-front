<script setup>
import {ref} from "vue";
import List from "@/components/overall/sidebar/list.vue";

const guides = ref(['index', 'article', 'community', 'profile'])
</script>

<template>
  <div class="side">
    <img src="../../assets/logo.svg" alt="logo">
    <div class="content">
      <list :guides="guides"></list>
    </div>
  </div>
</template>

<style scoped lang="scss">

.side {
  width: 100%;
  height: 100%;
  background-color: #15191C;

  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60%;
    margin: 20% 0;
  }
  .content {
    width: 100%;
    height: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}
</style>