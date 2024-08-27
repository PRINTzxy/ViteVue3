<script setup>
    import { ref } from "vue";
    
    let msg ='hello vue3'
    let getMsg= ()=>{
        return msg
    }
    let age = 19
    let bee = '蜜 蜂'
    let redMsg ='<font color=\'red\'>msg</font>'
    let greenMsg =`<font color=\'green\'>${msg}</font>`
</script>

<template>
    <div>
        <span v-text="msg"></span><br>
        <span v-text="getMsg"></span><br>
        <span v-text="age"></span><br>
        <span v-text="bee"></span><br>
        <span v-text="redMsg"></span><br>
        <span v-text="greenMsg"></span><br>
        <span v-html="msg"></span><br>
        <span v-html="getMsg"></span><br>
        <span v-html="age"></span><br>
        <span v-html="bee"></span><br>
        <span v-html="redMsg"></span><br>
        <span v-html="greenMsg"></span><br>
        <span v-html="`<font color='green'>${msg}</font>`"></span>

    </div>
</template>

<style>

</style>