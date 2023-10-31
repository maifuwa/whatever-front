<script setup>

import {useAccountStore} from "@/store/useAccountStore";

const avatarUrl = useAccountStore().user.avatarUrl

</script>

<template>
  <div class="avatar">
    <img :src="avatarUrl" alt="avatar">
    <img src="../../../assets/images/icons/pen2.svg" alt="edit">
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 80%;

  position: relative;
  img:first-child {
    width: 100%;
    border-radius: 100%;
  }
  img:last-child {
    width: 12%;

    padding: 1%;
    background-color: white;
    border-radius: 100%;

    position: absolute;
    top: 80%;
    left: 80%;
  }
}
</style>