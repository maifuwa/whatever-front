<script setup>
import Topbar from "@/components/overall/topbar.vue";
import {ref} from "vue";

const name = ref('index');

</script>

<template>

  <topbar :name="name" />

<!--  <topbar/>-->

<!--  <div class="index">-->

<!--    <div class="main">-->
<!--      <div class="banner">-->
<!--        <img src="../assets/arte.svg" alt="banner">-->
<!--        <div class="content">-->
<!--          <h3>Vídeo em destaque</h3>-->
<!--          <h2>HZC - Life is... / 2021</h2>-->
<!--          <div class="admin">-->
<!--            <img src="../assets/avatars/head.png" alt="header">-->
<!--            <span>maifuwa</span>-->
<!--          </div>-->
<!--          <div class="browse">-->
<!--            <span><img src="../assets/icons/time.svg" alt=""> 33分钟</span>-->
<!--            <span><img src="../assets/icons/eye.svg" alt=""> 53次观看</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <span class="btn">-->
<!--          <img src="../assets/icons/vector.svg" alt="">-->
<!--          播放-->
<!--        </span>-->
<!--      </div>-->

<!--      <div class="brief">-->

<!--      </div>-->

<!--    </div>-->

<!--    <div class="content">-->

<!--    </div>-->

<!--    <div class="minor">-->
<!--      <div class="brief">-->

<!--      </div>-->

<!--      <div class="banner">-->

<!--      </div>-->

<!--    </div>-->



<!--  </div>-->
</template>

<style scoped>

</style>