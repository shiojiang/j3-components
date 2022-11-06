<template>
  <div>
    <j3-choose-city @change="changeCity"></j3-choose-city>
  </div>
</template>

<script lang="ts" setup>
let changeCity = val => {
  console.log(val)
}
</script>

<style lang="scss" scoped>

</style>