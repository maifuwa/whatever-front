<script setup>
import {onMounted, ref} from "vue";

let articles = ref({});

onMounted(async () => {
  // TODO: 获取推荐文章
  let response = await fetch('/static/article.json');
  let json = await response.json();
  articles.value = json.data;
})

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