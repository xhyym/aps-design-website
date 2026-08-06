---
title: 分段控制器
component: AppSegmented
category: form
source: packages/ui/src/components/form/AppSegmented.vue
---

# 分段控制器（AppSegmented）

`AppSegmented` 用于在少量平级视图或数据范围间快速切换。它采用单选组语义并支持方向键、Home 与 End 键导航，不用于提交复杂表单选项。

## 1. 用处

- 在“全部 / 进行中 / 已归档”等轻量视图之间切换。
- 在图表中切换日、周、月等时间粒度。
- 为少量、不换行、互斥的选项提供比下拉框更直接的入口。

选项数量较多、标签很长或需要说明文字时，应使用单选框或选择器。

## 2. 代码演示

### 2.1 课程状态视图切换

```vue demo:segmented-basic title="基础分段控制器"
<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeView = ref("all");
const viewOptions = [
  { label: "全部", value: "all" },
  { label: "进行中", value: "active" },
  { label: "已归档", value: "archived" },
];
</script>

<template>
  <AppSegmented v-model="activeView" :options="viewOptions" aria-label="课程状态筛选" />
</template>
```

选择变化时更新 `v-model`，业务页面依据当前值刷新列表或视图；组件本身不请求数据。

### 2.2 禁用不可用的粒度

```vue demo:segmented-disabled title="禁用选项"
<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeView = ref("week");
const timeOptions = [
  { label: "日", value: "day" },
  { label: "周", value: "week" },
  { label: "月", value: "month", disabled: true },
];
</script>

<template>
  <AppSegmented v-model="activeView" :options="timeOptions" size="small" aria-label="数据时间范围" />
</template>
```

禁用项不会被点击或键盘导航选中。用户需要理解不可用原因时，应在控制器外提供明确说明。

## 3. API 使用方式

使用字符串 `v-model` 和稳定的 `SelectOption[]`。选中项不存在时，组件会把焦点落在第一个可用项，但不会擅自修改业务值。

```vue
<AppSegmented
  v-model="chartRange"
  :options="rangeOptions"
  aria-label="图表时间范围"
  @change="reloadChart"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值，配合 `v-model` 使用。 | `string` | — |
| `options` | 选项列表，每项包含 `label`、`value` 和可选 `disabled`。 | `SelectOption[]` | — |
| `disabled` | 是否禁用整个控制器。 | `boolean` | `false` |
| `size` | 控件尺寸。 | `"small" \| "default"` | `"default"` |
| `ariaLabel` | 单选组的辅助名称。 | `string` | `"分段选择"` |

### 4.2 Slots

`AppSegmented` 不提供插槽，选项展示由 `options` 中的文本定义，保证每一段具有统一的宽度和键盘语义。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 选择新的非禁用选项后触发。 |
