import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port:30000,
    proxy:{//代理服务器信息
      "/api-dev":{
        target: 'http://localhost:8080', //目标服务器
        changeOrigin:true,   // 发送请求的一方(前端服务器)
        rewrite:(path)=>path.replace('/api-dev','')
      }
    }
  }
})
