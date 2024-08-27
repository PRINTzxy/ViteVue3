<script setup>
    import { ref,reactive,watch } from "vue"
    let xing=ref('')
    let ming=reactive({name:''})
    let xingming = ref('')

    //监听一个ref响应式数据
    watch(xing,(newvalue,oldvalue)=>{
        console.log(`${oldvalue}变为${newvalue}`)
        xingming.value=xing.value+ming.value
    })
    //监听reactive响应式数据的指定属性
    watch(()=>ming.name,(newvalue,oldvalue)=>{
        console.log(`${oldvalue}变为${newvalue}`)
        xingming.value=xing.value+ming.value
        
    })

    //监听reactive响应式数据的所有属性(深度监视,一般不推荐)
    //deep:true 深度监视
    watch(()=>ming,(newvalue,oldvalue)=>{
        console.log(newvalue,oldvalue);
        xingming.value=xing.value+ming.name
    },{deep:true,immediate:false}) //immediate:true 深度监视在进入页面时立即执行一次
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