<template>
  <div class="notification-container">
    <!-- 标记 -->
    <!-- <el-badge :value="value" :max="max" :is-dot="isDot" :type="type">
      <component
        :is="`el-icon-${toLine(icon)}`">
      </component>
    </el-badge> -->
    <!-- 弹出框 -->
    <el-popover
      placement="bottom"
      :width="300"
      trigger="click"
      >
      <!-- 触发弹出框元素 -->
      <template #reference>
        <!-- 标记 -->
        <el-badge :value="value" :max="max" :is-dot="isDot" :type="type">
        <!-- 标记图标 -->
          <component
            :is="`el-icon-${toLine(icon)}`">
          </component>
        </el-badge>
      </template>
      <!-- 弹出框内容 -->
      <template #default>
        <!-- 接收父组件插槽 -->
        <slot>这是弹出框内容</slot>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { toLine } from '../../../utils/index.ts'
  let props = defineProps({
    // 自定义徽标
    icon: {
      type: String,
      default: "Bell"
    },
    // 徽标值
    value: {
      type: [Number, String],
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 999
    },
    isDot: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "danger"
    }

  })
</script>

<style lang="scss" scoped>
.notification-container {
  display: inline-block;
}
svg {
  width: 1.3em;
  height: 1.3em;
}
</style>