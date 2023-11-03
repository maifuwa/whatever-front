<script setup>

import {inject, ref} from "vue";
import {doLogin} from "@/api/userInfo";


const isLogin = ref(true);

const form = ref({
  username: '',
  password: '',
  email: '',
  code: ''
});

const onLogin = (e) => {
  e.preventDefault();
  console.log(doLogin(form.value.username, form.value.password))
}

const onSign = (e) => {
  e.preventDefault();
}

const getCode = () => {

}

const changeLoginShow = inject('changeLoginShow');
const isLoginShow = inject('isLoginShow')
</script>

<template>
  <div class="login" :class="{isLoginShow: isLoginShow}">

    <div class="out" @click="changeLoginShow">
      <img src="../../assets/images/icons/out.svg" alt="">
    </div>

    <div class="introduce">
      <h2>欢迎进入全球最大<span>交友</span>网站</h2>
      <img src="../../assets/images/logo.svg" alt="logo">
      <p>在这里你可以自由同性交友(异性站长优先，异形用户优先)</p>
    </div>

   <div class="onLogin" v-if="isLogin">
     <form @submit="onLogin($event)">
       <input type="text" name="username" placeholder="用户名/邮箱" v-model="form.username">
       <input type="text" name="password" placeholder="密码" v-model="form.password">
       <button type="submit">登录</button>
     </form>

     <p>没有账号？<span @click="isLogin = !isLogin">注册一个吧~</span></p>
   </div>

    <div class="onSign" v-else>
      <form @submit="onSign($event)">
        <input type="text" name="email" placeholder="邮箱" v-model="form.email">
        <input type="text" name="username" placeholder="用户名" v-model="form.username">
        <input type="text" name="password" placeholder="密码" v-model="form.password">
        <div class="code">
          <input type="text" name="code" placeholder="验证码" v-model="form.code">
          <button @click="getCode">获取验证码</button>
        </div>
        <button type="submit">注册</button>
      </form>

      <p>已有账号？<span @click="isLogin = !isLogin">直接登录~</span></p>
    </div>

  </div>
</template>

<style scoped lang="scss">
.login {
  width: 30%;
  height: 50%;

  position: absolute;
  top: 25%;
  left: 35%;

  color: white;
  border-radius: 2%;
  background-color: #2C343A;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1%;
  .introduce {
    margin-bottom: 5%;
  }

  .introduce,
  .onLogin,
  .onSign,
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      color: #0480DC;
      cursor: pointer;
    }
  }
  .introduce {
    h2 {
      font-size: 28px;
    }
    img {
      width: 18%;
      margin: 5% 0;
    }
  }
  form {
    input {
      width: 100%;
      background-color: #2C343A;
      border: 1px white solid;
      margin: 1% 0;
    }
    button {
      width: 40%;
      flex: 1;
      border: none;
      border-radius: 5%;
      background-color: #0480DC;
      margin: 5% 0;
    }
    .code {
      input {
        width: 65%;
        margin-right: 5%;
      }
      button {
        width: 30%;
        margin: 0;
      }
    }
  }

  .out {
    text-align: center;
    background-color: #0480DC;
    border-radius: 100%;

    position: absolute;
    top: 2%;
    left: 94%;

    cursor: pointer;
  }
}

.isLoginShow {
  display: none;
}
</style>