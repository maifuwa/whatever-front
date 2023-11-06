<script setup>
import { usePageStore } from '@/store/usePageStore'
import {useAccountStore} from "@/store/useAccountStore";
import {inject} from "vue";

const pageStore = usePageStore();
const accountStore = useAccountStore();
const changeLoginShow = inject('changeLoginShow');

function profile() {
  if (!accountStore.isLogin) {
    changeLoginShow();
  }else {
    accountStore.logout();
  }
}
</script>

<template>
  <div class="top">
    <h2>{{pageStore.guidesZh[pageStore.selected]}}</h2>
    <div class="userInfo">
      <div class="user">
        <img :src="accountStore.user.avatarUrl" alt="header" @click="profile">
        {{accountStore.user.name}}
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

    padding: 0 5%;
    border-bottom: 2px #15191C solid;

    background-color: #1D232A;
    position: sticky;
    top: 0;

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
        width: 45%;
      }

      .user {
        font-size: 18px;
        border-right: 1px white solid;

        img {
          margin-right: 6%;
          vertical-align: middle;
          width: 20%;
          border-radius: 100%;

          cursor: pointer;
        }
      }
    }
  }
</style>