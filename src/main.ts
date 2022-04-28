import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
const app = createApp(App)
import { toLine } from './utils'

// 全局注册组件后 路由模块就不需要导入了
import J3UI from './components'

// 获取icon并全局注册组件
for(let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}


app.use(router).use(ElementPlus).use(J3UI)
app.mount('#app')
