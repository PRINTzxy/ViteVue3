import {createRouter,createWebHashHistory} from 'vue-router'
import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
import ShowSchedule from '../components/ShowSchedule.vue'
import Add from '../components/addSchedule.vue'
import Edit from '../components/editSchedule.vue'


import pinia from '../utils/pinia.js'
import {defineUser} from '../store/userStore.js'
let user = defineUser(pinia)


let router = createRouter({
    history:createWebHashHistory(),
    routes:[{
        path:'/login',
        component:Login
    },
    {
        path:'/regist',
        component:Regist
    },
    {
        path:'/showSchedule',
        component:ShowSchedule
    },
    {
        path:'/',
        component:Login
    },
    {
      path:"/add",
      component:Add
    },
    {
     path:"/edit",
     component:Edit
   }]
})


router.beforeEach((to,from,next)=>{
    //查看日程
    if(to.path=='/showSchedule'){
        //尚未登陆
        if (user.username == ''){
            alert('您尚未登陆，请先登录')
            next('/login')
        }else{
            next()
        }
    }else{
        next()
    }
})



export default router;