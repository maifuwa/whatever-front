<script setup>
import {ref} from "vue";

const form = ref({
  password: '',
  course: ''
});

const upload = function (e) {
  e.preventDefault();

  // TODO: 提交课程表
  console.log("正在提交表单...");
}

</script>

<template>
  <div class="upload">
    <h3>暂未获取到您的课表，请先上传!</h3>
    <form @submit="upload($event)">
      <div>
        <p>邀请码:</p>
        <input type="text" name="password" v-model="form.password" >
      </div>

      <div>
        <p>课程json</p>
        <textarea name="course" v-model="form.course" rows="18" ></textarea>
      </div>

      <button type="submit">提交</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.upload {
  width: 100%;

  h3 {
    font-size: 28px;
    margin-bottom: 3%;
  }
  div {
    p {
      font-size: 18px;
      margin-top: 2%;
      margin-bottom: 1%;
    }
    input,
    textarea {
      width: 100%;
      background-color: #2C343A;
      border: 1px white solid;
    }
  }
  button {
    width: 10%;
    height: 5%;
    margin: 3% 0;
    background-color: #2C343A;
    border: none;
    border-radius: 5%;
  }
}
</style>