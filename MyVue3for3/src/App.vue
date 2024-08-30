<script setup>
/* import Home from './components/Home.vue'
import List from './components/List.vue'
import TestRedirect from './components/TestRedirect.vue'
import TestRedirect2 from './components/TestRedirect2.vue' */

import {ref} from 'vue'
import {useRouter} from 'vue-router'
//创建动态路由对象
let router = useRouter()
let routePath=ref('')
let showTestRedirect2=()=>{
  router.push({path:'/testRedirect2'})
}



</script>

<template>
  <div>
    <div>
      <!-- <Home></Home>
      <List></List> -->

      <router-link to="/">默认Home页</router-link><br>
      <router-link to="/home">Home页</router-link><br>
      <router-link to="/list">List页</router-link><br>
      <router-link to="/testRedirect">TestRedirect页</router-link><br>

      <!-- 声明式重定向的List页 -->
      <router-link to="/showList">重定向到List页</router-link><br>
      <!-- 声明式重定向的TestRedirect页 -->
      <router-link to="/showTestRedirect">重定向到TestRedirect页</router-link><br>
      

      <br>
      <br>
      <router-view>默认展示位置:</router-view>
      <hr> Home视图展示:<router-view name="homeView"></router-view>
      <hr> List视图展示:<router-view name="listView"></router-view>
      <hr> List视图展示:<router-view name="testRedirectView"></router-view>
    </div>

    <!-- 编程式路由重定向 -->
    <div>
      <h1 style="color:red">动态路由-编程式路由</h1>
      <hr>
        <router-link to="/">home页</router-link><br>
        <router-link to="/testRedirect2">TestRedirect2页</router-link><br>
        <button @click="showTestRedirect2()">showTestRedirect2</button><br>
      <hr>
      <hr>默认展示位置:<router-view></router-view><br>
      <hr>Home视图展示:<router-view name="homeView"></router-view>
      <hr>TestRedirect视图展示:<router-view name="testRedirectView2"></router-view>

    </div>

  </div>

</template>

<style scoped>

</style>
