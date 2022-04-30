import { defineComponent, PropType, useAttrs } from "vue";
import { MenuItem } from "./types";
import * as Icons from '@element-plus/icons-vue'
import './styles/index.scss'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true
    },
    defaultActive: {
      type: String,
      default: "2"
    },
    router: {
      type: Boolean,
      default: false
    }
  },
  setup(props, cxt) {
    let attrs = useAttrs()
    // 封装渲染无限层级菜单的方法
    const renderMenu = (data: MenuItem[]) => {
      // 返回JSX代码
      return data.map((item: MenuItem) => {
        // 处理每个图标
        // item.iicon = `el-icon-${toLine(item.icon)}`
        item.iicon = (Icons as any)[item.icon]
        
        // JSX处理vue中的插槽
        let slots = {
          title: () => {
            return (
              <>
                <item.iicon />
                <span>{item.name}</span>
              </>
            )
          }
        }
        // 判断是否有子导航菜单：递归渲染
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.index}>
            <item.iicon />
            {/* item.iicon未生效 */}
            <span>{item.name}</span>
          </el-menu-item>
        )
      }
      );
    };

    return () => {
      return (
        <el-menu
          default-active={props.defaultActive}
          router={props.router}
          // 貌似JSX中不使用useAttrs也可以使用父组件的属性
          {...attrs}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
    
  }
})