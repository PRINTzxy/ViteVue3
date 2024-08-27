<script setup>
    import Son11 from './son1.vue'
    import {ref} from 'vue'
    let pdata = ref('')
    const padd = (data) => {
        console.log('2222');
        pdata.value =data;
    }
    //自定义接收，子组件传递数据方法！ 参数为数据！
    const psub = (data) => {
        console.log('11111');
        pdata.value = data;
    }
</script>
<template>
    <div>
        <!-- 声明@事件名应该等于子模块对应事件名！调用方法可以是当前自定义！-->
        <Son11 @add="padd" @sub="psub"></Son11>
        <hr>
        {{ pdata }}
    </div>
</template>
<style>
</style>