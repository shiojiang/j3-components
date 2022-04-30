import { App } from 'vue'
import menu from './src/index.vue'
import infiniteMenu from './src/menu'

// 让组件能使用use进行注册
export default {
  install(app: App) {
    app.component('j3-menu', menu)
    app.component('j3-infinite-menu', infiniteMenu)
  }
}