<script setup>

//原版，第一版

  import axios from 'axios'
  import { onMounted,reactive } from 'vue';
  let jsonData =reactive({code:1,content:'我努力不是为了你而是因为你'})
  let getLoveMessage =()=>{
    axios({
      method:"post", // 请求方式
      url:"https://api.uomg.com/api/rand.qinghua?format=json",  // 请求的url
      data:{ // 当请求方式为post时,data下的数据以JSON串放入请求体,否则以key=value形式放url后
        username:"123456"
      }
    }).then( function (response){//响应成功时要执行的函数
      console.log(response)
      Object.assign(jsonData,response.data)
    }).catch(function (error){// 响应失败时要执行的函数
      console.log(error)
    })
  }
  /* 通过onMounted生命周期,自动加载一次 */
  onMounted(()=>{
    getLoveMessage()
  })
</script>

<template>
  <div>
    <h1>今日土味情话:{{jsonData.content}}</h1>
    <button  @click="getLoveMessage">获取今日土味情话</button>
  </div>
</template>

<style scoped>

</style>
