<script setup lang="ts">
   import headerOfAll from './components/header.vue'
   import { RouterView ,RouterLink} from 'vue-router';
</script>

<template>
  <div class = 'header'>
     <headerOfAll />
  </div>

  <div class = 'main'  style = 'background-color: blanchedalmond;'>

      <div class = 'router'>
            <RouterLink to = '/home'><button>主页</button></RouterLink>

            <RouterLink to = '/build-team'><button>创作团队</button></RouterLink>
            <RouterLink to = '/classes-center'><button>课程中心</button></RouterLink>
            <RouterLink to = '/scenario-simulatio'><button>场景模拟</button></RouterLink>
            <RouterLink to = '/practice-center'><button>练习中心</button></RouterLink>
            <RouterLink to = '/about-society'><button>社会专题</button></RouterLink>
            <RouterLink to = '/user-center'><button>用户中心</button></RouterLink>

      </div>
      
      <div class = 'router-view'>
         <RouterView>
            
         </RouterView>
      </div>

  </div>


</template>

<style scoped>
   .router-view{
      border:solid 1px whitesmoke;
      width:1000px;
      height:600px;
   }
</style>




