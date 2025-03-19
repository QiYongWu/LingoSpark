import { createRouter ,createWebHashHistory,createWebHistory} from "vue-router";
import sign_in from '@/components/pages/sign/sign_in.vue'
import sign_up from '@/components/pages/sign/sign_up.vue'
import masterRobot from '@/components/masterRobot.vue'      //个人主页
import buildTeam from '@/components/pages/buildTeam.vue'
import classesCenter from '@/components/pages/classesCenter.vue'
import scenarioSimulation from '@/components/pages/scenarioSimulatio.vue'
import practiceCenter from '@/components/pages/practiceCenter.vue'
import aboutSociety from '@/components/pages/aboutSociety.vue'
import userCenter from '@/components/pages/userCenter.vue'

import detail1 from "@/components/pages/society-details/detail1.vue";
import detail2 from "@/components/pages/society-details/detail2.vue";
import detail3 from "@/components/pages/society-details/detail3.vue";
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
                        path:'/masterRobot',
                        component:masterRobot
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
                        path:'/scenario-simulation',
                        component:scenarioSimulation
                    },

                    {
                        path:'/practice-center',
                        component:practiceCenter
                    },

                    {
                        path:'/about-society',
                        component:aboutSociety,
                        children : [
                            {
                                path:'detail1',
                                component:detail1
                            },

                            {
                                path:'detail2',
                                component:detail2
                            },
                            {
                                path:'detail3',
                                component:detail3
                            }
                        ]
                    },

                    {
                        path:'/user-center',
                        component:userCenter
                    },


                ]
    }
)

export default router