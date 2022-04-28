<template>
  <div class="j3-trend-container">
    <h6>基本趋势组件</h6>
    <div class="j3-trend-flex-wrapper">
      <j3-trend text="营业额"></j3-trend>
      <j3-trend text="销售额" type="down"></j3-trend>
    </div>

    <h6>自定义图标颜色 使用插槽自定义文本内容</h6>
    <div class="j3-trend-flex-wrapper">
      <j3-trend upTrendIconColor="blue">上升趋势</j3-trend>
      <j3-trend type="down" downTrendIconColor="purple">下降趋势</j3-trend>
    </div>

    <h6>图标颜色反转</h6>
    <div class="j3-trend-flex-wrapper">
      <j3-trend reverseColor>上升趋势</j3-trend>
      <j3-trend type="down" reverseColor>下降趋势</j3-trend>
    </div>

    <h6>自定义文字颜色</h6>
    <div class="j3-trend-flex-wrapper">
      <j3-trend upTrendTextColor="blue">上升趋势</j3-trend>
      <j3-trend type="down" downTrendTextColor="purple">下降趋势</j3-trend>
    </div>

    <h6>自定义图标</h6>
    <div class="j3-trend-flex-wrapper">
      <j3-trend upTrendTextColor="#f5222d" upTrendIcon="CaretTop">上升趋势</j3-trend>
      <j3-trend downTrendTextColor="#52c41a" type="down" downTrendIcon="CaretBottom">下降趋势</j3-trend>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('2')

const options = [
  {
    value: '1',
    label: 'Option1',
  },
  {
    value: '2',
    label: 'Option2',
  },
  {
    value: '3',
    label: 'Option3',
  },
  {
    value: '4',
    label: 'Option4',
  },
  {
    value: '5',
    label: 'Option5',
  },
]
</script>

<style lang="scss" scoped>
.j3-trend-flex-wrapper {
  display: flex;
  > * {
    margin-right: 10px;
  }
}
h6 {
  color: #aaa;
  margin-top: 10px;
}
</style>