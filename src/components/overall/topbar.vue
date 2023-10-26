<script setup>
import { usePageStore } from '@/store/usePageStore'
const pageStore = usePageStore();
</script>

<template>
  <div class="top">
    <h2>{{pageStore.guidesZh[pageStore.selected]}}</h2>
    <div class="userInfo">
      <div class="user">
        <img src="../../assets/images/avatars/head.png" alt="header">
        maifuwa
      </div>
      <img src="../../assets/images/icons/message.svg" alt="message">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .top{
    width: 100%;
    height: 8%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 60px;

    border-bottom: 2px #15191C solid;
    h2 {
      font-size: 30px;
      font-weight: bold;

    }
    .userInfo {
      width: 15%;
      display: flex;
      align-items: center;

      img {
        margin-left: 15%;
        width: 30%;
      }

      .user {
        font-size: 18px;
        border-right: 1px white solid;
        img {
          margin-right: 4%;
          vertical-align: middle;
          width: 18%;
        }
      }
    }
  }

</style>