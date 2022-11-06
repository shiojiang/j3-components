<template>
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
          <el-select v-model="selectValue" filterable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
      <div class="title">定位城市</div>
      <!-- 城市首字母 -->
      <div class="city">
        <!-- cities数据为对象 -->
        <!-- 方法一：遍历对象，参数依次为value, key -->
        <!-- <div v-for="(value, key) in cities">{{key}}</div> -->
        <!-- 方法二：对象转数组，从而遍历数组 -->
        <div class="city-item" @click="clickLetter(item)" v-for="(item, index) in Object.keys(cities)" :key="index">
          {{ item }}
        </div>
      </div>
      <!-- 滚动区 -->
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
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import city from "../libs/city.ts";
import { ICity } from './types.ts'

// 分发事件
const emits = defineEmits(['change'])

// 存放选择结果
const result = ref<string>("请选择");
// 控制弹出层显示
const visible = ref<boolean>(false);
// 单选框的值
const radioValue = ref<string>("按城市");
// 下拉选项选中的值
const selectValue = ref<string>("");
// 下拉框数据
const options = ref([
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
]);

// 城市数据
const cities = ref(city.cities);
// 点击城市处理
const clickItem = (item: ICity) => {
  result.value = item.name
  visible.value = false
  emits('change', item)
}
// 点击字母处理
// 不使用a标签的锚点链接，会改变地址栏的地址影响路由
// 避坑：根据绑定id获取DOM，使用原生方法进行跳转
const clickLetter = (letter: string) => {
  const el = document.getElementById(letter)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

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
  .city {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    &-item {
      width: 30px;
      height: 30px;
      // padding: 4px 8px;
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
  .city-name-wrapper {
    margin-bottom: 10px;
    .city-name {
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
