<script setup>
import Welcome from "./welcome.vue";
import {useMessage} from "naive-ui";
import {doSign, getSignCode} from "../../../api/userInfo";
import {useUserStore} from "../../../store/user";
import {useRouter} from "vue-router";

const formRef = ref(null);
const formValue = ref({
  name: '',
  email: '',
  password: '',
  code: ''
});

const autoEmailOption = computed(() => {
  return ["@qq.com", "@mailto.plus", "@163.com"].map((suffix) => {
    const prefix = formValue.value.email.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix
    };
  })
});

const rules = {
  name: {
    required: true,
    validator(rule, value) {
      if (!value) {
        return new Error("需要用户名")
      } else if (value.length > 10) {
        return new Error("名字不能超过10个字符")
      }
    },
    trigger: ["input", "blur"]
  },
  email: {
    required: true,
    validator(rule, value) {
      if (!value) {
        return new Error("需要邮箱");
      } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(value)) {
        return new Error("邮箱格式错误")
      }
    },
    trigger: ["input", "blur"]
  },
  password: {
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
  },
  code: {
    required: true,
    validator(rule, value) {
      if (!value) {
        return new Error("需要验证码");
      } else if (value.length !== 6) {
        return new Error("验证码错误");
      }
    },
    trigger: ["input", "blur"]
  }
}

const message = useMessage();
const userStore = useUserStore();
const router = useRouter();

function signUp(e) {
  e.preventDefault();

  formRef.value?.validate((error) => {
    if (error) {
      message.error("注册失败，请检查表单数据是否有误");
    } else {
      doSign(formValue.value.name, formValue.value.email, formValue.value.password, formValue.value.code)
          .then(res => {
            if (res.code === 200) {
              message.success("注册成功,欢迎：" + res.data.name);
              userStore.login(res.data.token, res.data.name, res.data.avatarUrl, res.data.introduction);
              router.push("/profile/userInfo");
            } else {
              message.error(res.message);
            }
          })
    }
  })
}

function getCode(e) {
  e.preventDefault();
  getSignCode(formValue.value.email)
      .then(res => {
        if (res.code === 200) {
          message.success(res.data);
        } else {
          message.error(res.message);
        }
      })
}
</script>

<template>
  <welcome/>
  <n-form
      ref="formRef"
      :label-width="'auto'"
      :model="formValue"
      :rules="rules"
      @submit="signUp"
      class="mx-auto w-1/3"
  >

    <n-form-item label="账户名" path="name">
      <n-input v-model:value="formValue.name" type="text" placeholder="请输入账户名"/>
    </n-form-item>

    <n-form-item label="邮箱" path="email">
      <!--      <n-input v-model:value="formValue.email" type="text" placeholder="请输入邮箱"/>-->
      <n-auto-complete
          v-model:value="formValue.email"
          :options="autoEmailOption"
          placeholder="请输入邮箱"
      />
    </n-form-item>

    <n-form-item label="密码" path="password">
      <n-input v-model:value="formValue.password" type="password" placeholder="请输入密码"/>
    </n-form-item>

    <n-form-item label="验证码" path="code">
      <n-input v-model:value="formValue.code" type="text" placeholder="请输入验证码"/>
      <n-button class="ml-4" @click="getCode" :disabled="!formValue.email">获取验证码</n-button>
    </n-form-item>

    <n-button class="w-full h-10" attr-type="submit" round>
      注册
    </n-button>
  </n-form>

  <n-space vertical align="center" class="text-sm mt-5">
    <div>已有账号?
      <router-link to="login" class="text-cyan-400">点击登录</router-link>
    </div>
  </n-space>
</template>

<style scoped>

</style>