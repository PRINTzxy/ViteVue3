import {createRouter,createWebHashHistory} from 'vue-router'
import Showlist1 from '../components/showlist1.vue'
import Showlist2 from '../components/showlist2.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[{
        path:'/showlist1/:username/:userPwd',
        name:'showlist1',
        components:{
            showlist1View:Showlist1
        }
    },
    {
        path:'/showlist2',
        components:{
            showlist2View:Showlist2
        }
    }]
})

export default router;