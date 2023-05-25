<script setup>

import { globalState } from "./global/globalState.js";
import Mouse from "./page/Mouse.vue";

</script>

<template>
  <div class="background" />
  <Mouse></Mouse>
  <router-view />
  <div class="animechara">
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
}</style>
