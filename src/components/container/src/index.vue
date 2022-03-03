<template>
  <el-container>
    <!-- 侧边栏 -->
      <el-aside width="auto">
      <!-- 导航菜单 -->
        <NavSide :collapse="isCollapse"></NavSide>
      </el-aside>

      <el-container>
      <!-- 头部 -->
        <el-header>
          <NavHeader v-model:collapse="isCollapse"></NavHeader>
        </el-header>
        
        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavSide from './nav-side/index.vue'
import NavHeader from './nav-header/index.vue'
let isCollapse = ref(false)


</script>

<style lang="scss" scoped>
  .el-header {
    padding: 0;
    border-bottom: 1px solid #ccc;
  }
</style>