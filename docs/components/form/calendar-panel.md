---
title: 日历面板
component: AppCalendarPanel
category: form
source: packages/ui/src/components/form/AppCalendarPanel.vue
---

# 日历面板（AppCalendarPanel）

`AppCalendarPanel` 提供无外框的日期网格，适合嵌入弹层、排期侧栏或自定义日期组合控件。

## 1. 用处

- 作为 `AppCalendar`、日期选择器或业务自定义浮层的底层日期面板。
- 支持当前值、区间端点、范围边界和业务禁用日期。
- 仅处理日期选择，不包含“今天”与清除等外围操作。

## 2. 代码演示

### 2.1 基础日期面板

```vue demo:form-calendar-panel-basic title="嵌入式日期面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppCalendarPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-08");
</script>

<template>
  <AppCalendarPanel v-model="date" aria-label="日期面板" />
</template>
```

### 2.2 仅允许工作日

```vue demo:form-calendar-panel-disabled title="禁用日期规则"
<script setup lang="ts">
import { ref } from "vue";
import { AppCalendarPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const date = ref("2026-08-12");

function disableWeekend(value: string) {
  const day = new Date(`${value}T00:00:00`).getDay();
  return day === 0 || day === 6;
}
</script>

<template>
  <AppCalendarPanel v-model="date" min="2026-08-01" max="2026-08-31" :disabled-date="disableWeekend" aria-label="工作日选择" />
</template>
```

## 3. API 使用方式

```vue
<AppCalendarPanel v-model="selectedDate" :range-start="range.start" :range-end="range.end" @select="confirmDate" />
```

`selectedDate` 是 `modelValue` 的兼容别名；新代码优先使用 `v-model`。`select` 在用户点击有效日期时触发。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` / `selectedDate` | 当前日期；`modelValue` 优先。 | `string` | `undefined` |
| `rangeStart` / `rangeEnd` | 用于显示区间两端和区间背景。 | `string` | `undefined` |
| `min` / `max` / `disabledDate` | 边界和自定义禁用规则。 | `string` / `DatePickerDisabledDate` | `undefined` |
| `disabled` | 禁用整个面板。 | `boolean` | `false` |
| `ariaLabel` | 面板无障碍名称。 | `string` | `"日期选择"` |

### 4.2 Slots

该组件没有插槽，以保证日期网格的键盘导航和禁用规则完整一致。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `select` | `(value: string)` | 选择有效日期。 |
