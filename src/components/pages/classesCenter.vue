<script setup lang="ts" name="classesCenter">
interface VideoItem {
  title: string
  src: string
}

const videoList: VideoItem[] = Array(4).fill({
  title: '动词和副词',
  src: new URL('@/../videos/video1.mp4', import.meta.url).href
})
</script>

<template>
  <el-row :gutter="[24, 24]" justify="center">
    <el-col 
      v-for="(video, index) in videoList"
      :key="index"
      :xs="24" 
      :sm="12" 
      :md="8" 
      :lg="6"
    >
      <el-card class="video-card">
        <template #header>
          <div class="card-header">{{ video.title }}</div>
        </template>
        <div class="video-wrapper">
          <video controls preload="metadata">
            <source :src="video.src" type="video/mp4">
            <track kind="captions" label="中文" srclang="zh" default>
            您的浏览器不支持视频播放
          </video>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.video-card {
  margin: 0 12px;
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
}

.card-header {
  font-weight: 600;
  font-size: 16px;
  color: var(--el-color-primary);
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 宽高比 */
  height: 0;
}

.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .video-card {
    margin: 0 8px;
  }
  
  .card-header {
    font-size: 14px;
  }
}
</style>