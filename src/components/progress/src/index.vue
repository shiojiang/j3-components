<template>
  <el-progress
  :percentage="currentPercentage"
  :isAnimation="isAnimation"
  :duration="duration"
  v-bind="$attrs"
  >
  </el-progress>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
let props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
  isAnimation: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 1000
  }
})
let currentPercentage = ref(0)
let emits = defineEmits(['onProgressStatus'])
onMounted(() => {
  // 进度加载逻辑
  if(props.isAnimation) {
    let time = Math.ceil(props.duration / props.percentage)
    let timer = setInterval(() => {
      currentPercentage.value += 1
      if(currentPercentage.value >= props.percentage) {
        currentPercentage.value = props.percentage
        emits('onProgressStatus', currentPercentage.value)
        clearInterval(timer)
      }
    }, time)
  } else {
    currentPercentage.value = props.percentage
  }
})
</script>

<style lang="scss" scoped>

</style>