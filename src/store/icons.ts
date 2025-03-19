import {defineStore} from 'pinia'

export const useIconStore = defineStore('icons',{
    state(){
        const icons = [
            {
              name:'AI',
              icon:'<robot-one theme="outline" size="24" fill="#333"/>'
            },
            {
              name:'home',
              icon:'<home theme="outline" size="24" fill="#333"/>'
            },
            {
              name:'buildTeam',
              icon:'<every-user theme="outline" size="24" fill="#333"/>'
            },
            {
              name:'class',
              icon:'<classroom theme="outline" size="24" fill="#333"/>'
            },
            {
              name:'user',
              icon:'<user theme="outline" size="24" fill="#333"/>'
            },{
              name:'video',
              icon:'<play-two theme="outline" size="24" fill="#333"/>'
            }
          ]

        return {icons}
    }
})