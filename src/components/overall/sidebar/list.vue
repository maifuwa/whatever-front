<script setup>

import {ref} from "vue";
import router from "@/router";

const props = defineProps(['guides'])
let selected = ref('index');

function jump(select) {
  selected.value = select;
  if (select !== 'index' && select !== 'profile') {
    select = 'developed';
  }
  router.push({name: select});
}

</script>

<template>
  <div class="list " v-for="guide in props.guides" :class="{selected: selected === guide}" @click="jump(guide)">
      <img src="../../../assets/icons/house.svg" alt="icon"> {{guide}}
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