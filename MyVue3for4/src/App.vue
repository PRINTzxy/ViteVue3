<script setup>
import {useRouter} from 'vue-router'

let router = useRouter()
let showlist1 = (username,userPwd) => {
  router.push({name:"showlist1",params:{username:'jick',userPwd:'123456'}})
}
let showlist2 = (username,userPwd) => {
  router.push({path:"showlist2",query:{username:'tom',userPwd:'123456'}})
}
</script>

<template>
  <div>
    <router-link to="/showlist1/wangwu/123456">路径传参</router-link><br>
    <button @click="showlist1('wangwu','123456')">路径传参按钮</button>
    <hr>
    <router-view name="showlist1View"></router-view><br>
    <br>
    <br>
    <br>
    <router-link v-bind:to="{path:'/showlist2',query:{username:'yangliu',userPwd:'123456'}}">键值对传参</router-link><br>
    <button @click="showlist2('yangliu','123456')">键值对传参按钮</button>
    <hr>
    <router-view name="showlist2View"></router-view><br>

  </div>

</template>

<style scoped>

</style>
