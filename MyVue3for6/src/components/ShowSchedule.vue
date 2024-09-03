<script setup>
import request from '../utils/request.js'
import {useRouter} from "vue-router"
import {defineUser} from '../store/userStore.js'
import {defineSchedule} from '../store/scheduleStore.js'
let router =useRouter()
let user = defineUser()
let schedule = defineSchedule()

import {onMounted,onUpdated,ref,reactive} from 'vue'

let uid = user.uid

//根据用户uid查询所有日程信息
async function showSchedule(){
  try {
    let {data} = await request.get('/schedule/findAllSchedule/'+uid)
    schedule.itemList = data.data.itemList
  } catch (error) {
    alert('查询所有日程信息错误')
    console.log(error);
    
  }
}

onMounted(async function(){
  showSchedule()
})

//数据回显
let editSchedule=function(sid){
  router.push({path:"/edit",query:{"sid":sid}})
}




//删除日程
async function removeItem(sid){
  console.log(sid)
  
  if(confirm('确定要删除该数据么')){
    try {
      await request.delete('/schedule/removeSchedule/'+sid)
      showSchedule()
    } catch (error) {
      alert('删除失败')
    }
  }
}
</script>

<template>

  <div>
    <h3 class="ht">您的日程如下</h3>
    <table class="tab" cellspacing="0px">
      <tr class="ltr">
        <th>编号</th>
        <th>内容</th>
        <th>进度</th>
        <th>操作</th>
      </tr>
      <tr class="ltr" v-for="item,index in schedule.itemList" :key="index">
        <td>{{index+1}}</td>
        <td><input type="text" v-model="item.title"></td>
        <td>
          <input type="radio" value="1" v-model="item.completed">已完成
          <input type="radio" value="0" v-model="item.completed">未完成
        </td>
        <td class="buttonContainer">
          <button class="btn1" @click="removeItem(item.sid)">删除</button>
          <button class="btn1" @click="editSchedule(item.sid)">保存修改</button>
        </td>
      </tr>
      <tr class="ltr buttonContainer">
        <td colspan="4">
          <router-link to="/add">
            <button class="btn1">新增日常</button>
          </router-link>  
        </td>
      </tr>
    </table>
  </div>

</template>

<style scoped>
        .ht{
            text-align: center;
            color: cadetblue;
            font-family: 幼圆;
        }
        .tab{
            width: 80%;
            border: 5px solid cadetblue;
            margin: 0px auto;
            border-radius: 5px;
            font-family: 幼圆;
        }
        .ltr td{
            border: 1px solid  powderblue;

        }
        .ipt{
            border: 0px;
            width: 50%;

        }
        .btn1{
            border: 2px solid powderblue;
            border-radius: 4px;
            width:100px;
            background-color: antiquewhite;

        }
        #usernameMsg , #userPwdMsg {
            color: gold;
        }
        .buttonContainer{
            text-align: center;
        }
</style>
