import { App } from 'vue'

import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'

const components = [
  chooseIcon,
  chooseArea,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime
]

// 技巧：
// 遍历use所有组件
// 再提供install方法以便在入口文件中通过use全局注册所有组件
export default {
  install(app: App): void {
    components.map(item => {
      app.use(item)
    })
  }
}