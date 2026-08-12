---
title: 日期选择面板
component: AppDatePickerPanel
category: form
source: packages/ui/src/components/form/AppDatePickerPanel.vue
---

# 日期选择面板（AppDatePickerPanel）

`AppDatePickerPanel` 是没有输入框与外层浮层的日期、月份、年份和周选择面板，供业务组合使用。

## 1. 用处

- 嵌入自定义弹窗、侧栏或复杂筛选区时使用。
- 支持单日期、多日期、月份、年份和周的统一切换。
- 对外只输出格式化后的文本或文本数组，不暴露内部 `Date` 状态。

## 2. 代码演示

### 2.1 日期面板

```vue demo:form-date-picker-panel-basic title="日期面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08-08");
</script>

<template>
  <AppDatePickerPanel v-model="value" aria-label="日期选择面板" />
</template>
```

### 2.2 月份面板与边界

```vue demo:form-date-picker-panel-month title="月份面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08");
</script>

<template>
  <AppDatePickerPanel v-model="value" type="month" min="2026-01" max="2026-12" aria-label="发布月份" />
</template>
```

### 2.3 多日期

```vue demo:form-date-picker-panel-dates title="多日期"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["2026-08-08", "2026-08-12"]);
</script>

<template><AppDatePickerPanel v-model="value" type="dates" aria-label="多日期选择" /></template>
```

### 2.4 年份

```vue demo:form-date-picker-panel-year title="年份"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026");
</script>

<template><AppDatePickerPanel v-model="value" type="year" aria-label="年份选择" /></template>
```

### 2.5 周

```vue demo:form-date-picker-panel-week title="按周"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppDatePickerPanel v-model="value" type="week" aria-label="周选择" /></template>
```

### 2.6 禁用

```vue demo:form-date-picker-panel-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08-08");
</script>

<template><AppDatePickerPanel v-model="value" disabled aria-label="只读日期面板" /></template>
```

## 3. API 使用方式

```vue
<AppDatePickerPanel v-model="filters.months" type="months" @select="applyMonthFilter" />
```

类型为复数的 `dates`、`months`、`years` 使用字符串数组，其他类型使用字符串。可通过 `rangeStart`、`rangeEnd` 将面板作为范围选择的子面板。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选择结果。 | `DatePickerPanelValue` | — |
| `type` | 选择粒度与多选模式。 | `DatePickerPanelType` | `"date"` |
| `rangeStart` / `rangeEnd` | 范围选择时高亮的端点。 | `string` | `undefined` |
| `min` / `max` / `disabledDate` | 可选边界和日期禁用规则。 | `string` / `DatePickerDisabledDate` | `undefined` |
| `disabled` | 禁用面板。 | `boolean` | `false` |
| `ariaLabel` | 无障碍名称。 | `string` | `"日期选择"` |

### 4.2 Slots

该组件没有插槽，以保证日期格、月份格和年份格共享同一选择状态。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `select` | `(value: DatePickerPanelValue)` | 用户完成一次选择。 |
