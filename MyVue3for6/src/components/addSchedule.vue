<script setup>
 import {ref,reactive} from "vue"
 import {defineUser} from "../store/userStore.js"
 let userStore = defineUser()
 import request from "../utils/request.js"
 import {useRouter} from "vue-router"

 let router=useRouter();
  let schedule=ref({
         title:'',
         completed:0,
         uid: userStore.uid
  })

 let addDefaultSchedule=async()=>{
    try {
        
        await request.post("/schedule/addDefaultSchedule",schedule.value);
        alert("添加成功");
       router.push("/showSchedule");
    } catch (error) {
         alert(error)
    }
 }
</script>

<template>
    <div >
        <table style="width: 50%; position: relative;left: 450px;top:100px" border="1">
              <tr>
                 <td>内容:<input type="text" name="内容" v-model="schedule.title"></td>
                 <td>进度:
                    <input type="radio" name="completed" value="0" checked v-model="schedule.completed">未完成
                    <input type="radio" name="completed" value="1" v-model="schedule.completed">已完成
                 </td>
                 <td> <button @click="addDefaultSchedule()" >提交</button></td>
              </tr>
        </table>
         
          <br>   
    </div>
</template>
<style>
</style>