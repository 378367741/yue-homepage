<script setup>
import { onMounted, reactive, toRefs } from 'vue'
import { ref } from 'vue'
import RightPage from './RightPage.vue';

const state = reactive({
    circleUrl:
        'assets/cat.png',
})

const { circleUrl } = toRefs(state)

const radius = ref([
    {
        name: 'Large Radius',
        type: 'base',
    },
])

const socialLinks = ref([
    {
        url: 'https://github.com/378367741',
        icon: 'assets/icon/github.png',
    },
    {
        url: 'https://www.bilibili.com',
        icon: 'assets/icon/bilibili.png',
    },
    {
        url: 'https://www.qq.com',
        icon: 'assets/icon/qq.png',
    },
    {
        url: 'mailto:example@example.com',
        icon: 'assets/icon/email.png',
    },
    {
        url: 'https://prts.wiki/w/%E9%A6%96%E9%A1%B5',
        icon: 'assets/icon/ak.png'
    },
]);
</script>

<template>
   
    <div style="display: flex;flex-direction: row;">
        <div id="homePage" style="position: relative; top: -100px;">
            <el-avatar :size="120" :src="circleUrl" class="img" />
            <h1>{{ $t('homePage.title') }}</h1>
            <div class="line-container">
                <hr class="line" />
            </div>
            <p>这里是一个小辣鸡做的个人主页</p>

            <div class="radius" style="text-align: left;">
                <a v-for="link in socialLinks" :key="link.url" :href="link.url" target="_blank">
                    <img :src="link.icon" alt="Social Icon" />
                </a>
            </div>
        </div>
        <div class="rightPage">
            <div class="time">
                <RightPage />
            </div>
        </div>
    </div>
</template>

<style scoped>
.line-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.line {
    border: none;
    border-top: 2px solid #000;
    /* margin: 20px 0; */
    width: 500px;
}

p {
    color: white;
    font-weight: bold;
    font-size: 20px;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #4fbfec, 0 0 70px #4fbfec, 0 0 80px #4fbfec, 0 0 100px #4fbfec, 0 0 150px #4fbfec;
}

.img {
    transition: transform 1.0s;
}

.img:hover {
    cursor: pointer;
    transform: rotate(360deg);
}

.radius {
    height: 40px;
    width: 50%;
    border-radius: 0;
    margin-top: 20px;
}


.radius a img {
    height: 80%;
    margin: 2%;
}

.rightPage {
    display: flex;
    flex-direction: row;
    
}
</style>