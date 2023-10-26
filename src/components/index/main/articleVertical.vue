<script setup>
import {ref} from "vue";

let articles = ref([
  {
    "title": "测试文章",
    "author": "作者",
    "image": "src/assets/images/article/article1.svg",
    "release": "2023/10/26"
  },
  {
    "title": "也是测试文章",
    "author": "作者",
    "image": "src/assets/images/article/article2.svg",
    "release": "2023/10/26"
  },
  {
    "title": "也是测试文章",
    "author": "作者",
    "image": "src/assets/images/article/article2.svg",
    "release": "2023/10/26"
  },
  {
    "title": "也是测试文章",
    "author": "作者",
    "image": "src/assets/images/article/article1.svg",
    "release": "2023/10/26"
  }
]);

</script>

<template>
  <div class="article" v-for="a in articles">
    <img :src="a.image" alt="">
    <div class="introduction">
      <div class="title">
        {{a.title}}
      </div>
      <div class="author">
        {{a.author}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article {
  width: 100%;

  display: flex;
  align-items: center;

  margin-bottom: 10%;
  img {
    width: 15%;
    margin: 0 5%;
  }
  .introduction {
    .title {
      font-size: 16px;
      margin-bottom: 10%;
    }
    .author {
      font-size: 14px;
    }
  }

}
</style>