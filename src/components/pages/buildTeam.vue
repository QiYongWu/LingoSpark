
<script lang="ts" setup name = 'buildTeam'> 
  import { useTeamStore } from '@/store/team';
  const team = useTeamStore().team;
  // const teamImages = [
  // new URL("@/images/team-images/黄文吉.jpg", import.meta.url).href,
  // new URL("@/images/team-images/李静.jpg", import.meta.url).href,
  // new URL("@/images/team-images/吕咏航.jpg", import.meta.url).href,
  // new URL("@/images/team-images/吴永琦.jpg", import.meta.url).href,
  // new URL("@/images/team-images/邓婷.jpg", import.meta.url).href,
  // new URL("@/images/team-images/谷禹欣.jpg", import.meta.url).href,
  // new URL("@/images/team-images/邱涵.jpg", import.meta.url).href,
  // new URL("@/images/team-images/曹淑岩.jpg", import.meta.url).href,
  // ]
  // 
</script>



<template>

<div class = 'team-cards'>
  <div v-for="person in team" class = 'team-card'>
    <el-card style="width:300px;height:350px">
      <i class="fa-solid fa-user"></i>
       <el-avatar shape="square" :size="100" fit="cover" :src="person.image" />
        <template #header>{{person.who}}:{{person.name}}</template>
        <p>
        {{ person.work }}
        </p>

        <hr />
        <p>
          邮箱:{{ person.address }}
        </p>
      
      </el-card>
  </div>
</div>

</template>


<style scoped>

/* 团队卡片容器 - 网格布局 */
.team-cards {
  display: grid;
  grid-template-columns: repeat(3, 300px); /* 修改为3列 */
  justify-content: center;
}


/* 单个卡片容器 */
.team-card {
  transition: transform 0.3s ease; /* 悬停动画 */
}

/* 卡片悬停效果 */
.team-card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

/* Element Plus 卡片自定义样式 */
.team-card :deep(.el-card) {
  width: 100%; /* 继承容器宽度 */
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.team-card :deep(.el-card:hover) {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 卡片头部样式 */
.team-card :deep(.el-card__header) {
  background-color: #f8f9fa;
  border-bottom: 2px solid #e9ecef;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

/* 卡片内容样式 */
.team-card :deep(.el-card__body) {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 工作描述段落 */
.team-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #666;
}

/* 分割线样式 */
.team-card hr {
  margin: 15px 0;
  border: 0;
  border-top: 1px solid #eee;
}

/* 邮箱信息样式 */
.team-card p:last-child {
  font-size: 13px;
  color: #888;
  word-break: break-all; /* 长邮箱地址换行 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .team-cards {
    grid-template-columns: 1fr; /* 移动端单列显示 */
    gap: 20px;
    padding: 10px;
  }
  
  .team-card :deep(.el-card__header) {
    font-size: 16px;
    padding: 12px 15px;
  }
}

@media (min-width: 1200px) {
  .team-cards {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); /* 大屏幕放大卡片 */
  }
}

.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
</style>

