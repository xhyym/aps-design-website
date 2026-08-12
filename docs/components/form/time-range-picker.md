---
title: 时间范围选择器
component: AppTimeRangePicker
category: form
source: packages/ui/src/components/form/AppTimeRangePicker.vue
---

# 时间范围选择器（AppTimeRangePicker）

`AppTimeRangePicker` 用一个起止对象表达单日时间区间，并在确认前阻止结束时间早于开始时间。

## 1. 用处

- 用于直播、预约、排班等同一天内的开始和结束时间。
- 输出 `{ start, end }`，清除后两个端点同时为空。
- 跨日期的事件应使用 `AppDateTimeRangePicker`。

## 2. 代码演示

### 2.1 直播时间

```vue demo:form-time-range-picker-basic title="基础时间范围"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "09:00", end: "10:30" });
</script>

<template><div class="demo-field"><AppTimeRangePicker v-model="value" clearable aria-label="直播时间" /></div></template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.2 工作时段边界

```vue demo:form-time-range-picker-boundary title="紧凑范围"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "", end: "" });
</script>

<template><div class="demo-field"><AppTimeRangePicker v-model="value" min="09:00" max="18:00" :step="30" compact aria-label="值班时间" /></div></template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.3 分钟步长

```vue demo:form-time-range-picker-step title="步长 15 分钟"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "", end: "" });
</script>

<template>
  <div class="demo-field"><AppTimeRangePicker v-model="value" :step="15" clearable aria-label="直播时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.4 自定义端点标签

```vue demo:form-time-range-picker-custom-labels title="自定义标签"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "09:00", end: "10:30" });
</script>

<template>
  <div class="demo-field"><AppTimeRangePicker v-model="value" start-label="开始" end-label="结束" compact clearable aria-label="值班时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.5 禁用

```vue demo:form-time-range-picker-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "09:00", end: "10:30" });
</script>

<template>
  <div class="demo-field"><AppTimeRangePicker v-model="value" disabled /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.6 校验状态

```vue demo:form-time-range-picker-invalid title="校验状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "", end: "" });
</script>

<template>
  <div class="demo-field">
    <AppTimeRangePicker v-model="value" invalid described-by="tr-hint" clearable aria-label="时间范围" />
    <span id="tr-hint">请选择完整的时间区间</span>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); display: flex; flex-direction: column; gap: 8px; }
</style>
```

### 2.7 边界

```vue demo:form-time-range-picker-min-max title="时间边界"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "", end: "" });
</script>

<template>
  <div class="demo-field"><AppTimeRangePicker v-model="value" min="09:00" max="18:00" clearable aria-label="营业时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.8 不可清空

```vue demo:form-time-range-picker-no-clear title="禁用清空"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeRangePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref({ start: "09:00", end: "10:30" });
</script>

<template>
  <div class="demo-field"><AppTimeRangePicker v-model="value" :clearable="false" compact aria-label="固定时段" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

## 3. API 使用方式

```vue
<AppTimeRangePicker v-model="form.officeHours" :step="15" @change="saveHours" />
```

传入与输出均为 `TimeRangeValue`；业务层无需自行修正端点顺序。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 起止时间对象。 | `TimeRangeValue` | — |
| `id` / `name` / `startLabel` / `endLabel` / `placeholder` | 字段标识、端点标签和占位文本。 | `string` | `undefined` |
| `min` / `max` / `step` | 可选时间边界和分钟步长。 | `string` / `number` | `undefined` / `1` |
| `disabled` / `compact` / `clearable` | 状态、紧凑显示与清除入口。 | `boolean` | `false` |
| `ariaLabel` | 无障碍名称。 | `string` | `"时间范围选择器"` |

### 4.2 Slots

该组件没有插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: TimeRangeValue)` | 有效范围确认后变化。 |
| `clear` | — | 清空两个时间端点。 |
