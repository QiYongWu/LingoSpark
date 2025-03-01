<script setup lang="ts" name = 'headerOfAll'>
    import {ref} from 'vue'
    let title  =  ref<string>('智游学堂：对外汉语语法线上教学云服务平台')
    let mainLand = ref<string>('首页');
    let logoImage = ref<string>('../../images/logo.png')
    let logoAiImage = ref<string>('../../images/ai.jpg')
    let userLand = ref<string>('个人');
</script>
<template>
    <div class = 'header'>
        <img :src = 'logoImage'  class = 'logo'>
        <h1 id = 'title'>
            {{ title }}
        </h1>

        
        <img :src = 'logoAiImage' id = 'logo-ai-img'>

       
    </div>

</template>

<style>



.header{
    display:flex;
    border:solid 1px;
    width:100%;
    
    align-items:center;
}


img{
    width:100px;
    height:100px;
}





 
</style>