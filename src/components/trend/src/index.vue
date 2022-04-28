<template>
  <div class="trend-container">
    <div class="trend-text" :style="{ color: trendTextColor }">
      <slot>{{text}}</slot>
      <!-- <slot v-if="useSlots().default"></slot>
      <template v-else>{{text}}</template> -->
    </div>
    <div class="trend-icon">
    <!-- bug：:style绑定props貌似只能取upTrendIconColor的默认值 所以添加reverseColor后 父组件传递过来的自定义颜色不会反转 -->
      <!-- <el-icon-arrowup v-if="type === 'up'" :style="{ color: !reverseColor ? upTrendIconColor : downTrendIconColor }" /> -->
      <!-- <el-icon-arrowdown v-else :style="{ color: !reverseColor ? downTrendIconColor : upTrendIconColor }" /> -->
      <component
        :is="`el-icon-${toLine(upTrendIcon)}`"  
        v-if="type === 'up'"
        :style="{ color: !reverseColor ? upTrendIconColor : downTrendIconColor }">
      </component>
      <component
        :is="`el-icon-${toLine(downTrendIcon)}`"
        v-if="type === 'down'"
        :style="{ color: !reverseColor ? downTrendIconColor : upTrendIconColor }">
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue'
import { toLine } from '../../../utils/index.ts'

let props = defineProps({
  // 标记当前趋势类型
  type: {
    type: String,
    default: 'up'
  },
  // 趋势显示文字 可以接收父组件传递值或插槽
  text: {
    type: String,
    default: '文字'
  },
  // 趋势图标颜色
  upTrendIconColor: {
    type: String,
    default: '#f5222d'
  },
  downTrendIconColor: {
    type: String,
    default: '#52c41a'
  },
  // 趋势图标颜色反转 对默认趋势图标颜色生效
  reverseColor: {
    type: Boolean,
    default: false
  },
  // 趋势文字颜色
  upTrendTextColor: {
    type: String,
    default: '#000'
  },
  downTrendTextColor: {
    type: String,
    default: '#000'
  },
  // 自定义趋势图标
  upTrendIcon: {
    type: String,
    default: 'ArrowUp'
  },
  downTrendIcon: {
    type: String,
    default: 'ArrowDown'
  }
})
const trendTextColor = computed(() => {
  return props.type === 'up' ? props.upTrendTextColor : props.downTrendTextColor
})
</script>

<style lang="scss" scoped>
  .trend-container {
    display: flex;
    align-items: center;
    .trend-text {
      font-size: 12px;
      margin-right: 4px;
    }
    .trend-icon {
      svg {
        width: .8em;
        height: .8em;
      }
    }
  }
</style>