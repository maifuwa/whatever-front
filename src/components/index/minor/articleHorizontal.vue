<script setup>

import {ref} from "vue";

let articles = ref([
  {
    "title": "这是一篇测试文章",
    "author": "测试1",
    "image": "src/assets/images/article/article1.svg",
    "release": "2023/10/26"
  },
  {
    "title": "这也是一篇测试文章",
    "author": "测试2",
    "image": "src/assets/images/article/article2.svg",
    "release": "2023/10/26"
  }
]);

</script>

<template>
  <div class="article" v-for="a in articles">
    <img :src="a.image" alt="">
    <div class="introduction">
      <div class="author">
        {{a.author}}
      </div>
      <div class="title">
        {{a.title}}
      </div>
      <div class="time">
        {{a.release}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>