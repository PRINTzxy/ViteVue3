<script setup>
    import { ref } from "vue";
    
    let counter = 0 //默认为非响应式
    //let counter = ref(0) //响应式
    function show(){
        alert(counter) //默认非响应式使用
        //alert(counter.value) //响应式使用
    }

</script>

<template>
    <div>
        <button @click="counter--">-</button> 
        {{ counter }} 
        <button @click="counter++">+</button>
        <hr>
        <!-- 此案例,我们发现counter值,会改变,但是页面不改变! 默认Vue3的数据是非响应式的!-->
            <button @click="show">显示counter的值</button>
        </div>
</template>

<style>

</style>