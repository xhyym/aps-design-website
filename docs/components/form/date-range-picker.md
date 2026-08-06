---
title: 日期范围选择器
component: AppDateRangePicker
category: form
source: packages/ui/src/components/form/AppDateRangePicker.vue
---

# 日期范围选择器（AppDateRangePicker）

`AppDateRangePicker` 将两个日期端点封装为一个受控对象，可选择日期、月份或年份范围。

## 1. 用处

- 用于报名周期、数据统计周期、合同周期等必须同时具备开始和结束时间的字段。
- `modelValue` 固定输出 `{ start, end }`，避免页面维护两个容易不同步的字段。
- 组件确认前会校验起止顺序，业务层不需要处理倒序范围。

## 2. 代码演示

### 2.1 日期范围

```vue demo:form-date-range-picker-basic title="日期范围"
<script setup lang="ts">
import { ref } from "vue";
import { AppDateRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "2026-08-01", end: "2026-08-15" });
</script>

<template>
  <div class="demo-field"><AppDateRangePicker v-model="value" clearable aria-label="报名日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.2 月份范围

```vue demo:form-date-range-picker-month title="月份范围"
<script setup lang="ts">
import { ref } from "vue";
import { AppDateRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "2026-03", end: "2026-08" });
</script>

<template>
  <div class="demo-field"><AppDateRangePicker v-model="value" type="monthrange" compact aria-label="经营月份" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

## 3. API 使用方式

```vue
<AppDateRangePicker v-model="filters.createdAt" :shortcuts="rangeShortcuts" start-label="开始日期" end-label="结束日期" />
```

范围对象在清除后为 `{ start: "", end: "" }`。不要将范围拆成两个不受控输入，以免服务端收到仅有一个端点的条件。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 起止日期对象。 | `DateRangeValue` | — |
| `type` | 日期、月份或年份范围。 | `"daterange" \| "monthrange" \| "yearrange"` | `"daterange"` |
| `id` / `startLabel` / `endLabel` / `placeholder` | 字段标识、端点标签和占位文本。 | `string` | `undefined` |
| `min` / `max` / `disabledDate` | 边界与禁用规则。 | `string` / `DatePickerDisabledDate` | `undefined` |
| `shortcuts` | 预设范围。 | `DateRangePickerShortcut[]` | `[]` |
| `disabled` / `compact` / `clearable` | 状态、紧凑显示和清除入口。 | `boolean` | `false` |
| `ariaLabel` | 无障碍名称。 | `string` | `"日期范围选择器"` |

### 4.2 Slots

该组件没有插槽；端点展示与错误状态由同一范围对象控制。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: DateRangeValue)` | 有效范围确认后变化。 |
| `clear` | — | 清除两个端点。 |
