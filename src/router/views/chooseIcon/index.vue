<template>
  <div>
    <j3-choose-icon title="选择图标" v-model:visible="visible">选择图标</j3-choose-icon>
  </div>
</template>

<script lang="ts" setup>
// import j3ChooseIcon from '../../../components/chooseIcon/src/index.vue'
import { ref } from 'vue'
let visible = ref<boolean>(false)

</script>

<style lang="scss" scoped>

</style>