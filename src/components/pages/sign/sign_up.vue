<script setup lang="ts" name="sign_up">
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')
const email = ref('')

const handleRegister = async () => {
  try {
    const response = await axios.post('http://localhost:3000/register', {
      username: username.value,
      password: password.value,
      email: email.value
    })
    if (response.data.success) {
      alert('注册成功，请登录')
      // 跳转到登录页面，例如：window.location.href = '/login'
    }
  } catch (error: any) {
    alert('注册失败: ' + (error.response?.data?.message || error.message))
  }
}
</script>

<template>
  <div class="register-container">
    <form @submit.prevent="handleRegister" class="register-form">
      <h2>注册</h2>
      <label for="username">用户名:</label>
      <input id="username" v-model="username" placeholder="用户名" required />
      <label for="email">邮箱:</label>
      <input id="email" v-model="email" type="email" placeholder="邮箱" />
      <label for="password">密码:</label>
      <input id="password" v-model="password" type="password" placeholder="密码" required />
      <button type="submit">注册</button>
    </form>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.register-form {
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.register-form h2 {
  text-align: center;
  margin-bottom: 16px;
  font-size: 1.5rem;
}

.register-form label {
  margin-bottom: 4px;
  font-size: 0.875rem;
  color: #333;
}

.register-form input {
  margin-bottom: 12px;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

.register-form input:focus {
  border-color: #4CAF50;
}

.register-form button {
  padding: 10px;
  font-size: 1rem;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-form button:hover {
  background-color: #45a049;
}
</style>
