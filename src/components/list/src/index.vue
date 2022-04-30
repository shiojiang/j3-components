<template>
  <div class="list-container list-el-tabs-item-align-center">
    <el-tabs>
      <!-- 列表tab -->
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
        <el-scrollbar height="260px">
          <!-- 列表项 -->
          <div class="list-item-container" v-for="(listContent, listIndex) in item.content" :key="listIndex" @click="clickListItem(listContent, listIndex)">
            <!-- 列表项头像 -->
            <div class="list-item-avatar" v-if="listContent.avatar">
              <el-avatar :src="listContent.avatar" />
            </div>
            <!-- 列表项内容 -->        
            <div class="list-item-content">
              <div class="list-item-content-title-wrapper">
                <div class="list-item-content-title" v-if="listContent.title">{{listContent.title}}</div>
                <el-tag :type="listContent.tagType" size="small" v-if="listContent.tag">{{listContent.tag}}</el-tag>
              </div>
              <div class="list-item-content-desc" v-if="listContent.desc">{{listContent.desc}}</div>
              <div class="list-item-content-time" v-if="listContent.time">{{listContent.time}}</div>
            </div>        
          </div>
        </el-scrollbar>
        <!-- 列表操作 -->
        <div class="list-action-wrapper">
          <div class="list-action"
            v-for="(listAction, actionIndex) in action" :key="actionIndex"
            @click="clickListAction(listAction, actionIndex)"
            :class="{'list-action-border': actionIndex !== action.length-1}">
            <div class="list-action-icon">
              <component :is="`el-icon-${toLine(listAction.icon)}`"></component>
            </div>
            <div class="list-action-text">{{listAction.text}}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'
import { listOptions, actionOptions } from './types.ts'
import { toLine } from '../../../utils/index.ts'

let props = defineProps({
  // 列表数据
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作数据
  action: {
    type: Array as PropType<actionOptions[]>,
    default: () => []
  }
})

// 向父组件分发事件
let emits = defineEmits(['clickListItem', 'clickListAction'])

let clickListItem = (item: ListOptions, index: number) => {
  emits('clickListItem', item, index)
}
let clickListAction = (item: ActionOptions, index: number) => {
  emits('clickListAction', item, index)
}

</script>

<style lang="scss" scoped>
.list-item-container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background-color: #E3F7FF;
  }
  .list-item-avatar {
    display: flex;
    flex: 1;
  }
  .list-item-content {
    flex: 3;
    .list-item-content-time, .list-item-content-desc {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
    .list-item-content-title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.list-action-wrapper {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .list-action {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .list-action-icon {
      display: flex;
      align-items: center;
      // position: relative;
      // top: 2px;
      margin-right: 4px;
    }
  }
}
.list-action-border {
  border-right: 1px solid #eee;
}
</style>