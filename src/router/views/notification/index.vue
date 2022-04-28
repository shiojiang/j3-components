<template>
  <div class="j3-notification-container">
    <j3-notification :value="value">
      <template #default>
        <j3-list :list="list" :action="action" @clickListItem="clickListItem" @clickListAction="clickListAction" />
      </template>
    </j3-notification>
    <j3-notification :value="value" :max="max"></j3-notification>
    <j3-notification :value="stringValue"></j3-notification>
    <j3-notification :isDot="isDot"></j3-notification>
    <j3-notification :type="type"></j3-notification>
    <j3-notification :icon="icon"></j3-notification>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { list, action } from './data.ts'

let data = reactive({
  value: 100,
  stringValue: 'new',
  max: 99,
  isDot: true,
  type: 'primary',
  icon: 'ChatRound'
})
const { value, stringValue, max, isDot, type, icon } = toRefs(data)

let clickListItem = (item: ListOptions, index: number) => {
  console.log('clickListItemFromChild', item, index)
}
let clickListAction = (item: ActionOptions, index: number) => {
  console.log('clickListActionFromChild', item, index)
}
</script>

<style lang="scss" scoped>
.j3-notification-container {
  > * {
    margin: 20px 60px 150px 150px;
    cursor: pointer;
  }
}
</style>