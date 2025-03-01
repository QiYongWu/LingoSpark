<script setup lang="ts" name="sign_in">
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      username: username.value,
      password: password.value
    })
    if (response.data.success) {
      alert('登录成功')
      // 登录成功后可以跳转页面，例如：window.location.href = '/'
    } else {
      alert('登录失败，请检查用户名或密码')
    }
  } catch (error: any) {
    alert('登录失败: ' + (error.response?.data?.message || error.message))
  }
}
</script>

<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <h2>登录</h2>
      <label for="username">用户名:</label>
      <input id="username" v-model="username" placeholder="请输入用户名" required />
      <label for="password">密码:</label>
      <input id="password" v-model="password" type="password" placeholder="请输入密码" required />
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
  font-size: 14px;
}

input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
