<script setup lang="ts" name="HeaderOfAll">
import { ref } from 'vue'

const appTitle = ref('语启·LingoSpark')
const subtitle1 = ref('用AI火花点燃全球汉语语法的认知革命')
const subtitle2 = ref('面向全球留学生的汉语教学平台')
const logoImage =  new URL("@/images/ai.jpg", import.meta.url).href // 确保路径正确
import { Github } from '@icon-park/vue-next'
import { Robot } from '@icon-park/vue-next'
import { User } from '@icon-park/vue-next'
import { AddUser } from '@icon-park/vue-next'
import { Home } from '@icon-park/vue-next'
import { Classroom } from '@icon-park/vue-next'
</script>

<template>
  <header class="app-header">
    <div class="brand-section">
      <img 
        :src="logoImage" 
        alt="LingoSpark Logo"
        class="logo"
      />
      <div class="titles">
        <h1 class="main-title">{{ appTitle }}</h1>
        <div class="subtitles">
          <h2 class="subtitle">{{ subtitle2 }}</h2>
          <h2 class="subtitle">{{ subtitle1 }}</h2>
        </div>
      </div>

    </div>

    <nav class="auth-links">


      <RouterLink to = '/userCenter'>
        <home theme="outline" size="24" fill="#333"/>
      </RouterLink>
      <RouterLink to = '/masterRobot'>
        <Robot theme="outline" size="24" fill="#333"/>
      </RouterLink>
      <RouterLink to = '/classCenter'>
        <classroom theme="outline" size="24" fill="#333"/>
      </RouterLink>
      <a href="https://github.com/QiYongWu/LingoSpark" target = '_blank'>
        <github theme="outline" size="24" fill="#333" />
      </a>
      
      <RouterLink 
        to="/sign_in" 
        class="auth-link"
      >
      <user theme="outline" size="24" fill="#333"/>
        登录
      </RouterLink>
      <RouterLink 
        to="/sign_up" 
        class="auth-link"
      >
      <add-user theme="outline" size="24" fill="#333"/>
        注册
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  --gradient-primary: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --accent-hover: #4f46e5;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background: white;
  box-shadow: var(--shadow-md);
  position: relative;
  border:none;
}

.brand-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.logo {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover {
  transform: rotate(-5deg) scale(1.05);
}

.titles {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.main-title {
  font-size: 1.75rem;
  font-weight: 700;
  background-image: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.025em;
  margin: 0;
}

.subtitles {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.subtitle {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0;
  position: relative;
  padding-left: 1.25rem;
}

.subtitle::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: var(--text-secondary);
  border-radius: 50%;
  opacity: 0.4;
}

.auth-links {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.auth-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid #e2e8f0;
}

.auth-link:hover {
  background: var(--gradient-primary);
  color: white;
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
  border-color: transparent;
}

.auth-link:active {
  transform: translateY(0);
}

.auth-link i {
  transition: transform 0.2s ease;
}

.auth-link:hover i {
  transform: scale(1.1);
}

/* 图标按钮统一风格 */
.auth-links > a:not(.auth-link) {
  display: flex;
  padding: 0.75rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.auth-links > a:not(.auth-link):hover {
  background: #f1f5f9;
  transform: translateY(-2px);
}

/* 响应式处理 */
@media (max-width: 1024px) {
  .app-header {
    padding: 1rem 2rem;
  }
  
  .subtitle {
    display: none;
  }
  
  .main-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .app-header {
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
  }
  
  .brand-section {
    width: 100%;
    justify-content: center;
  }
  
  .auth-links {
    width: 100%;
    justify-content: center;
  }
}
</style>