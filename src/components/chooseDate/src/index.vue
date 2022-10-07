<template>
  <div class="choose-date-container">
    <div class="choose-date-start">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="handleDisableStartDate"
        v-bind="$attrs.startDateOptions"
      />
    </div>
    <div class="choose-date-end">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabledDate="handleDisableEndDate"
        v-bind="$attrs.endDateOptions"
        :disabled="endDateDisabled"
      />
    </div>

    <!-- demo：禁用今天之后(选择今天及之前)的日期---disabledDate的应用 -->
    <!-- <div class="choose-date-start">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="handleDisableDatesAfterToday"
        v-bind="$attrs.startDateOptions"
      />
    </div>
    <div class="choose-date-end">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabledDate="handleDisableDatesBeforeToday"
        v-bind="$attrs.endDateOptions"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

let startDate = ref<Date | null>(null)
let endDate = ref<Date | null>(null)
// 结束日期禁用状态
let endDateDisabled = ref<boolean>(true)

let emits = defineEmits(['start-change', 'end-change'])


// 禁用日期的函数---disabledDate的应用

// 禁用今天及之前(选择之后)的日期
// let handleDisableDatesBeforeToday = (time: Date) => {
//   if (props.disableDatesBeforeToday) return time.getTime() < Date.now()
// }
// 禁用今天之后(选择今天及之前)的日期
// let handleDisableDatesAfterToday = (time: Date) => {
//   if (props.disableDatesAfterToday) return time.getTime() > Date.now()
// }

// 禁用开始日期：同 禁用今天及之前(选择之后)的日期
let handleDisableStartDate = (time: Date) => {
  if (props.disableDatesBeforeToday) return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
}

// 禁用结束日期：开始日期及之后的日期不能选
let handleDisableEndDate = (time: Date) => {
  if (startDate.value) return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
}

let props = defineProps({
  // 日期占位文本
  startPlaceholder: {
    type: String,
    default: '请选择开始日期'
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  // 是否禁用今天及之前的日期
  disableDatesBeforeToday: {
    type: Boolean,
    default: true
  },
  // 是否禁用今天之后的日期
  // disableDatesAfterToday: {
  //   type: Boolean,
  //   default: false
  // }
})

// 监听开始日期
watch(() => startDate.value, val => {
  if(!val) {
    endDate.value = null
    endDateDisabled.value = true
  } else {
    endDateDisabled.value = false
    emits('start-change', val)
  }
})

// 监听开始日期
watch(() => endDate.value, val => {
  if(val) {
    emits('end-change', {
      startDate: startDate.value,
      endDate: val
    })
  }
})

</script>

<style lang="scss" scoped>
.choose-date-container {
  display: flex;
  .choose-date-start {
    margin-right: 20px;
  }
}
</style>