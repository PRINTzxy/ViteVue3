<script setup>
import { ref,onUpdated } from 'vue'
import { useRoute } from 'vue-router'

let route = useRoute()
let username = ref('')
let userPwd = ref('')

onUpdated(()=>{
  console.log('// 获取对象中的参数(通过params获取参数)');
  

  username.value = route.params.username
  userPwd.value = route.params.userPwd
  console.log(username.value)
  console.log(userPwd.value)
  
  
})

</script>

<template>

  <div>
        <h1>showlist1页面</h1>
        <h3>编号{{route.params.username}}:{{route.params.userPwd}}</h3>
        <br>
        <h3>编号{{username}}:{{userPwd}}</h3>
  </div>

</template>

<style scoped>

</style>
