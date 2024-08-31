<script setup>
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'

  let username = ref('')
  let userPwd = ref('')
  let router = useRouter();

  let login = () => {
    if(username.value=='root' & userPwd.value=='123456'){
      console.log('-------------------')
      router.push({path:'/home',query:{username:username.value}});
      console.log('--------------------')

      localStorage.setItem('username',username)
    }else{
      alert('登录失败，账号或者密码错误！')
    }
  }

</script>

<template>
  
  <div>
    账号： <input type="text" v-model="username" placeholder="请输入账号！"><br>
    密码： <input type="password" v-model="userPwd" placeholder="请输入密码！"><br>
    <button @click="login()">登录</button>
  </div>

</template>

<style scoped>



</style>
