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
   <div class="website">
      图标加文字
   </div>
   <div id="box1"></div>
   <div id="box2"></div>
   <div id="box3"></div>
   <div id="box4"></div>
   <div id="box5"></div>
   <div id="box6"></div>     
   </div>
</template>

<style scoped>

.right {
   width: 600px;
   height: 200px;
  
}

.time-container {
   float: right;
   
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
   border-radius: 50%;
   position: relative;
}

.time-container .time {
   font-size: 24px;
   font-weight: bold;
   color: #333;
   text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
   position: absolute;
   top: 80px;
   left: 50px;
}

.time-container .date {
   font-size: 24px;
   font-weight: bold;
   color: #333;
   text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
   position: absolute;
   top: 30px;
   left: 50px;
}

.aWord-container {
   text-align: center;
   float: left;
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
   border-radius: 50%;
   position: relative;
}

.aWord {
   font-size: 20px;
   font-weight: bold;
   position: absolute;
   top: 50px;
}
.website {
   background-color: rgba(255, 255, 255, 0.4);
   width: 100px;
   height: 40px;
   clear: both;
   float: left;
   margin-top: 20px;
   margin-left: 20px;
}

#box1{
   height: 200px;
   width: 200px;
   background-color:  rgba(255, 255, 255, 0.4);
   clear: both;
   float: left;
}
#box2{
   height: 200px;
   width: 200px;
   background-color: rgba(255, 255, 255, 0.4);
   float: left;
}
#box3{
   height: 200px;
   width: 200px;
   background-color:  rgba(255, 255, 255, 0.4);
   float: left;
}
#box4{
   height: 200px;
   width: 200px;
   background-color:  rgba(255, 255, 255, 0.4);
   float: left;
}
#box5{
   height: 200px;
   width: 200px;
   background-color: rgba(255, 255, 255, 0.4);
   float: left;
}
#box6{
   height: 200px;
   width: 200px;
   background-color:  rgba(255, 255, 255, 0.4);
   float: left;
}
</style>
 