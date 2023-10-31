<script setup>

import {useAccountStore} from "@/store/useAccountStore";
import Schedule from "@/components/profile/classSchedule/schedule.vue";
import {computed} from "vue";

const accountStore = useAccountStore();

const isLogin = computed(() => {
  // TODO: 判断是否登陆
  return false;
})

</script>

<template>
  <div class="classSchedule">
    <div v-if="isLogin" class="noLogin">
      <h2>登陆获取课程表</h2>
      <div>
        点击 <span>登陆</span> or <span>注册</span>
      </div>
    </div>

    <div v-else class="login">
      <h2>课程表</h2>
      <schedule />
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