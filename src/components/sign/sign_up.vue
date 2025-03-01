<script setup lang='ts' name='sign_up'>
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
  } catch (error) {
    alert('注册失败: ' + error.response.data.message)
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <form @submit.prevent="handleRegister" class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-semibold text-center mb-4">注册</h2>
      <input v-model="username" placeholder="用户名" required 
             class="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input v-model="email" type="email" placeholder="邮箱" 
             class="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input v-model="password" type="password" placeholder="密码" required 
             class="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button type="submit" 
              class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">注册</button>
    </form>
  </div>
</template>
