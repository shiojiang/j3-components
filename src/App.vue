<template>
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
// svg默认大小
svg {
  width: 1em;
  height: 1em;
}
// 导航菜单栏高度100%
html,
body,
#app,
.el-container,
.el-menu {
  height: 100%;
}

</style>