<template>
  <!-- 对话框按钮 -->
  <el-button
    type="primary"
    size="large"
    @click="handlePopup">
    <slot></slot>
  </el-button>
  <!-- 对话框 -->
  <div class="el-icon-container-wrapper-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
    <!-- 图标容器 -->
    <div class="el-icon-container">
      <div
        class="el-icon-items"
        v-for="(item, index) in Object.keys(ElIcons)"
        :key="index"
        @click="handleClickIconItem(item)">
        <!-- icon组件 -->
        <div>
          <!-- 技巧：在页面动态生成标签 -->
          <component :is="`el-icon-${toLine(item)}`"></component>
        </div>
        <!-- icon key -->
        <div>{{item}}</div>
      </div>
    </div>
  </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from '../../../utils/index.ts'
import { useCopy } from '../../../hooks/useCopy/index.ts'

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
// 处理点击图标
const handleClickIconItem = (iconkey: string) => {
  let iconLabel = `<el-icon-${toLine(iconkey)} />`
  useCopy(iconLabel)
  dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
  .el-icon-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    white-space: nowrap;
    .el-icon-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      // min-width: 120px;
      // background-color: pink;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
  svg {
    width: 2em;
    height: 2em;
  }

</style>