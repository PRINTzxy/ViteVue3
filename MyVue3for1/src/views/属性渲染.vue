<script setup>
    import { ref } from "vue";
    const data = {
        name:'尚硅谷',
        url:"http://www.atguigu.com",
        logo:"http://www.atguigu.com/images/index_new/logo.png"
    }
</script>

<template>
    <div>
        <a v-bind:href='data.url' target="_self"> <!-- 将链接的内容显示在当前窗口中。(默认值) -->
            <img :src="data.logo">
            <input type="button" :value="`点击访问${data.name}`">
        </a>
    </div>
</template>

<style>

</style>