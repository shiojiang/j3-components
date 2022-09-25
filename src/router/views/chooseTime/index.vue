<template>
  <div class="choose-time-container">
    <j3-choose-time
      startPlaceholder="start Time"
      endPlaceholder="end Time"
      startStep="00:30"
      endStep="00:30">
    </j3-choose-time>
    <!-- 技巧：利用$attrs.startOptions、$attrs.endOptions分别传递子组件未接收的props -->
    <j3-choose-time
      @start-change="handleStartChange"
      @end-change="handleEndChange"
      :startOptions="startOptions"
      :endOptions="endOptions">
      <!--  -->
    </j3-choose-time>
  </div>
</template>

<script lang="ts" setup>
interface IendValue {
  startTime: string,
  endTime: string
}

let handleStartChange = (val: string) => {
  console.log('handleStartChange---', val);
}
let handleEndChange = (val: IendValue) => {
  console.log('handleEndChange---', val);
}

let startOptions = {
  size: 'large',
  clearable: false
}
let endOptions = {
  size: 'large',
  clearable: false
}
</script>

<style lang="scss" scoped>
.choose-time-container {
  > * {
    margin-bottom: 20px;
  }
}
</style>