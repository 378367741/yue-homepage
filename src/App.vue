<script setup>
import { ref, reactive } from 'vue';
import Mouse from "./page/Mouse.vue";

const au = ref(null);
const isPlaying = ref(false);
const showPopover = ref(false);

const methods = reactive({
  handleMouseEnter() {
    showPopover.value = true;
  },
  handleMouseLeave() {
    showPopover.value = false;
  },
  togglePlayback() {
  if (au.value.paused) {
    au.value.play();
    isPlaying.value = true;
  } else {
    au.value.pause();
    isPlaying.value = false;
  }
}
});



</script>

<template>
  <div class="background"></div>
  <Mouse></Mouse>

  <router-view />
  <router-view name="right" style="-webkit-backface-visibility: hidden"></router-view>
  <audio src="http://music.163.com/song/media/outer/url?id=1500151640.mp3" loop autoplay ref="au"></audio>


  <div class="animechara" @click="methods.togglePlayback" @mouseenter="methods.handleMouseEnter" @mouseleave="methods.handleMouseLeave">
    <div v-if="showPopover" class="popover">
      点我
    </div>
    <div class="chara"></div>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /*放在最下层*/
  z-index: -1;
  background-image: url("../public/assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position: left center;
  background-attachment: fixed;
  animation: backgroundAnimation 10s linear infinite;
}

@keyframes backgroundAnimation {

  0%,
  100% {
    background-position: left center;
  }

  50% {
    background-position: right center;
  }

}

.animechara {
  display: block;
  width: 130px;
  height: 190px;
  position: fixed;
  bottom: 0px;
  left: 10px;
  z-index: 9999;
}

.chara {
  width: 130px;
  height: 190px;
  background: url(https://patchwiki.biligame.com/images/arknights/e/e0/5jq0o7rm7rj90qxsvreu0m6moaplgdg.gif) no-repeat;
  background-size: contain;
  position: relative;
}

/*夜间模式*/
.dark .background {
  background-image: radial-gradient(circle, rgba(58, 58, 58, 0.20) 2px, transparent 0);
}

.popover {
  position: absolute;
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  left: 100px;
}
</style>
