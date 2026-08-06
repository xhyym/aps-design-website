---
title: 日历
component: AppCalendar
category: form
source: packages/ui/src/components/form/AppCalendar.vue
---

# 日历（AppCalendar）

`AppCalendar` 是直接嵌入页面的月视图选择器，适合排期、签到和日期概览中的单日选择。

## 1. 用处

- 用于不需要下拉面板的固定日期选择。
- 可标示一个起止区间，但 `modelValue` 仍只保存当前选中的单日。
- 需要输入框形式或日期类型切换时使用 `AppDatePicker`。

## 2. 代码演示

### 2.1 带今天和清除操作

```vue demo:form-calendar-basic title="基础日历"
<script setup lang="ts">
import { ref } from "vue";
import { AppCalendar } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-08");
</script>

<template>
  <AppCalendar v-model="date" show-footer clearable aria-label="课程开课日期" />
</template>
```

### 2.2 标记活动区间

```vue demo:form-calendar-range title="日期范围标记"
<script setup lang="ts">
import { ref } from "vue";
import { AppCalendar } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-12");
</script>

<template>
  <AppCalendar v-model="date" range-start="2026-08-08" range-end="2026-08-16" min="2026-08-01" max="2026-08-31" aria-label="八月排期" />
</template>
```

## 3. API 使用方式

```vue
<AppCalendar v-model="form.startDate" min="2026-01-01" :max="releaseDate" @change="refreshSchedule" />
```

日期值使用 `YYYY-MM-DD`。边界值同样使用该格式，以保持字符串比较和接口字段的时区语义一致。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中的日期。 | `string` | `undefined` |
| `rangeStart` / `rangeEnd` | 仅用于高亮显示的起止日期。 | `string` | `undefined` |
| `min` / `max` | 可选择的日期边界。 | `string` | `undefined` |
| `disabled` | 禁用日历交互。 | `boolean` | `false` |
| `showFooter` / `clearable` | 显示“今天”操作及清除入口。 | `boolean` | `true` / `false` |
| `ariaLabel` | 日历无障碍名称。 | `string` | `"日历"` |

### 4.2 Slots

该组件没有插槽。需要完全自定义单元格内容时，请在业务层组合 `AppCalendarPanel` 和说明区域。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 选中日期变化。 |
| `clear` | — | 清除当前日期。 |
