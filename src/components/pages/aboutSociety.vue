<script setup lang="ts" name = 'aboutSociety'>
</script>

<template>
    <h1 style = 'margin-top:50px;'>
        aboutSociety
    </h1>

    <div class = 'router'>
        <RouterLink to = '/about-society/detail1'>
            关于中国的AI形势
        </RouterLink>

        <RouterLink to = '/about-society/detail2'>
            关于国际的AI形势
        </RouterLink>

        <RouterLink to = '/about-society/detail3'>
            目前的主流AI大模型
        </RouterLink>
    </div>

    <div class = 'routeView'>
        <RouterView>

        </RouterView>
    </div>
</template>

<style scoped>


  
</style>