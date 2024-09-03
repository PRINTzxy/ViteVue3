<script setup>
 import {ref,reactive,onMounted} from "vue"
 import {defineUser} from "../store/userStore.js"
 let userStore = defineUser()
 import request from "../utils/request.js";
 import {useRouter,useRoute} from "vue-router"

 let router=useRouter();
 let route=useRoute();

 let schedule=reactive({
         title:'',
         completed:0,
         uid: userStore.uid,
         sid:0
  })

//根据sid查询日程信息的方法
async function getScheduleBySid(){
   let{data}= await request.get("/schedule/getScheduleBySid?sid="+route.query.sid)
    schedule.title=data.data.title;
    schedule.completed=data.data.completed;
    schedule.sid=data.data.sid;
    
    
}

//修改日程信息
async function updateSchedule(){
  try {

   let{data}= await request.get("/schedule/getScheduleBySid?sid="+route.query.sid)
   schedule.sid = data.data.sid
   await request.put("/schedule/updateSchedule",schedule);
   
   alert("修改成功");
   router.push("/showSchedule");
  } catch (error) {
     alert(error);
  }
}

onMounted(()=>{
    getScheduleBySid();
})

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
                 <td> <button @click="updateSchedule()" >提交</button></td>
              </tr>
        </table>
         
          <br>
        
    </div>
</template>
<style>
</style>