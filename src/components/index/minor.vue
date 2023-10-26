<script setup>

import ArticleHorizontal from "@/components/index/minor/articleHorizontal.vue";
</script>

<template>
  <div class="minor">
    <h3>文章推荐</h3>
    <div class="articles">
      <article-horizontal />
    </div>
  </div>
</template>

<style scoped lang="scss">
.minor {
  width: 100%;

  margin-bottom: 4%;
  h3 {
    font-size: 20px;
    margin-bottom: 1%;
  }

  .articles {
    display: flex;
    align-items: center;
  }
}
</style>