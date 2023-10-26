<script setup>
import router from "@/router";
import { usePageStore } from '@/store/usePageStore'
const pageStore = usePageStore();

function jump(index) {
  pageStore.select(index);
  router.push({name: pageStore.page})
}

</script>

<template>
  <div class="list " v-for="(guide, index) in pageStore.guidesZh" :class="{'selected': index === pageStore.selected}" @click="jump(index)">
      <img src="../../../assets/images/icons/house.svg" alt="icon"> {{guide}}
  </div>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  height: 100%;

  font-weight: bold;

  display: flex;
  align-items: center;

  cursor: pointer;

  img {
    width: 16%;
    margin: 0 10%;
  }

}

.selected {
  border-left: 1px white solid;
}
</style>