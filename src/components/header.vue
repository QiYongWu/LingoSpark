<script setup lang="ts" name="HeaderOfAll">
import { ref } from 'vue'

const appTitle = ref('语启·LingoSpark')
const subtitle1 = ref('用AI火花点燃全球汉语语法的认知革命')
const subtitle2 = ref('面向全球留学生的汉语教学平台')
const logoImage = ref('../../images/ai.jpg') // 确保路径正确
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
      <RouterLink 
        to="/sign_in" 
        class="auth-link"
      >
        登录
      </RouterLink>
      <RouterLink 
        to="/sign_up" 
        class="auth-link"
      >
        注册
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  --primary-color: #2c3e50;
  --accent-color: #42b983;
  --border-color: #eaecef;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color);
  background-color: white;
  gap: 1.5rem;
}

.brand-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.titles {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.main-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0;
}

.subtitles {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.subtitle {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--primary-color);
  margin: 0;
  opacity: 0.8;
}

.auth-links {
  display: flex;
  gap: 1.5rem;
  margin-left: auto;
}

.auth-link {
  color: var(--primary-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.auth-link:hover {
  background-color: rgba(var(--accent-color), 0.1);
  color: var(--accent-color);
}

.auth-link.router-link-active {
  color: var(--accent-color);
  font-weight: 500;
}
</style>