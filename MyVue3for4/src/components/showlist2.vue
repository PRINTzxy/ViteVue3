<script setup>
import { ref,onUpdated } from 'vue'
import { useRoute } from 'vue-router'

let route = useRoute()
let username = ref('')
let userPwd = ref('')

onUpdated(()=>{
  console.log('// 获取对象中的参数(通过query获取参数,此时参数是key-value形式的)')
  

  console.log(route.query)
  console.log(username.value)
  console.log(userPwd.value)

  username.value = route.query.username
  userPwd.value = route.query.userPwd
  
})
</script>

<template>

  <div>
        <h1>showlist2页面</h1>
        <h3>编号{{route.query.username}}:{{route.query.userPwd}}</h3>
        <br>
        <h3>编号{{username}}:{{userPwd}}</h3>
  </div>

</template>

<style scoped>

</style>
