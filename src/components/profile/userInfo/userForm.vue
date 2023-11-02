<script setup>

import {ref} from "vue";
import {useAccountStore} from "@/store/useAccountStore";

const emit = defineEmits(['edit-info']);
const accountStore = useAccountStore();

const form = ref({
  username: accountStore.user.name,
  introduction: ''
});

const changeProfile = function (e) {
  e.preventDefault();
  // TODO: 网络请求修改用户名和用户简介

  accountStore.changeUserInfo(form.value.username, form.value.introduction);
  emit('edit-info')
}
</script>

<template>
  <div class="userForm">
    <form @submit="changeProfile($event)">
      <div>
        <p>名字</p>
        <input name="username" v-model="form.username" type="text">
      </div>

      <div>
        <p>世界宣言</p>
        <textarea name="introduction" v-model="form.introduction" placeholder="大胆的喊出你的期盼吧!" ></textarea>
      </div>

      <div class="btn">
        <button type="submit">提交</button>
        <button @click="$emit('edit-info')">取消</button>
      </div>

    </form>
  </div>
</template>

<style scoped lang="scss">
.userForm {
  width: 100%;

  form {
    p {
      font-size: 20px;
      margin: 1% 0;
    }
    input,
    textarea {
      background-color: #2C343A;
      border: 1px white solid;
    }
    .btn {
      margin: 3% 0;
      display: flex;
      justify-content: space-between;

      button:first-child {
        margin-right: 5%;
      }

      button {
        flex: 1;
        border: none;
        border-radius: 5%;
        background-color: #2C343A;
      }
    }
  }
}
</style>