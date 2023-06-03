<script setup>
import { ref, onMounted } from 'vue';
import { getAWord } from '../tool/httpRequest';

const currentTime = ref('');
const currentDate = ref('');
const AWord = ref('');

onMounted(() => {
   getAWord((data) => {
      AWord.value = data;
   });
   updateTime();
   setInterval(updateTime, 1000);
   updateDate();
});

function updateTime() {
   const now = new Date();
   currentTime.value = now.toLocaleTimeString();
}

function updateDate() {
   const now = new Date();
   currentDate.value = now.toLocaleDateString();
}

</script>

<template>
   <div class="right">
      <div class="aWord-container">
         <p class="aWord">{{ AWord }}</p>
      </div>
      <div class="time-container ">
         <p class="date">{{ currentDate }}</p>
         <p class="time">{{ currentTime }}</p>
      </div>
   </div>
</template>

<style scoped>
.right {
   display: flex;
   flex-direction: row;
}

.time-container {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 200px;
   width: 200px;
   border-radius: 5px;
   backdrop-filter: blur(1px);
   /* 调整模糊程度 */
   background-color: rgba(255, 255, 255, 0.4);
   /* 调整背景颜色和透明度 */
   flex-direction: column;
   margin-left: 70px;
   margin-top: -130px;
}

.time-container .time {
   font-size: 24px;
   font-weight: bold;
   color: #333;
   text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.time-container .date {
   font-size: 24px;
   font-weight: bold;
   color: #333;
   text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.aWord-container {
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 200px;
   width: 200px;
   border-radius: 5px;
   backdrop-filter: blur(1px);
   /* 调整模糊程度 */
   background-color: rgba(255, 255, 255, 0.4);
   /* 调整背景颜色和透明度 */
   flex-direction: column;
   margin-left: 70px;
   margin-top: -130px;
}

.aWord {
   font-size: 20px;
   font-weight: bold;
}
</style>
 