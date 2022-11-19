<template>
  <!-- 弹出层 -->
  <el-popover
    placement="bottom-start"
    title="城市选择器"
    :width="500"
    trigger="click"
    v-model:visible="visible"
  >
    <!-- 触发内容 -->
    <template #reference>
      <div class="please-select">
        <div>{{ result }}</div>
        <div class="svg-wrapper">
          <el-icon-arrowdown :class="{ rotate: visible }" />
        </div>
      </div>
    </template>

    <!-- 显示内容 -->
    <div class="container">
      <!-- 城市选择 -->
      <el-row>
        <el-col :span="10">
          <el-radio-group v-model="radioValue">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :span="14">
          <!-- 搜索下拉框 -->
          <!-- filterable默认根据绑定的label进行过滤 -->
          <!-- 现通过filter-method支持根据拼音进行过滤 -->
          <el-select v-model="selectValue" filterable placeholder="选择或搜索城市"
            :filter-method="filterMethod"
            @change="changeSelectCity">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>

      <!-- 按城市 -->
      <template v-if="radioValue==='按城市'">
        <div class="title">城市首字母</div>
        <div class="city">
          <!-- cities数据为对象 -->
          <!-- 方法一：遍历对象，参数依次为value, key -->
          <!-- <div v-for="(value, key) in cities">{{key}}</div> -->
          <!-- 方法二：对象转数组，从而遍历数组 -->

          <!-- 城市首字母 -->
          <div class="city-item" @click="clickLetter(item)" v-for="(item, index) in Object.keys(cities)" :key="index">
            {{ item }}
          </div>
        </div>
        <!-- 城市滚动区 -->
        <el-scrollbar max-height="400px">
          <template v-for="(value, key) in cities" :key="key">
            <!-- 为字母对应城市绑定id -->
            <el-row class="city-name-wrapper" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col :span="22" class="city-name">
                <div @click="clickItem(item)" class="city-name-item" v-for="item in value" :key="item.id">
                  {{ item.name }}
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>

      <!-- 按省份 -->
      <template v-else>
        <div class="title">省份首字母</div>
        <div class="province">
          <!-- 省份首字母 -->
          <div class="province-item" @click="clickLetter(item)"  v-for="(item, index) in Object.keys(provinces)" :key="index">
            {{item}}
          </div>
          <!-- 省份滚动区 -->
          <el-scrollbar max-height="400px">
            <!-- 返回二维数组进行处理 -->
            <template v-for="(item, index) in Object.values(provinces)" :key="index">
              <template v-for="(item1, index1) in item" :key="index1">
                <!-- 为字母对应省份绑定id -->
                <el-row class="province-name-wrapper" :id="item1.id">
                  <el-col :span="3">{{ item1.name }}:</el-col>
                  <el-col :span="21" class="province-name">
                    <div @click="clickProvinceItem(item2)" class="province-name-item"  v-for="(item2, index2) in item1.data" :key="index2">
                      {{ item2 }}
                    </div>
                  </el-col>
                </el-row>
              </template>
            </template>
          </el-scrollbar>
        </div>
      </template>

    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import city from "../libs/city.ts";
import province from "../libs/province.json"
import { ICity, IProvince } from './types.ts'

// 分发事件
const emits = defineEmits(['change', 'changeProvince'])

// 存放选择结果
const result = ref<string>("请选择");
// 控制弹出层显示
const visible = ref<boolean>(false);
// 单选框的值
const radioValue = ref<string>("按城市");
// 下拉选项选中的值
const selectValue = ref<string>("");
// 下拉框数据(保存过滤前后数据)
// ICity接口进行约束
// 数据结构示例：
// [{
// 	"id": 56,
// 	"spell": "aba",
// 	"name": "阿坝"
// }]
const options = ref<ICity>([]);

// 下拉框原始数据(所有城市)
const optionsRawData = ref<ICity>([]);

// 城市数据
const cities = ref(city.cities);
// 省份数据
const provinces = ref(province);

// 点击城市处理
const clickItem = (item: ICity) => {
  result.value = item.name
  visible.value = false
  emits('change', item)
}
// 点击省份处理
const clickProvinceItem = (item: string) => {
  result.value = item
  visible.value = false
  emits('changeProvince', item)
}
// 下拉选择处理
const changeSelectCity = (id: number) => {
  const city = optionsRawData.value.find(item => item.id === id)
  result.value = city.name
  // 感觉el-select选中之后会触发el-popover关闭，但是visible的值并未改变
  visible.value = false
  // console.log('visible的值:', visible.value);

  if(radioValue.value === '按城市') {
    emits('change', city)
  } else {
    emits('changeProvince', city.name)
  }
}

// 点击字母处理
// 不使用a标签的锚点链接，会改变地址栏的地址影响路由
// 避坑：根据绑定id获取DOM，使用原生方法进行跳转
const clickLetter = (letter: string) => {
  const el = document.getElementById(letter)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

onMounted(() => {
  getCitySelectData()
})

// 获取城市下拉框数据
const getCitySelectData = () => {
  // 得到二维数组 使用flat扁平化为一维数组
  const values = Object.values(cities.value).flat(2)
  options.value = values
  optionsRawData.value = values
}

// 自定义过滤方法
const filterMethod = ((val: string) => {
  // 下拉框原始数据
  // 记录一下坑：要基于原始数据进行过滤(第一次写成基于options.value进行过滤导致删除内容的时候过滤无效)
  const optionsRawData = Object.values(cities.value).flat(2)
  if(!val) {
    getCitySelectData()
  } else {
    if (radioValue.value === '按城市') {
      // 支持中文/拼音过滤
      options.value = optionsRawData.filter(item => item.name.includes(val) || item.spell.includes(val))
    } else {
      // 仅支持中文过滤
      options.value = optionsRawData.filter(item => item.name.includes(val))
    }
  }
})

</script>

<style lang="scss" scoped>
.please-select {
  display: flex;
  cursor: pointer;
  width: fit-content;
  .svg-wrapper {
    svg {
      position: relative;
      top: 2px;
      transition: all 0.25s linear;
    }
  }
  .rotate {
    transform: rotate(180deg);
  }
}

.container {
  .title {
    margin-top: 10px;
    font-size: 16px;
  }
  .city, .province {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    .city-item, .province-item {
      // width: 30px;
      // height: 30px;
      padding: 4px 10px;
      margin: 0 10px 10px 0;
      border: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
    }
  }
  .city-name-wrapper, .province-name-wrapper {
    margin-bottom: 10px;
    .city-name, .province-name {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      &-item {
        margin: 0 10px 10px 0;
        cursor: pointer;
      }
    }
  }
}
</style>
