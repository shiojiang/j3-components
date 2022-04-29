<template>
  <div class="j3-menu-container">
    <j3-menu :data="menuData" default-active="1" background-color="#545c64" />
  </div>
</template>

<script setup lang="ts">
let menuData = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'setting'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'edit',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document'
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'menu'
      },
    ]
  }
]
</script>

<style lang="scss" scoped>
.j3-menu-container {
  width: 300px;
}
</style>