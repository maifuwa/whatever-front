<script setup>

import ArticleVertical from "@/components/index/articleVertical.vue";
</script>

<template>
  <div class="main">
    <div class="banner">
      <img src="../../assets/images/banner1.svg" alt="">
      <div class="content">
        <div class="recommend">
          <div class="title">
            这是一个做着玩的网站，暂时没做功能
          </div>
          <div class="author">
            <img src="../../assets/images/avatars/head.png" alt="">
            maifuwa
          </div>
          <div class="time">
            2023/10/26
          </div>
        </div>

        <div class="btn">
          <img src="../../assets/images/icons/like.svg" alt="">
          赞一赞
        </div>
      </div>
    </div>

    <div class="article">
      <div class="header">
        <h4>文章推荐</h4>
        <span>刷新</span>
      </div>
     <div class="list">
       <article-vertical />
     </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.main {
  width: 100%;

  display: flex;
  justify-content: space-between;
  .banner {
    width: 70%;
    img {
      width: 100%;
    }
    .content {
      width: 100%;
      padding: 1% 0;

      border-radius: 10px;
      background-color: #2C343A;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .recommend {
        margin: 0 5%;
        .title {
          font-size: 30px;
        }
        .author {
          margin: 5% 0;
          font-size: 20px;
          display: flex;
          align-items: center;
          img {
            width: 8%;
            margin-right: 2%;
          }
        }
      }
      .btn {
        width: 15%;
        margin: 0 5%;

        cursor: pointer;

        border-radius: 5%;
        background-color: #0480DC;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 20%;
          margin: 10% 0;
        }
      }
    }
  }
  .article {
    width: 20%;

    border-radius: 2%;

    background-color: #2C343A;
    .header {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 5%;
      h4 {
        font-size: 20px;
      }
      span {
        font-size: 14px;
        color: deepskyblue;
        cursor: pointer;
      }
    }
    .list {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }

}
</style>