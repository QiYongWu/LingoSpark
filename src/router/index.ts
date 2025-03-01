import { createRouter ,createWebHashHistory} from "vue-router";
import sign_in from '@/components/sign/sign_in.vue'
import sign_up from '@/components/sign/sign_up.vue'
import home from '@/components/home.vue'      //个人主页
import study from '@/components/study.vue'   //学习界面 
const router = createRouter(
    {
        history:createWebHashHistory(),
        routes:[
                   {
                    path:'/sign_in',
                    component:sign_in
                    },

                    {
                        path:'/sign_up',
                        component:sign_up
                    },

                    {
                        path:'/home',
                        component:home
                    },

                    {
                        path:'/study',
                        component:study
                    },

                ]
    }
)

export default router