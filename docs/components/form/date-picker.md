---
title: 日期选择器
component: AppDatePicker
category: form
source: packages/ui/src/components/form/AppDatePicker.vue
---

# 日期选择器（AppDatePicker）

`AppDatePicker` 通过紧凑输入框打开日期面板，并可统一选择日期、月份、年份、周或多个日期。

## 1. 用处

- 表单字段需要选择单个或多个日期时使用。
- `type` 决定值形态：单值类型输出字符串，多日期类型输出字符串数组。
- 需要同时选择起止值时使用 `AppDateRangePicker`。

## 2. 代码演示

### 2.1 单日期与清除

```vue demo:form-date-picker-basic title="单日期"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08-08");
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" clearable aria-label="开课日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

### 2.2 多日期活动排期

```vue demo:form-date-picker-multiple title="多日期"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["2026-08-08", "2026-08-15"]);
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="values" type="dates" aria-label="线下活动日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

### 2.3 月份选择

```vue demo:form-date-picker-month title="月份"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026-08");
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" type="month" clearable placeholder="选择月份" aria-label="发布月份" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

### 2.4 年份选择

```vue demo:form-date-picker-year title="年份"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("2026");
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" type="year" clearable placeholder="选择年份" aria-label="招生年份" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

### 2.5 周选择

```vue demo:form-date-picker-week title="按周"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" type="week" clearable placeholder="选择周" aria-label="排期周" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

### 2.6 快捷日期

```vue demo:form-date-picker-shortcuts title="快捷项"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker, type DatePickerShortcut } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const shortcuts: DatePickerShortcut[] = [
  { label: "今天", value: "2026-08-12" },
  { label: "本周一", value: "2026-08-10" },
  { label: "月初", value: "2026-08-01" },
];
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" :shortcuts="shortcuts" clearable placeholder="选择日期" aria-label="快捷日期" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

### 2.7 禁用周末

```vue demo:form-date-picker-disabled-date title="禁用日期"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker, type DatePickerDisabledDate } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const disableWeekend: DatePickerDisabledDate = (value) => {
  const day = new Date(`${value}T00:00:00`).getDay();
  return day === 0 || day === 6;
};
</script>

<template>
  <div class="demo-field"><AppDatePicker v-model="value" :disabled-date="disableWeekend" clearable placeholder="仅工作日" aria-label="工作日" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); }
</style>
```

### 2.8 边界与校验

```vue demo:form-date-picker-min-max title="边界限制"
<script setup lang="ts">
import { ref } from "vue";
import { AppDatePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field">
    <AppDatePicker v-model="value" min="2026-08-01" max="2026-08-31" invalid described-by="date-hint" placeholder="八月内日期" aria-label="报名日期" />
    <span id="date-hint">仅接受 2026 年 8 月的日期</span>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 320px); display: flex; flex-direction: column; gap: 8px; }
</style>
```

## 3. API 使用方式

```vue
<AppDatePicker v-model="form.publishMonth" type="month" :shortcuts="monthShortcuts" clearable />
```

所有日期值使用 ISO 风格文本。`shortcuts` 可提供预设值或返回预设值的函数，适合“今天”“本月”等动态入口。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前日期值；由 `type` 决定单值或数组。 | `DatePickerPanelValue` | — |
| `type` | 选择粒度与数量。 | `"date" \| "dates" \| "month" \| "months" \| "year" \| "years" \| "week"` | `"date"` |
| `id` / `name` / `placeholder` | 字段标识、名称和占位文本。 | `string` | `undefined` |
| `min` / `max` / `disabledDate` | 日期边界与自定义禁用规则。 | `string` / `DatePickerDisabledDate` | `undefined` |
| `shortcuts` | 快捷日期项。 | `DatePickerShortcut[]` | `[]` |
| `disabled` / `invalid` / `clearable` | 状态控制。 | `boolean` | `false` |
| `ariaLabel` / `describedBy` | 无障碍名称和说明元素 ID。 | `string` | `"日期选择器"` / `undefined` |

### 4.2 Slots

该组件没有插槽；快捷项和选择内容由受控数据驱动。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: DatePickerPanelValue)` | 选择结果变化。 |
| `clear` | — | 清除当前选择。 |
