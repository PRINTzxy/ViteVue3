<script setup>
    import { ref } from "vue";

// + `.once：只触发一次事件。[重点]`；
// + `.prevent：阻止默认事件。[重点]`；
// + .stop：阻止事件冒泡；
// + .capture：使用事件捕获模式而不是冒泡模式；
// + .self：只在事件发送者自身触发时才触发事件；

    // 响应式数据 当发生变化时,会自动更新 dom树
    let count = ref(0)
    let addcount=()=>{
        count.value++
        console.log(count.value);
        
    }

    let incrcount=(envent)=>{
        // 通过事件对象阻止组件的默认行为
        envent.preventDefault()
    }
</script>

<template>
    <div>
        <h1>count的值是:{{ count }}</h1>
        <button @click="addcount">addcount</button><br>

        <button @click="count++">incrcount</button><br>
        <!-- 事件修饰符 once 只绑定事件一次 -->
        <button @click.once="count++">incrcount</button><br>
        
        <!-- 事件修饰符 prevent 阻止组件的默认行为  不走href，去掉@click后的.prevent则走href -->
        <a href="http://www.atguigu.com" target="_blank" @click.prevent="count++">prevent1</a><br>
    
        <!-- 原生js方式阻止组件默认行为 (推荐) -->
        <a href="http://www.atguigu.com" target="_blank" @click="incrCount($event)">prevent2</a><br>
    </div>
</template>

<style>

</style>