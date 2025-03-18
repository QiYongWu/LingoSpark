import { defineStore } from "pinia";

export const useTeamStore = defineStore('team',{
    state()    //类似于setup
    {
        const team = [
            {
                name : '黄文吉',
                who : '项目指导老师',
                work:'指导项目实践与论文成果',
                address:'1251896@qq.com',
                image: new URL("@/images/team-images/黄文吉.jpg", import.meta.url).href,
            },
        
            {
                name : '李静',
                who : '项目指导老师',
                work:'设计教学课程视频内容',
                address:'972476275@qq.com',
                image:new URL("@/images/team-images/李静.jpg", import.meta.url).href,
            },
        
            {
                name : '吕咏航',
                who : '项目负责人',
                work:'负责项目的统筹规划、保证项目的实施进行',
                address:'2440765707@qq.com',
                image:new URL("@/images/team-images/吕咏航.jpg", import.meta.url).href,
            },
        

        
            {
                name : '邓婷',
                who : '前端工程师',
                work:'负责项目界面的布局与优化',
                address:'3383186683@qq.com',
                image: new URL("@/images/team-images/邓婷.jpg", import.meta.url).href,
            },
        
            {
                name : '谷禹欣',
                who : '剪辑师',
                work:'负责一、二、三级语法课程录制与剪辑',
                address:'qiyongw@126.com',
                image: new URL("@/images/team-images/谷禹欣.jpg", import.meta.url).href,
            },
        
            {
                name : '邱涵',
                who : '剪辑师',
                work:'负责四、五、六级语法课程录制与剪辑',
                address:'1723579727@qq.com',
                image:new URL("@/images/team-images/邱涵.jpg", import.meta.url).href,
            },

            {
                name : '吴永琦',
                who : '前端工程师',
                work:'负责构建项目的界面交互、dify、维护、建站',
                address:'qiyongw@126.com',
                image: new URL("@/images/team-images/吴永琦.jpg", import.meta.url).href,
            },
        
            {
                name : '曹淑岩',
                who : '提示词工程师',
                work:'负责中文语法机器人提示词的撰写',
                address:'2503099980@qq.com',
                image: new URL("@/images/team-images/曹淑岩.jpg", import.meta.url).href,
            },
        ]
        return {
            team
        };
    }
 }
)