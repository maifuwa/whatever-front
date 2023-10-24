<script setup>
import {ref} from "vue";

const paths = ref(['index', 'article', 'community', 'profile'])
</script>

<template>
  <div class="side">
    <img src="../../assets/logo.svg" alt="logo">

    <div class="list">
      <div v-for="path in paths" class="content">
        <img src="../../assets/icons/house.svg" alt="icon">
        <div>{{path}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.side {

  width: 100%;
  height: 100%;

  background-color: #15191C;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;

    margin-top: 30px;
    margin-bottom: 50px;
  }
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content{
      width: 204px;
      height: 64px;

      font-size: 16px;
      color: #fff;
      cursor: pointer;

      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>