<script setup>

import {onMounted, ref} from "vue";

let articles = ref({});

onMounted(async () => {
  // TODO: 获取推荐文章
  let response = await fetch('/static/article.json');
  let json = await response.json()
  articles.value = json.data;
})

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
.article {
  margin-right: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5%;
  background-color: #2C343A;
  img {
    width: 100%;
  }
  .introduction {
    display: flex;
    flex-direction: column;

    padding: 5%;
    .author {
      font-size: 18px;
      color: #95999C;
    }
    .title {
      font-size: 28px;
      margin-top: 5%;
      margin-bottom: 10%;
    }
    .time {
      font-size: 14px;
      color: #95999C;
    }
  }
}
</style>