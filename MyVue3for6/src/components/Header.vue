<script setup>
import {ref} from 'vue'
import {defineUser} from '../store/userStore.js'
import {defineSchedule} from '../store/scheduleStore.js'

let user = defineUser()
let schedule = defineSchedule()

import {useRouter} from 'vue-router'
const router = useRouter()

// let username = ref('')
// username.value = localStorage.getItem("username")

//退出登录接口
function logout(){
  user.$reset()
  schedule.$reset()
  router.push('/login')
}
</script>

<template>

  <div>
    <h1 class="ht">欢迎使用日程管理系统</h1>
    <div>
      <div class="optionDiv" v-if="user.username ==''">
        <router-link to="/login">
          <button class="b1s">登录</button>
        </router-link>
        <router-link to="/regist">
          <button class="b1s">注册</button>
        </router-link>
      </div>
      <div class="optionDiv" v-else>
        欢迎 {{user.username}}
        <button class="b1b" @click="logout()">退出登录</button>
        <router-link to="/showSchedule">
          <button class="b1b">查看我的日程</button>
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>
.ht {
  text-align: center;
  color: cadetblue;
  font-family: 幼圆;
}
.b1s {
  border: 2px solid powderblue;
  border-radius: 4px;
  width: 60px;
  background-color: antiquewhite;
}
.b1b {
  border: 2px solid powderblue;
  border-radius: 4px;
  width: 100px;
  background-color: antiquewhite;
}
.optionDiv {
  width: 300px;
  float: right;
}
</style>
