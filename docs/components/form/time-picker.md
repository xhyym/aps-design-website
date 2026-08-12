---
title: 时间选择器
component: AppTimePicker
category: form
source: packages/ui/src/components/form/AppTimePicker.vue
---

# 时间选择器（AppTimePicker）

`AppTimePicker` 通过输入框打开时间面板，并将选择结果以 `HH:mm` 文本输出。

## 1. 用处

- 用于课程开播、预约、工作时间等单个时间点选择。
- 可通过 `min`、`max` 和 `step` 限定业务可选时段与分钟粒度。
- 需要两个端点的预约时间请使用 `AppTimeRangePicker`。

## 2. 代码演示

### 2.1 单个时间

```vue demo:form-time-picker-basic title="基础时间"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("09:30");
</script>

<template><div class="demo-field"><AppTimePicker v-model="value" clearable aria-label="开播时间" /></div></template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
```

### 2.2 限制工作时段

```vue demo:form-time-picker-boundary title="边界与步长"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><div class="demo-field"><AppTimePicker v-model="value" min="09:00" max="18:00" :step="30" placeholder="选择工作时间" aria-label="工作时间" /></div></template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
```

### 2.3 分钟步长

```vue demo:form-time-picker-step title="步长 15 分钟"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" :step="15" clearable placeholder="每 15 分钟" aria-label="提醒时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
```

### 2.4 禁用

```vue demo:form-time-picker-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("09:30");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" disabled aria-label="固定时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
```

### 2.5 校验状态

```vue demo:form-time-picker-invalid title="校验状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field">
    <AppTimePicker v-model="value" invalid described-by="time-hint" placeholder="选择时间" aria-label="时间" />
    <span id="time-hint">请选择有效的时间点</span>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); display: flex; flex-direction: column; gap: 8px; }
</style>
```

### 2.6 最早时间

```vue demo:form-time-picker-min title="最早时间"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" min="13:00" clearable placeholder="下午时段起" aria-label="下午时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
```

### 2.7 自定义占位

```vue demo:form-time-picker-custom-label title="自定义文案"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" placeholder="请选择开播时间" aria-label="课程开播时间" clearable /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
```

### 2.8 不可清空

```vue demo:form-time-picker-no-clear title="禁用清空"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("20:00");
</script>

<template>
  <div class="demo-field"><AppTimePicker v-model="value" :clearable="false" aria-label="固定时间" /></div>
</template>

<style scoped>
.demo-field { width: min(100%, 300px); }
</style>
```

## 3. API 使用方式

```vue
<AppTimePicker v-model="form.startAt" min="08:00" max="22:00" :step="15" @change="checkCapacity" />
```

值采用 `HH:mm`。边界与步长只约束可选时间，服务端仍应校验提交数据。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前时间。 | `string` | — |
| `id` / `name` / `placeholder` | 字段标识、名称和占位文本。 | `string` | `undefined` |
| `min` / `max` / `step` | 时间边界及分钟步长。 | `string` / `number` | `undefined` / `1` |
| `disabled` / `invalid` / `clearable` | 状态和清除入口。 | `boolean` | `false` |
| `ariaLabel` / `describedBy` | 无障碍名称和说明元素 ID。 | `string` | `"时间选择器"` / `undefined` |

### 4.2 Slots

该组件没有插槽，时间列表与确认操作由组件统一管理。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 确认时间变化。 |
| `clear` | — | 清空当前时间。 |
