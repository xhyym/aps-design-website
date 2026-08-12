---
title: 范围控制器
component: AppRangeControl
category: form
source: packages/ui/src/components/form/AppRangeControl.vue
---

# 范围控制器（AppRangeControl）

`AppRangeControl` 是紧凑的原生范围输入封装，为自定义面板提供统一的尺寸、色调与键盘交互。

## 1. 用处

- 用于音量、透明度、风险阈值等不需要标签和刻度的紧凑数值控制。
- 与 `AppSlider` 相比更轻量；需要显示值、刻度和输入框时应使用 `AppSlider`。
- 仍保留原生 range 的键盘与辅助技术语义。

## 2. 代码演示

### 2.1 基础数值控制

```vue demo:form-range-control-basic title="基础范围"
<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const volume = ref(48);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="volume" ariaLabel="播放音量" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.2 反色紧凑阈值

```vue demo:form-range-control-tone title="尺寸与色调"
<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const risk = ref(72);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="risk" :min="0" :max="100" :step="5" tone="inverse" size="small" ariaLabel="风险阈值" :ariaValueText="`${risk}%`" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.3 范围与步长

```vue demo:form-range-control-min-max-step title="min/max/step"
<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const opacity = ref(50);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="opacity" :min="0" :max="100" :step="10" ariaLabel="背景不透明度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.4 禁用状态

```vue demo:form-range-control-disabled title="禁用范围"
<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref(40);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="value" :min="0" :max="100" disabled ariaLabel="禁用范围" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
```

### 2.5 不同尺寸

```vue demo:form-range-control-size title="size 尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const a = ref(30);
const b = ref(70);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="a" size="small" ariaLabel="紧凑尺寸" />
    <AppRangeControl v-model="b" size="default" ariaLabel="默认尺寸" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); display: flex; flex-direction: column; gap: 16px; }
</style>
```

### 2.6 完整无障碍文本

```vue demo:form-range-control-aria title="aria 文本"
<script setup lang="ts">
import { ref } from "vue";
import { AppRangeControl } from "aps-design-pro";
import "aps-design-pro/style.css";

const risk = ref(64);
</script>

<template>
  <div class="demo-field">
    <AppRangeControl v-model="risk" :min="0" :max="100" :step="1" ariaLabel="账户安全风险阈值" :ariaValueText="`当前风险 ${risk} 分`" />
    <p class="demo-hint">读屏将播报：账户安全风险阈值，当前风险 {{ risk }} 分</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
.demo-hint { margin: 8px 0 0; color: #6b7280; font-size: 13px; }
</style>
```

## 3. API 使用方式

```vue
<AppRangeControl v-model="form.opacity" :min="0" :max="1" :step="0.05" aria-label="背景透明度" />
```

务必提供 `ariaLabel`；需要自定义读屏数值时使用 `ariaValueText`。组件仅负责输入，数值对应的业务影响应在控件附近明确说明。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前数值。 | `number` | — |
| `min` / `max` / `step` | 可选范围和步长。 | `number \| "any"` | `0` / `100` / `1` |
| `disabled` | 禁用状态。 | `boolean` | `false` |
| `size` | 默认或紧凑尺寸。 | `"small" \| "default"` | `"default"` |
| `tone` | 默认或反色轨道。 | `"default" \| "inverse"` | `"default"` |
| `ariaLabel` / `ariaValueText` | 无障碍名称和当前值文本。 | `string` | — / `undefined` |

### 4.2 Slots

该组件没有插槽，避免额外内容影响紧凑范围控件的焦点区域。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: number)` | 范围值变化。 |
