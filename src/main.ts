import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
const app = createApp(App)
import { toLine } from './utils'

// 获取icon并全局注册组件
for(let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}


app.use(router).use(ElementPlus)
app.mount('#app')
