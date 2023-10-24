<script setup>

</script>

<template>
  <div class="top">
    <div class="pagName">首页</div>
    <div class="content">
        <div class="uer">
          <img src="../../assets/avatars/head.png" alt="avatar">
          <div class="username">maifuwa</div>
        </div>
        <i>
          <img src="../../assets/icons/group.svg" alt="message">
        </i>
      </div>
  </div>
</template>

<style scoped>
  .top{
    width: 100%;
    height: 100%;

    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 60px;

    border-bottom: 2px #15191C solid;

    .pagName {
      font-size: 30px;
      font-weight: bold;
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .uer {
        width: 120px;
        cursor: pointer;

        display: flex;
        align-items: center;
        img {
          width: 32px;
          height: 32px;

          margin-right: 10px;
        }
      }
      i {
        width: 100px;
        text-align: center;
        border-left: 1px white solid;
      }
    }
  }

</style>