<script setup lang="ts">
import HeaderOfAll from './components/header.vue'
import { RouterView } from 'vue-router'
import { ElContainer, ElHeader, ElAside, ElMain, ElMenu, ElMenuItem } from 'element-plus'

// 将路由配置提取为常量并添加类型
interface RouteConfig {
  path: string
  label: string
}

const routes: RouteConfig[] = [
  { path: '/masterRobot', label: 'AI教学'},
  { path: '/build-team', label: '创作团队' },
  { path: '/classes-center', label: '课程中心' },
  { path: '/scenario-simulation', label: '场景模拟' }, // 修复拼写错误
  { path: '/practice-center', label: '练习中心' },
  { path: '/about-society', label: '社会专题' },
  { path: '/user-center', label: '用户中心' }
]

// 获取当前路由路径用于菜单高亮
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header height="115px">
        <HeaderOfAll class = 'header-of-all' />
      </el-header>
      
      <el-container>
        <el-aside width="260px">
          <el-menu
            router
            :default-active="route.path"
            class="navigation-menu"
            active-text-color="#409EFF"
            text-color="#333"
          >
            <el-menu-item 
              v-for="(route, index) in routes" 
              :key="index"
              :index="route.path"
            >
              {{ route.label }}
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.header-of-all{
  width:100%;
 border:none;
}

.common-layout {
  min-height: 100vh;
  background: #f8fafc;
}

/* 顶部导航栏固定 */
.el-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 115px !important; /* 覆盖element默认高度 */
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 2rem !important;
}

/* 侧边导航栏固定 */
.el-aside {
  position: fixed;
  left: 0;
  top: 115px; /* 与header高度一致 */
  bottom: 0;
  width: 260px !important;
  z-index: 900;
  background: white;
  box-shadow: 4px 0 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.el-main {
  margin-top: 115px; /* header高度 */
  margin-left: 260px; /* aside宽度 */
  min-height: calc(100vh - 115px);
  padding: 2rem;
  background: #f8fafc;
  transition: margin 0.3s ease;
}

/* 现代菜单样式 */
.navigation-menu {
  height: calc(100vh - 115px) !important;
  border-right: none !important;
  padding: 1rem 0;
}

.navigation-menu :deep(.el-menu-item) {
  height: 56px;
  line-height: 56px;
  margin: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 15px;
  color: #64748b;
  transition: 
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;
}

.navigation-menu :deep(.el-menu-item:hover) {
  background-color: #f1f5f9 !important;
  transform: translateX(4px);
}

.navigation-menu :deep(.el-menu-item.is-active) {
  background: #6366f1 !important;
  color: white !important;
  box-shadow: 0 3px 6px rgba(99, 102, 241, 0.2);
}

/* 响应式处理 */
@media (max-width: 1024px) {
  .el-aside {
    transform: translateX(-100%);
  }
  
  .el-main {
    margin-left: 0;
  }
  
  .el-header {
    padding: 0 1rem !important;
  }
}

/* 防止z-index冲突 */
.el-main > * {
  position: relative;
  z-index: 1;
}
</style>