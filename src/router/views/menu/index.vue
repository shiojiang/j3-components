<template>
  <div class="j3-menu-container">
  <!-- 技巧：$attrs、自定义传入键名 -->
    <!-- 两级导航菜单：使用vue模板 -->
    <j3-menu
      :data="menuData"
      default-active="1"
      name="customName"
      index="customIndex"
      icon="customIcon"
      children="customChildren"
      />
    <!-- 无限级导航菜单：使用JSX -->
    <j3-infinite-menu
      :data="infiniteMenuData"
      default-active="1"
      background-color="#545c64"
      active-text-color="#E6A23C"
      mode="horizontal"/>
  </div>
</template>

<script setup lang="ts">
let menuData = [
  {
    customName: '导航1',
    customIndex: '1',
    customIcon: 'Document'
  },
  {
    customName: '导航2',
    customIndex: '2',
    customIcon: 'Setting'
  },
  {
    customName: '导航3',
    customIndex: '3',
    customIcon: 'Edit',
    customChildren: [
      {
        customName: '导航3-1',
        customIndex: '3-1',
        customIcon: 'Document'
      },
      {
        customName: '导航3-2',
        customIndex: '3-2',
        customIcon: 'Menu'
      },
    ]
  }
]

let infiniteMenuData = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Setting'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Edit',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document'
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'Menu',
        children: [
          {
            name: '导航3-2-1',
            index: '3-2-1',
            icon: 'Document'
          },
          {
            name: '导航3-2-2',
            index: '3-2-2',
            icon: 'Menu',
            children: [
              {
                name: '导航3-2-2-1',
                index: '3-2-2-1',
                icon: 'Document'
              },
              {
                name: '导航3-2-2-2',
                index: '3-2-2-2',
                icon: 'Document'
              },
            ]
          },
        ]
      },
    ]
  }
]
</script>

<style lang="scss" scoped>
.j3-menu-container {
  width: 400px;
}
</style>