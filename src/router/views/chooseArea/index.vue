<template>
  <div>
    <j3-choose-area @change="changeArea"></j3-choose-area>
  </div>
</template>

<script lang="ts" setup>
// import j3ChooseArea from '../../../components/chooseArea/src/index.vue'
let changeArea = val => {
  console.log(val)
}
</script>

<style lang="scss" scoped>

</style>