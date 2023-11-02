<script setup>

import {inject} from "vue";
import dayjs from "dayjs";

const weekZh = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

const props = defineProps(['weekNum']);
const startDays = inject('startDays');

function formatDate(index) {
  return startDays.add(props.weekNum, 'week').add(index, 'day').format('YYYY-M-D')
}

function now (index) {
  return dayjs().format('YYYY-M-D') === formatDate(index);
}
</script>

<template>
  <div class="showWeek">
    <div class="before" @click="$emit('sub-week')">
      <img src="../../../assets/images/icons/before.svg" alt="before">
    </div>

    <div class="week">
      <h2>第{{weekNum}}周</h2>
      <div class="specific">
        <div v-for="(week, index) in weekZh" :class="{now: now(index)}">
          <p>{{week}}</p>
          <p>{{formatDate(index)}}</p>
        </div>
      </div>
    </div>

    <div class="after" @click="$emit('add-week')">
      <img src="../../../assets/images/icons/after.svg" alt="after">
    </div>

  </div>


</template>

<style scoped lang="scss">
.showWeek {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .before,
  .after{
    width: 2%;
    border-radius: 5%;
    writing-mode: vertical-lr;
    background-color: white;
  }
  .week {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 20px;
      margin-bottom: 2%;
    }
    .specific {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      div {
        font-size: 16px;
        p:first-child {
          font-size: 18px;
          margin-bottom: 2%;
        }
      }
      .now {
        color: #0480DC;
      }
    }

  }
}
</style>