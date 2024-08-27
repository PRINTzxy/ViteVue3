<script setup>
    import { ref,reactive,watch, watchEffect } from "vue"
    let xing=ref('')
    let ming=reactive({name:''})
    let xingming = ref('')

    //监听所有响应式数据
    watchEffect(()=>{
        //直接在内部使用监听属性即可！不用外部声明
        //也不需要，即时回调设置！默认初始化就加载！
        console.log(xing.value);
        console.log(ming.name);
        xingming.value=`${xing.value}${ming.name}`
        
        
    })

</script>

<template>
    <div>
        全名:{{xingming}} <br>
        姓氏:<input type="text" v-model="xing"> <br>
        名字:<input type="text" v-model="ming.name" > <br>
    </div>
</template>

<style>

</style>