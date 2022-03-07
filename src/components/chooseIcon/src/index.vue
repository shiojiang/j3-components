<template>
  <!-- 对话框按钮 -->
  <el-button
    type="primary"
    size="large"
    @click="handlePopup">
    <slot></slot>
  </el-button>
  <!-- 对话框 -->
  <el-dialog :title="title" v-model="dialogVisible"></el-dialog>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'

let props = defineProps<{
  title: string,
  visible: boolean,
}>()
let emits = defineEmits(['update:visible'])

// 不直接修改props 拷贝一份props.visible让v-model绑定
let dialogVisible = ref<boolean>(props.visible)
// 修改父组件数据
const handlePopup = () => {
  emits('update:visible', !dialogVisible.value)
}
// 监听props.visible变化
// 只监听传入props的初始值 用来同步dialogVisible
// 技巧：两次监听
// 只有第一次变化与父组件传递props有关 后面都是操作组件内部dialogVisible
watch(() => props.visible, val => {
  dialogVisible.value = val
})
// 监听dialogVisible 用来同步v-model
watch(dialogVisible, val => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>

</style>