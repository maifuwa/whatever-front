<script setup>
import {useAccountStore} from "@/store/useAccountStore";

const user = useAccountStore().user;
</script>

<template>
  <div class="userShow">
    <div class="username">
      {{user.name}}
    </div>
    <div class="introduction">
      {{user.introduction}}
    </div>

    <div class="btn">
      <button @click="$emit('edit-info')">编辑</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.userShow {
  width: 100%;

  display: flex;
  flex-direction: column;
  .username {
    font-size: 30px;
  }
  .introduction {
    margin: 10% 0;
  }
  button {
    background-color: #2C343A;
    border: none;
    border-radius: 5%;
  }
}
</style>