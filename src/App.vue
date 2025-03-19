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
        <HeaderOfAll />
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
.common-layout {
  min-height: 100vh;
  display: flex;
}

.el-container {
  flex: 1;
}

.el-header {
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.navigation-menu {
  height: calc(100vh - 80px);
  border-right: none;
  padding: 16px 0;
}

.navigation-menu :deep(.el-menu-item) {
  height: 56px;
  line-height: 56px;
  font-size: 16px;
  margin: 4px 0;
  transition: all 0.3s;
}

.navigation-menu :deep(.el-menu-item.is-active) {
  background-color: #ecf5ff;
  border-radius: 8px;
}

.el-main {
  padding: 24px;
  background-color: #f5f7fa;
}
</style>