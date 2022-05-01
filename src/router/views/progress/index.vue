<template>
  <div class="j3-progress-container">
    <j3-progress :percentage="60" isAnimation :duration="3000"></j3-progress>
    <j3-progress :percentage="80" isAnimation :duration="3000" type="circle"></j3-progress>
    <j3-progress :percentage="percentage1" isAnimation :duration="3000" type="circle" :status="currentPercentage == percentage1 ? 'success' : ''" @onProgressStatus="onProgressStatus"></j3-progress>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
let currentPercentage = ref(0)
let onProgressStatus = (val) => {
  currentPercentage.value = val
}
let cs = ref<Number>(30)
let percentage1 = ref(100)
</script>

<style lang="scss" scoped>
::v-deep.j3-progress-container {
  .el-progress-circle {
    svg {
      width: 126px;
      height: 126px;
    }
  }
}
</style>