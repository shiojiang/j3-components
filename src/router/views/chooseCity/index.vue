<template>
  <div>
    <j3-choose-city
      @change="changeCity"
      @change-province="changeProvince"
     />
  </div>
</template>

<script lang="ts" setup>
let changeCity = val => {
  console.log(val)
}
let changeProvince = val => {
  console.log(val)
}
</script>

<style lang="scss" scoped>

</style>