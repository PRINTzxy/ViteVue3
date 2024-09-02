<script setup>

//异步，第二版

  import axios from 'axios'
  import { onMounted,reactive } from 'vue';
  let jsonData =reactive({code:1,content:'我努力不是为了你而是因为你'})
  let getLoveWords = async ()=>{
    return await axios({
      method:"post",
      url:"https://api.uomg.com/api/rand.qinghua?format=json",
      data:{
        username:"123456"
      }
    })
  }
  let getLoveMessage = async ()=>{
   	 let {data}  = await getLoveWords()
     console.log([data]);

     //jsonData.content = data.content;
     //Object.assign(message,data) //复制data到message，因为message是未定义的，所以报错
     Object.assign(jsonData,data)

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