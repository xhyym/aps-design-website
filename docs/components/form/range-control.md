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
