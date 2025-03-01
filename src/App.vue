<script setup lang="ts">
   import headerOfAll from './components/header.vue'
   import { RouterView ,RouterLink} from 'vue-router';
</script>

<template>
  <div class = 'header'>
     <headerOfAll />
  </div>

  <div class = 'router'>
      <RouterLink to = '/home'><button>主页</button></RouterLink>

      <RouterLink to = '/study'><button>学习</button></RouterLink>

      <RouterLink to = '/sign_in'><button>登录</button></RouterLink>
      <RouterLink to = './sign_up'><button>注册</button></RouterLink>

  </div>
  
  <div class = 'router-view'>
   <RouterView></RouterView>
  </div>


</template>




