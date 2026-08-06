---
title: 时间选项选择器
component: AppTimeSelect
category: form
source: packages/ui/src/components/form/AppTimeSelect.vue
---

# 时间选项选择器（AppTimeSelect）

`AppTimeSelect` 按固定步长生成一组离散的时间点，适合选择预约、营业或排班时段。

## 1. 用处

- 适用于只允许特定时间粒度的选择，例如每 15 分钟或每 30 分钟。
- `start`、`end` 控制选项列表，`minTime`、`maxTime` 在列表内进一步禁用不可选时间。
- 输出统一为 `HH:mm` 字符串，可直接作为接口字段。

## 2. 代码演示

### 2.1 默认半小时选项

```vue demo:time-select-basic title="基础时间选择"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("09:30");
</script>

<template><AppTimeSelect v-model="value" clearable /></template>
```

### 2.2 预约时间边界

```vue demo:time-select-bounds title="限定预约时段"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimeSelect v-model="value" start="08:00" end="20:00" :step="15" min-time="09:00" max-time="18:00" placeholder="选择预约时间" /></template>
```

## 3. API 使用方式

时间字符串使用 24 小时 `HH:mm` 格式。列表范围与允许范围可以分开设置：先展示完整营业时段，再禁用临时不可约的时间。

```vue
<AppTimeSelect
  v-model="appointment.startAt"
  start="08:00"
  end="21:00"
  :step="30"
  :min-time="todayMinimumTime"
  clearable
  @change="checkAvailability"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中的 `HH:mm` 值。 | `string` | 必填 |
| `start` / `end` | 生成下拉选项的首末时间。 | `string` | `"00:00"` / `"23:30"` |
| `step` | 相邻时间选项间隔，单位为分钟。 | `number` | `30` |
| `minTime` / `maxTime` | 仍可选择的最小和最大时间。 | `string` | — |
| `id` / `name` / `size` | 控件标识、表单字段名和尺寸。 | `string` / `ControlSize` | — |
| `placeholder` / `disabled` / `invalid` / `clearable` | 控件展示和状态。 | `string` / `boolean` | 内置默认值 |
| `ariaLabel` / `describedBy` | 无障碍名称与说明关联。 | `string` | 内置默认值 |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `string` | 选择或清空时间时触发。 |
| `clear` | — | 用户清空时间时触发。 |
| `visible-change` | `boolean` | 下拉面板打开或关闭。 |
