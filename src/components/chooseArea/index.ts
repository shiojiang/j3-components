import { App } from 'vue'
import chooseArea from './src/index.vue'

// 让组件能使用use进行注册
export default {
  install(app: App) {
    app.component('j3-choose-area', chooseArea)
  }
}