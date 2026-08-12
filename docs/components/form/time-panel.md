---
title: 时间面板
component: AppTimePanel
category: form
source: packages/ui/src/components/form/AppTimePanel.vue
---

# 时间面板（AppTimePanel）

`AppTimePanel` 是嵌入式时间列表，供业务自定义弹层或时间选择器组合使用。

## 1. 用处

- 直接嵌入设置面板、弹窗或筛选区域选择单个时间。
- 按 `min`、`max`、`step` 生成有效的 `HH:mm` 时间项。
- 需要输入框触发和清除入口时使用 `AppTimePicker`。

## 2. 代码演示

### 2.1 基础面板

```vue demo:form-time-panel-basic title="基础时间面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("10:00");
</script>

<template><AppTimePanel v-model="value" aria-label="时间面板" /></template>
```

### 2.2 工作时间面板

```vue demo:form-time-panel-boundary title="时间边界"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimePanel v-model="value" min="09:00" max="18:00" :step="30" :show-footer="false" aria-label="可选工作时间" /></template>
```

### 2.3 分钟步长

```vue demo:form-time-panel-step title="步长 15 分钟"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("10:00");
</script>

<template><AppTimePanel v-model="value" :step="15" aria-label="时间面板" /></template>
```

### 2.4 确认与取消

```vue demo:form-time-panel-show-footer title="页脚操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const confirmed = ref("尚未确认");
</script>

<template>
  <div class="demo-stack">
    <AppTimePanel v-model="value" :show-footer="true" @confirm="(val: string) => (confirmed = `已确认：${val}`)" aria-label="时间面板" />
    <span>{{ confirmed }}</span>
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-direction: column; gap: 8px; }
</style>
```

### 2.5 最早时间

```vue demo:form-time-panel-min-only title="最早时间"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimePanel v-model="value" min="09:00" aria-label="可选时间" /></template>
```

### 2.6 最晚时间

```vue demo:form-time-panel-max-only title="最晚时间"
<script setup lang="ts">
import { ref } from "vue";
import { AppTimePanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template><AppTimePanel v-model="value" max="18:00" aria-label="可选时间" /></template>
```

## 3. API 使用方式

```vue
<AppTimePanel v-model="draftTime" :step="15" @confirm="applyTime" @cancel="closePanel" />
```

`confirm` 只在显示页脚时触发；隐藏页脚时，业务层可直接监听 `update:modelValue`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前时间。 | `string` | — |
| `min` / `max` / `step` | 可选时间边界与分钟步长。 | `string` / `number` | `undefined` / `1` |
| `showFooter` | 是否显示确认与取消操作。 | `boolean` | `true` |
| `ariaLabel` | 无障碍名称。 | `string` | `"时间选择"` |

### 4.2 Slots

该组件没有插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `(value: string)` | 选择时间时更新草稿值。 |
| `confirm` | `(value: string)` | 点击确认后触发。 |
| `cancel` | — | 点击取消后触发。 |
