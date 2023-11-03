<script setup>

import {useAccountStore} from "@/store/useAccountStore";
import Schedule from "@/components/profile/classSchedule/schedule.vue";
import {inject} from "vue";

const accountStore = useAccountStore();
const changeLoginShow = inject('changeLoginShow');
</script>

<template>
  <div class="classSchedule">

    <div  v-if="accountStore.isLogin" class="login">
      <h2>课程表</h2>
      <schedule />
    </div>

    <div v-else class="noLogin">
      <h2>登陆获取课程表</h2>
      <div @click="changeLoginShow">
        点击 <span>登陆</span> or <span>注册</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.classSchedule {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .noLogin {
    h2 {
      font-size: 30px;
      margin-bottom: 5%;
    }
    div {
      font-size: 18px;
      span {
        font-size: 20px;
        color: deepskyblue;
        cursor: pointer;
      }
    }

  }

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 30px;
      margin-bottom: 5%;
    }
  }


}
</style>