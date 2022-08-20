<template>
  <div class="el-select-container">
    <!-- 省 -->
    <el-select
      v-model="province"
      placeholder="请选择省份"
      clearable>
      <el-option
        v-for="item in allAreas"
        :key="item.code"
        :label="item.name"
        :value="item.code">
      </el-option>
    </el-select>
    <!-- 市 -->
    <el-select
      v-model="city"
      placeholder="请选择城市"
      :disabled="!province"
      clearable>
      <el-option
        v-for="item in selectCities"
        :key="item.code"
        :label="item.name"
        :value="item.code">
      </el-option>
    </el-select>
    <!-- 区 -->
    <el-select
      v-model="area"
      placeholder="请选择区域"
      :disabled="!province || !city"
      clearable>
      <el-option
        v-for="item in selectAreas"
        :key="item.code"
        :label="item.name"
        :value="item.code">
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import allAreasArr from '../lib/pca-code.json'

export interface IAreaItem {
  name: string,
  code: string,
  children?: IAreaItem[]
}
export interface IData {
  name: string,
  code: string
}

// 选中code
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')

// 所有省市区数据
const allAreas = ref(allAreasArr)
// 城市下拉框数据
let selectCities = ref<IAreaItem[]>([])
// 区域下拉框数据
let selectAreas = ref<IAreaItem[]>([])

// 为父组件分发事件(省/市/区都有值时)
let emits = defineEmits(['change'])

// 监听省份
watch(() => province.value, val => {
  city.value = ''
  area.value = ''
  if (val) {
    let cities = allAreas.value.find(item => item.code === province.value).children
    selectCities.value = cities
  }
})
// 监听城市
watch(() => city.value, val => {
  area.value = ''
  if (val) {
    let areas = selectCities.value.find(item => item.code === city.value).children
    selectAreas.value = areas
  }
})
// 监听区域
watch(() => area.value, val => {
  // 构造省/市/区数据
  let provinceData: IData = {
    name: province.value && allAreas.value.find(item => item.code === province.value).name,
    code: province.value
  }
  let cityData: IData = {
    name: city.value && selectCities.value.find(item => item.code === city.value).name,
    code: city.value
  }
  let areaData: IData = {
    name: val && selectAreas.value.find(item => item.code === val).name,
    code: val
  }
  if (val) {
    emits('change', {
      province: provinceData,
      city: cityData,
      area: areaData
    })
  }
})
</script>

<style lang="scss" scoped>
  .el-select-container {
    .el-select:nth-child(2) {
      margin: 0 10px;
    }
  }
</style>