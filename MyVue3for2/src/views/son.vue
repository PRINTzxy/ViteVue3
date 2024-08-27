<script setup>
    import {ref,isRef,defineProps} from 'vue'
    //声明父组件传递属性值
    defineProps({
        message:String ,
        title:Number
    })
</script>
<template>
    <div>
    <div>{{ message }}</div>
    <div>{{ title }}</div>
    </div>
</template>
<style>
</style>