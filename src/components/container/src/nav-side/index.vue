<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="collapse">
    <el-menu-item index="1">
      <!-- 不能使用类名图标？ -->
      <!-- <i class="el-icon-menu"></i> -->
      <el-icon><Location /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Document /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Menu /></el-icon>
      <span>趋势标记</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Setting /></el-icon>
      <span>导航四</span>
    </el-menu-item>
  </el-menu>
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

</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>