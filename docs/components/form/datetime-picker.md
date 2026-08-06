---
title: 日期时间选择器
component: AppDateTimePicker
category: form
source: packages/ui/src/components/form/AppDateTimePicker.vue
---

# 日期时间选择器（AppDateTimePicker）

`AppDateTimePicker` 将日期日历与时间面板组合为一个 ISO 日期时间输入控件。

## 1. 用处

- 用于预约、发布时间、截止时间等需要同时选择日期和时间的单值字段。
- 输出固定为 `YYYY-MM-DDTHH:mm` 字符串，便于提交接口与进行范围比较。
- 支持时间步长、边界、禁用日期、快捷项与清空。

## 2. 代码演示

### 2.1 基础选择与清空

```vue demo:datetime-picker-basic title="单个日期时间"
<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08-06T10:30");
</script>

<template><AppDateTimePicker v-model="value" clearable /></template>
```

### 2.2 快捷项与边界

```vue demo:datetime-picker-shortcuts title="日期时间快捷项"
<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimePicker, type DatePickerShortcut } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const shortcuts: DatePickerShortcut[] = [{ label: "今天 10:00", value: "2026-08-06T10:00" }, { label: "明天 09:30", value: "2026-08-07T09:30" }];
</script>

<template><AppDateTimePicker v-model="value" :shortcuts="shortcuts" min="2026-08-06T09:00" max="2026-08-08T18:00" /></template>
```

## 3. API 使用方式

保持接口字段为组件输出的 ISO 分钟级字符串；范围限制应同样使用该格式，避免时区与格式比较歧义。

```vue
<AppDateTimePicker
  v-model="form.publishAt"
  min="2026-08-06T09:00"
  :disabled-date="isHoliday"
  :step="30"
  @change="validatePublishTime"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | ISO 分钟级日期时间。 | `string` | 必填 |
| `id` / `name` | 控件 ID 与表单字段名。 | `string` | — |
| `min` / `max` | 可选日期时间的闭区间。 | `string` | — |
| `disabledDate` | 禁用某个 ISO 日期的函数。 | `DatePickerDisabledDate` | — |
| `shortcuts` | 可快速提交的日期时间项。 | `DatePickerShortcut[]` | `[]` |
| `step` | 时间面板的分钟步长。 | `number` | `60` |
| `placeholder` / `disabled` / `invalid` / `clearable` | 输入外观与交互状态。 | `string` / `boolean` | 内置默认值 |
| `ariaLabel` / `describedBy` | 无障碍名称与说明关联。 | `string` | 内置默认值 |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `string` | 确认或清空日期时间。 |
| `clear` | — | 用户清空值时触发。 |
