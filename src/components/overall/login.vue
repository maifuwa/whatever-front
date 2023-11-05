<script setup>

import {inject, ref} from "vue";
import {useAccountStore} from "@/store/useAccountStore";
import {doLogin, getSignCode, signUp} from "@/api/userInfo";

const changeLoginShow = inject('changeLoginShow');
const isLoginShow = inject('isLoginShow');
const accountStore = useAccountStore();
const isLogin = ref(true);

const form = ref({
  username: '',
  password: '',
  email: '',
  code: ''
});

const errMessage = ref('');

const onLogin = (e) => {
  e.preventDefault();
  // TODO: check out input
  doLogin(form.value.username, form.value.password)
      .then(res => {
        if (res.code === 200) {
          accountStore.login(res.data.token, res.data.name, res.data.avatarUrl, res.data.introduction);
          changeLoginShow();
        }else {
          errMessage.value = res.message;
        }
      })
}

const onSign = (e) => {
  e.preventDefault();
  // TODO: check out input
  signUp(form.value.email, form.value.username, form.value.password, form.value.code)
      .then(res => {
        if (res.code === 200) {
          accountStore.login(res.data.token, res.data.name, res.data.avatarUrl, res.data.introduction);
          changeLoginShow();
          console.log("你好你好")
        }else {
          errMessage.value = res.message;
        }
      })
}

const getCode = (e) => {
  e.preventDefault();
  e.stopPropagation();
  // TODO: check out email
  getSignCode(form.value.email)
      .then(res => {
        if (res.code === 200) {
          errMessage.value = res.data;
        }else {
          errMessage.value = res.message;
        }
      })
}
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
     <div class="err">{{errMessage}}</div>
     <form @submit="onLogin($event)">
       <input type="text" placeholder="用户名/邮箱" v-model="form.username">
       <input type="text" placeholder="密码" v-model="form.password">
       <button type="submit">登录</button>
     </form>

     <p>没有账号？<span @click="isLogin = !isLogin">注册一个吧~</span></p>
   </div>

    <div class="onSign" v-else>
      <div class="err">{{errMessage}}</div>
      <form @submit="onSign($event)">
        <input type="text" placeholder="邮箱" v-model="form.email">
        <input type="text" placeholder="用户名" v-model="form.username">
        <input type="text" placeholder="密码" v-model="form.password">
        <div class="code">
          <input type="text" placeholder="验证码" v-model="form.code">
          <button @click="getCode($event)">获取验证码</button>
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