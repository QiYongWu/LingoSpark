<script setup lang="ts" name = 'headerOfAll'>
    import {ref} from 'vue'
    let title  =  ref<string>('语启·LingoSpark')
    let main1 = ref<string>('用AI火花点燃全球汉语语法的认知革命')
    let main2 = ref<string>('面向全球留学生的汉语教学平台')
    let mainLand = ref<string>('首页');

    let logoImage = ref<string>('../../images/ai.jpg')
    let userLand = ref<string>('个人');
</script>
<template>
    <div class = 'header'>
        <img :src = 'logoImage'  class = 'logo'>
        <h1 id = 'title'>
            {{ title }}
        </h1>
      
        <h2  style = 'margin-left:50px;'>
            {{  main2 }}
        </h2>
        <h2 style = 'margin-left:130px;'>
            {{ main1 }}
        </h2>

        <div id = 'sign-div'>
            <RouterLink to = '/sign_in' >
                <span>登录</span>
            </RouterLink>

            <RouterLink to = '/sign_up'>
                <span>注册</span>
            </RouterLink>
        </div>
       

       
    </div>

</template>

<style>

#sign-div{
    margin-left:200px;
}


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