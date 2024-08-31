<script setup>
  import {ref} from 'vue'
  import {useRoute,useRouter} from 'vue-router'

  let route = useRoute()
  let router = useRouter()

  let username = window.localStorage.getItem('username')
  let logout = () => {
    window.localStorage.removeItem('username')

    router.push("/login")
  }
 
</script>

<template>
  
  <div>
    <h1>Home页面</h1>
    <h3>欢迎{{username}}登录</h3>
    <button @click="logout">退出登录</button>
  </div>

</template>

<style scoped>



</style>
