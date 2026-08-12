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

### 2.3 尺寸

```vue demo:form-time-select-sizes title="尺寸变体"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("");
const medium = ref("");
const large = ref("");
</script>

<template>
  <div class="demo-stack">
    <AppTimeSelect v-model="small" size="small" clearable placeholder="小型" aria-label="小型时间" />
    <AppTimeSelect v-model="medium" size="default" clearable placeholder="默认" aria-label="默认时间" />
    <AppTimeSelect v-model="large" size="large" clearable placeholder="大型" aria-label="大型时间" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 200px); }
</style>
```

### 2.4 分钟步长

```vue demo:form-time-select-step title="步长 15 分钟"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimeSelect v-model="value" :step="15" clearable placeholder="每 15 分钟" /></template>
```

### 2.5 禁用

```vue demo:form-time-select-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("09:30");
</script>

<template><AppTimeSelect v-model="value" disabled /></template>
```

### 2.6 校验状态

```vue demo:form-time-select-invalid title="校验状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-stack">
    <AppTimeSelect v-model="value" invalid described-by="ts-hint" clearable placeholder="选择时间" aria-label="时间" />
    <span id="ts-hint">请选择一个预约时间</span>
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-direction: column; gap: 8px; width: min(100%, 240px); }
</style>
```

### 2.7 可选时段

```vue demo:form-time-select-min-max-time title="时段限制"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimeSelect v-model="value" start="08:00" end="20:00" min-time="09:00" max-time="18:00" clearable placeholder="可选预约时段" /></template>
```

### 2.8 不可清空

```vue demo:form-time-select-no-clear title="禁用清空"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("09:30");
</script>

<template><AppTimeSelect v-model="value" :clearable="false" /></template>
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
