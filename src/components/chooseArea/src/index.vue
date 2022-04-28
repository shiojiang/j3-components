<template>
  <div class="el-select-container">
    <!-- 省 -->
    <el-select
      v-model="provinceValue"
      placeholder="请选择省份">
      <el-option
        v-for="item in allAreas"
        :key="item.code"
        :label="item.name"
        :value="item.code">
      </el-option>
    </el-select>
    <!-- 市 -->
    <el-select
      v-model="cityValue"
      placeholder="请选择城市"
      :disabled="!provinceValue">
      <el-option
        v-for="item in selectCities"
        :key="item.code"
        :label="item.name"
        :value="item.code">
      </el-option>
    </el-select>
    <!-- 区 -->
    <el-select
      v-model="areaValue"
      placeholder="请选择区域"
      :disabled="!provinceValue || !cityValue">
      <el-option
        v-for="item in selectAreas"
        :key="item.code"
        :label="item.name"
        :value="item.code">
      </el-option>
    </el-select>
    <button @click="handle">handle</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import allAreasArr from '../lib/pca-code.json'

// 选中数据
const provinceValue = ref<string>('')
const cityValue = ref<string>('')
const areaValue = ref<string>('')

// 所有省市区数据
const allAreas = ref(allAreasArr)
console.log('所有省市区数据', allAreas.value);
// 城市下拉框数据
let selectCities = computed(() => {
  if(!provinceValue) {
    return []
  } else {
  }
})
// console.log('城市下拉框数据', selectCities);
// 区域下拉框数据
let selectAreas = computed(() => {
})
let handle = () => {
}
</script>

<style lang="scss" scoped>
  .el-select-container {
    .el-select:nth-child(2) {
      margin: 0 10px;
    }
  }
</style>