<script setup lang="ts">
   import headerOfAll from './components/header.vue'
   import { RouterView ,RouterLink} from 'vue-router';


</script>



<template>
   <div class="common-layout">
     <el-container>
       <el-header>
         <headerOfAll />
      </el-header>
      
       <el-container>
         <el-aside width="300px">   

            <div class = 'routes-div'>
               <el-tabs tab-position="left" 
               style="
               height: 800px;
               margin-top: 50px;
               " 
               class="demo-tabs tabs">
                  <el-tab-pane>
                     <template #label>
                        <router-link to="/masterRobot" class="route">AI教学</router-link>
                     </template>
                  </el-tab-pane>
                  
                  <el-tab-pane>
                     <template #label>
                        <router-link to="/build-team" class="route">创作团队</router-link>
                     </template>
                  </el-tab-pane>

                  <el-tab-pane>
                     <template #label>
                        <router-link to="/classes-center" class="route">课程中心</router-link>
                     </template>
                  </el-tab-pane>

                   <el-tab-pane>
                     <template #label>
                        <router-link to="/scenario-simulatio" class="route">场景模拟</router-link>
                     </template>
                  </el-tab-pane>

                  <el-tab-pane>
                     <template #label>
                        <router-link to="/practice-center" class="route">练习中心</router-link>
                     </template>
                  </el-tab-pane>

                  <el-tab-pane>
                     <template #label>
                        <router-link to="/about-society" class="route">社会专题</router-link>
                     </template>
                  </el-tab-pane>

                  <el-tab-pane>
                     <template #label>
                        <router-link to="/user-center" class="route">用户中心</router-link>
                     </template>
                  </el-tab-pane>
               </el-tabs>
   
            </div>
         </el-aside>

         <el-main>
            <RouterView>

            </RouterView>
         </el-main>
         
       </el-container>
       
     </el-container>
   </div>
 </template>
 


<style scoped>



.tabs{
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   column-gap: 20px;
}
 
 .route{
   font-size:25px;
 }

   .demo-tabs > .el-tabs__content {
   padding: 32px;
   color: #6b778c;
   font-size: 32px;
   font-weight: 600;
 }
 
 .el-tabs--right .el-tabs__content,
 .el-tabs--left .el-tabs__content {
   height: 100%;
 }
</style>



 
 

 





