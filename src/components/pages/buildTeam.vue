<script setup name = 'buildTeam'>
import { ref } from 'vue';

const teamMembers = ref([
  {
    name: '吕咏航',
    avatar: require('./吕咏航.jpg'),
    role: '项目负责人',
    bio: '广西外国语学院文学院汉语国际教育专业大一新生',
    skills: ['个人简历', '获得荣誉', '参加活动']
  },
  {
    name: '吴永琦',
    avatar: require('./吴永琦.png'),
    role: '项目工程师',
    bio: '精通前端开发，主导核心架构设计与实现',
    skills: ['个人简历', '主要成就', '工作经验']
  },
  {
    name: '邓婷',
    avatar: require('./邓婷.jpg'),
    role: '前端美化师',
    bio: '精通前端美化，主负责核心前端美化设计与实现',
    skills: ['个人简历', '获得荣誉', '参加活动']
  },
  {
    name: '谷禹欣',
    avatar: require('./谷禹欣.jpg'),
    role: '课程录制',
    bio: '一、二、三级语法课程录制与剪辑',
    skills: ['个人简历', '获得荣誉', '参加活动']
  },
  {
    name: '邱涵',
    avatar: require('./邱涵.jpg'),
    role: '课程录制',
    bio: '四、五、六级语法课程录制与剪辑',
    skills: ['个人简历', '获得荣誉', '参加活动']
  },
  {
    name: '黄文吉',
    avatar: require('./黄文吉.png'),
    role: '项目指导老师',
    bio: '精通汉语语法教学，主导项目核心实践与论文成果指导',
    skills: ['个人简历', '主要成就', '项目成果']
  },
  {
    name: '李静',
    avatar: require('./avatar2.jpg'),
    role: '项目指导老师',
    bio: '精通对外汉语教学，主导教学课程视频内容设计',
    skills: ['个人简历', '主要成就', '获得奖项']
  }
]);
</script>

<template>
    <div class="team-container">
      <div class="team-header">
        <h1>我们的创作团队</h1>
        <p>汇聚各领域专家，打造卓越体验</p>
      </div>
  
      <div class="team-grid">
        <div 
          v-for="(member, index) in teamMembers"
          :key="index"
          class="member-card"
        >
          <img 
            :src="member.avatar" 
            :alt="member.name" 
            class="member-avatar"
          >
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <div class="member-role">{{ member.role }}</div>
            <p class="member-bio">{{ member.bio }}</p>
            <div class="skill-tags">
              <span 
                v-for="(tag, tagIndex) in member.skills"
                :key="tagIndex"
                class="skill-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  /* 基础样式复用 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }
  
  body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    line-height: 1.6;
  }
  
  /* 团队容器 */
  .team-container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
  }
  
  /* 标题样式 */
  .team-header {
    text-align: center;
    margin-bottom: 50px;
    color: white;
  }
  
  .team-header h1 {
    font-size: 2.5em;
    margin-bottom: 15px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  /* 成员卡片 */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 20px;
  }
  
  .member-card {
    background: rgba(255, 255, 255, 0.97);
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }
  
  .member-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  }
  
  /* 成员头像 */
  .member-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: -60px auto 20px;
    border: 4px solid white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.3s;
  }
  
  .member-card:hover .member-avatar {
    transform: scale(1.05);
  }
  
  /* 成员信息 */
  .member-info h3 {
    color: #2d3748;
    margin: 15px 0;
    font-size: 1.4em;
  }
  
  .member-role {
    color: #667eea;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .member-bio {
    color: #718096;
    font-size: 0.95em;
    margin-bottom: 20px;
  }
  
  /* 技能标签 */
  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }
  
  .skill-tag {
    background: #f7fafc;
    color: #4a5568;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85em;
    transition: all 0.3s;
  }
  
  .skill-tag:hover {
    background: #667eea;
    color: white;
  }
  
  @media (max-width: 768px) {
    .team-container {
      margin: 20px;
    }
    
    .member-card {
      margin-top: 40px;
    }
  }
  </style>