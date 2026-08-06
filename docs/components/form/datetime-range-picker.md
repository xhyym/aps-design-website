---
title: 日期时间范围选择器
component: AppDateTimeRangePicker
category: form
source: packages/ui/src/components/form/AppDateTimeRangePicker.vue
---

# 日期时间范围选择器（AppDateTimeRangePicker）

`AppDateTimeRangePicker` 在同一面板中选择起止日期和时间，并始终输出结构化范围对象。

## 1. 用处

- 用于活动时段、会议预约、订单查询时间窗等起止日期时间输入。
- 值固定为 `{ start, end }`，每一端均为 ISO 分钟级字符串，避免将范围拼接成展示文本。
- 组件会阻止结束时间早于开始时间，并支持快捷范围与边界限制。

## 2. 代码演示

### 2.1 选择起止日期时间

```vue demo:datetime-range-picker-basic title="基础日期时间范围"
<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimeRangePicker, type DateRangeValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<DateRangeValue>({ start: "2026-08-06T09:00", end: "2026-08-06T18:00" });
</script>

<template><AppDateTimeRangePicker v-model="value" clearable /></template>
```

### 2.2 使用业务快捷范围

```vue demo:datetime-range-picker-shortcuts title="会议时间快捷项"
<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimeRangePicker, type DateRangeValue, type DateTimeRangePickerShortcut } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<DateRangeValue>({ start: "", end: "" });
const shortcuts: DateTimeRangePickerShortcut[] = [{ label: "今日工作时间", value: { start: "2026-08-06T09:00", end: "2026-08-06T18:00" } }, { label: "明日会议", value: { start: "2026-08-07T14:00", end: "2026-08-07T15:30" } }];
</script>

<template><AppDateTimeRangePicker v-model="value" :shortcuts="shortcuts" start-label="开始会议" end-label="结束会议" /></template>
```

## 3. API 使用方式

将范围对象直接传入查询或保存模型。对服务端接口，应明确按 `start`、`end` 两个字段传输，不建议依赖展示字符串解析。

```vue
<AppDateTimeRangePicker
  v-model="query.createdBetween"
  :shortcuts="recentTimeRanges"
  min="2026-08-01T00:00"
  max="2026-08-31T23:59"
  @change="reload"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 起止日期时间对象。 | `DateRangeValue` | 必填 |
| `id` / `name` | 控件 ID 与提交字段名。 | `string` | — |
| `startLabel` / `endLabel` | 面板中两个时间端的名称。 | `string` | `"开始时间"` / `"结束时间"` |
| `min` / `max` / `disabledDate` | 可选范围和禁用日期规则。 | `string` / `DatePickerDisabledDate` | `""` / — |
| `shortcuts` | 快速选择的范围。 | `DateTimeRangePickerShortcut[]` | `[]` |
| `step` | 两个时间面板的分钟步长。 | `number` | `60` |
| `placeholder` / `disabled` / `compact` / `clearable` | 控件外观与交互状态。 | `string` / `boolean` | 内置默认值 |
| `ariaLabel` | 控件无障碍名称。 | `string` | `"选择日期时间范围"` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `DateRangeValue` | 确认或清空范围时触发。 |
| `clear` | — | 用户清空范围时触发。 |
