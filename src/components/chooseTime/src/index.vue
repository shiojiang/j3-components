<template>
  <div class="choose-time-container">
    <!-- startTime -->
    <div class="choose-time-start-time">
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      />
      <!-- 技巧：利用$attrs.xxx，父组件就可以分别传递该组件未定义的props (el-time-select已经定义的) -->
    </div>
    <!-- endTime -->
    <div class="choose-time-end-time">
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="disabledEndTime"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const startTime = ref<string>('')
const endTime = ref<string>('')
// 禁用结束时间
const disabledEndTime = ref<boolean>(true)

let emits = defineEmits(['start-change', 'end-change'])

let props = defineProps({
  // 占位文本
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  // 时间初始化
  startTimeStart: {
    type: String,
    default: '08:30'
  },
  startTimeEnd: {
    type: String,
    default: '18:30'
  },
  endTimeStart: {
    type: String,
    default: '08:30'
  },
  endTimeEnd: {
    type: String,
    default: '18:30'
  },
  // 步进
  startStep: {
    type: String,
    default: '00:15'
  },
  endStep: {
    type: String,
    default: '00:15'
  }
})

// 监听时间变化
watch(() => startTime.value, val => {
  if (val === '') {
    endTime.value = ''
    disabledEndTime.value = true
  }
  else {
    disabledEndTime.value = false
    emits('start-change', val)
  }
})
watch(() => endTime.value, val => {
  if (val !== '') {
    emits('end-change', {
      startTime: startTime.value,
      endTime: val
    })
  }
})
</script>

<style lang="scss" scoped>
.choose-time-container {
  display: flex;
  .choose-time-start-time {
    margin-right: 20px;
  }
}
</style>