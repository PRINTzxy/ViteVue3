import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:"/home"
        }
    ]
})

router.beforeEach((to,from,next)=>{
    
    console.log(`从哪里来:${from.path},到哪里去:${to.path}`)
    if (to.path == '/login') {
        next()
    } else {
        let username = window.localStorage.getItem('username')
        if (null != username) {
            next()
        } else {
            next('/login')
        }
    }
    
})

router.afterEach((to,from)=>{
    console.log(`从哪里来:${from.path},到哪里去:${to.path}`)
    
})

export default router