<script setup>
import Welcome from "./welcome.vue";
import { useMessage } from "naive-ui"
import {doLogin} from "../../../api/userInfo";
import {useUserStore} from "../../../store/user";
import {useRouter} from "vue-router";

const formRef = ref(null);
const formValue = ref({
  name: '',
  password: ''
});

const rules = {
  name: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要邮箱或用户名")
        }
      },
      trigger: ["input", "blur"]
    }
  ],
  password: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要密码")
        } else if (value.length < 8) {
          return new Error("请输入至少8位的密码")
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
          return new Error("密码需要包含数字、大小写字母");
        }
      },
      trigger: ["input", "blur"]
    }
  ],
};

const message = useMessage();
const userStore = useUserStore();
const router = useRouter();
function login(e) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (errors) {
      message.error("登录失败，请检查表单数据是否有误");
    }else {
      doLogin(formValue.value.name, formValue.value.password)
          .then(res => {
            if (res.code === 200) {
              message.success("登录成功");
              userStore.login(res.data.token, res.data.name, res.data.avatarUrl, res.data.introduction);
              router.push("/profile/userInfo");
            }else {
              message.error(res.message);
            }
          })
    }
  });
}

</script>

<template>

  <welcome/>
  <n-form
      @submit="login"
      ref="formRef"
      :label-width="'auto'"
      :model="formValue"
      :rules="rules"
      class="mx-auto w-1/3"
  >

    <n-form-item label="账户名/邮箱" path="name">
      <n-input v-model:value="formValue.name" type="text" placeholder="请输入账户名/邮箱"/>
    </n-form-item>

    <n-form-item label="密码" path="password">
      <n-input v-model:value="formValue.password" type="password" placeholder="请输入密码"/>
    </n-form-item>

    <n-button class="w-full h-10" attr-type="submit" round>
      登录
    </n-button>
  </n-form>

  <n-space vertical align="center" class="text-sm mt-5">
    <div>没有账号?
      <router-link to="signup" class="text-cyan-400">点击注册</router-link>
    </div>
  </n-space>
</template>

<style scoped>

</style>