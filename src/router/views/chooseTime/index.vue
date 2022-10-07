<template>
  <div class="choose-time-container">
    <!-- 技巧：利用$attrs.startOptions、$attrs.endOptions分别传递子组件未接收的props -->
    <j3-choose-time
      startStep="00:30"
      endStep="00:30"
      @start-change="handleStartChange"
      @end-change="handleEndChange"
      :startOptions="startOptions"
      :endOptions="endOptions">
      <!--  -->
    </j3-choose-time>
    <!-- 日期选择器 -->
    <j3-choose-date
      @start-change="handleDateStartChange"
      @end-change="handleDateEndChange"
      :startDateOptions="startDateOptions"
      :endDateOptions="endDateOptions"
      :disableDatesBeforeToday="false"
     />
    <!-- <j3-choose-date
      startPlaceholder="请选择今天及之前的日期"
      endPlaceholder="请选择今天之后的日期"
      disableDatesBeforeToday
      disableDatesAfterToday
     /> -->
  </div>
</template>

<script lang="ts" setup>
// 定义结束时间接口类型
interface IendValue {
  startTime: string,
  endTime: string
}
// 定义结束日期接口类型
interface IdateEndValue {
  startTime: Date,
  endTime: Date
}

// 事件处理函数
let handleStartChange = (val: string) => {
  console.log('handleStartChange---', val);
}
let handleEndChange = (val: IendValue) => {
  console.log('handleEndChange---', val);
}

let handleDateStartChange = (val: string) => {
  console.log('handleDateStartChange---', val);
}
let handleDateEndChange = (val: IdateEndValue) => {
  console.log('handleDateEndChange---', val);
}

// 传递element-ui组件已定义但子组件未接收的props
let startOptions = {
  size: 'large'
}
let endOptions = {
  size: 'large'
}

let startDateOptions = {
  size: 'large'
}
let endDateOptions = {
  size: 'large'
}
</script>

<style lang="scss" scoped>
.choose-time-container {
  > * {
    margin-bottom: 20px;
  }
}
</style>