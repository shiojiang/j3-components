<template>
  <div>
    <div>$attrs:</div>
    <div>{{$attrs}}</div>
  </div>
  <el-menu class="menu-container"
  :default-active="defaultActive"
  v-bind="$attrs">
  <!-- $attrs接收父组件传递过来但子组件未接收props的属性 -->
    <!-- 渲染导航菜单项 -->
    <template v-for="item in data" :key="item.index">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.index">
        <component :is="`el-icon-${toLine(item.icon)}`"></component>
        <span>{{item.name}}</span>
      </el-menu-item>
      <!-- 渲染含子导航菜单的导航菜单项 -->
      <el-sub-menu v-if="item.children && item.children.length" :index="item.index">
        <template #title>
          <component :is="`el-icon-${toLine(item.icon)}`"></component>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="(subItem, subIndex) in item.children" :key="subItem.index" :index="subItem.index">
          <component :is="`el-icon-${toLine(subItem.icon)}`"></component>
          <span>{{subItem.name}}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { MenuIcon } from './types.ts'
import { toLine } from '../../../utils/index.ts'
let props = defineProps({
  data: {
    type: Array as propType<MenuIcon[]>,
    required: true
  },
  defaultActive: {
    type: String,
    default: "2"
  }
})
  
</script>

<style lang="scss" scoped>
.menu-container {
  svg {
    margin-right: 4px;
  }

}
</style>