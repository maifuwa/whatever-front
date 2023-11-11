<script setup>
import {useMessage} from "naive-ui";

const formRef = ref(null);
const message = useMessage();
const formValue = ref({
  name: '',
  password: ''
});
const rules = {
  name: {
    require: true,
    message: '请输入账户名或邮箱',
    trigger: 'blur'
  },
  password: {
    require: true,
    message: '请输入密码',
    trigger: ['input', 'blur']
  }
}

function handleValidateClick(e) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("通过验证");
    } else {
      message.success("验证不通过");
    }
  })
}
</script>

<template>
  <n-space vertical  class="text-xl pt-20">
    <n-space vertical align="center" class="pb-5">
      <h2 class="font-mono">furryKong</h2>
      <n-image
          width="80"
          src="/src/assets/images/logo.svg"
          preview-disabled
      />
      <h3 class="font-mono">我不是furryKong啊!!!</h3>
    </n-space>

    <n-form
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
      <div>没有账号?<router-link to="signup" class="text-cyan-400">点击注册</router-link></div>
    </n-space>
  </n-space>
</template>

<style scoped>

</style>