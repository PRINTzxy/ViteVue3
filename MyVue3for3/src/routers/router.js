import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import TestRedirect from '../components/TestRedirect.vue'
import TestRedirect2 from '../components/TestRedirect2.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            components:{
                default:Home,
                homeView:Home
            }
        },
        {
            path:'/home',
            components:{
                homeView:Home
            }
        },
        {
            path:'/list',
            components:{
                listView:List
            }
        },
        {
            path:'/testRedirect',
            components:{
                testRedirectView:TestRedirect
            }
        },
        {
            path:'/testRedirect2',
            components:{
                testRedirectView2:TestRedirect2
            }
        },
        {
            //声明式路由重定向
            path:'/showList',
            redirect:'/list'
        },
        {
            //声明式路由重定向
            path:'/showTestRedirect',
            redirect:'/testRedirect'
        },
        /* {
            //编程式路由重定向
            path:'/showTestRedirect2',
            redirect:'/testRedirect2'
        }, */
    ]
})

export default router;