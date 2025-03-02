import { createRouter ,createWebHashHistory,createWebHistory} from "vue-router";
import sign_in from '@/components/pages/sign/sign_in.vue'
import sign_up from '@/components/pages/sign/sign_up.vue'
import home from '@/components/home.vue'      //个人主页
import buildTeam from '@/components/pages/buildTeam.vue'
import classesCenter from '@/components/pages/classesCenter.vue'
import scenarioSimulatio from '@/components/pages/scenarioSimulatio.vue'
import practiceCenter from '@/components/pages/practiceCenter.vue'
import aboutSociety from '@/components/pages/aboutSociety.vue'
import userCenter from '@/components/pages/userCenter.vue'
const router = createRouter(
    {
        // history:createWebHashHistory(), 后台管理系统使用
        history : createWebHistory(),//主营用户界面用
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
                        path:'/build-team',
                        component:buildTeam
                    },

                    {
                        path:'/classes-center',
                        component:classesCenter
                    },

                    {
                        path:'/scenario-simulatio',
                        component:scenarioSimulatio
                    },

                    {
                        path:'/practice-center',
                        component:practiceCenter
                    },

                    {
                        path:'/about-society',
                        component:aboutSociety
                    },

                    {
                        path:'/user-center',
                        component:userCenter
                    },


                ]
    }
)

export default router