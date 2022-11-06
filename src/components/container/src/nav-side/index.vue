<template>
  <j3-menu class="el-menu-vertical-demo"
    :data="menuData"
    :default-active="$route.path"
    router
    :collapse="collapse">
  </j3-menu>
</template>

<script lang="ts" setup>
import {
  Location,
  Document,
  Menu,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from 'vue'

let props = defineProps<{
  collapse: boolean,
}>()

let menuData = [
  {
    name: '首页',
    index: '/',
    icon: 'HomeFilled'
  },
  {
    name: '图标选择器',
    index: '/chooseIcon',
    icon: 'Check'
  },
  {
    name: '省市区选择',
    index: '/chooseArea',
    icon: 'Position'
  },
  {
    name: '城市选择器',
    index: '/chooseCity',
    icon: 'mapLocation'
  },
  {
    name: '趋势标记',
    index: '/trend',
    icon: 'Sort'
  },
  {
    name: '通知菜单',
    index: '/notification',
    icon: 'Bell'
  },
  {
    name: '导航菜单',
    index: '/menu',
    icon: 'Menu'
  },
  {
    name: '时间选择器',
    index: '/chooseTime',
    icon: 'Timer'
  },
  {
    name: '进度条',
    index: '/progress',
    icon: 'DArrowRight'
  },
  {
    name: '日历',
    index: '/calendar',
    icon: 'ScaleToOriginal'
  },
  {
    name: '表单',
    index: '/form',
    icon: 'Setting'
  },
  {
    name: '表格',
    index: '/table',
    icon: 'shoppingBag'
  },
]

</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>