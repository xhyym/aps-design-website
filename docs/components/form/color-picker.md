---
title: 颜色选择器
component: AppColorPicker
category: form
source: packages/ui/src/components/form/AppColorPicker.vue
---

# 颜色选择器（AppColorPicker）

`AppColorPicker` 以紧凑触发器打开颜色面板，输出由 `format` 统一控制的颜色字符串。

## 1. 用处

- 用于品牌色、图表色、标签色和界面配置。
- 支持预设颜色、透明度与清除；组件不保存业务主题配置。
- 需要把颜色面板直接嵌入页面时使用 `AppColorPickerPanel`。

## 2. 代码演示

### 2.1 基础颜色

```vue demo:form-color-picker-basic title="基础颜色"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("#0071e3");
</script>

<template><AppColorPicker v-model="color" aria-label="品牌颜色" /></template>
```

### 2.2 RGBA 与预设

```vue demo:form-color-picker-alpha title="透明度与预设"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("rgba(0, 113, 227, 0.7)");
</script>

<template><AppColorPicker v-model="color" show-alpha format="rgb" :presets="['#0071e3', '#1d1d1f', '#f5f5f7']" clearable aria-label="遮罩颜色" /></template>
```

## 3. API 使用方式

```vue
<AppColorPicker v-model="form.brandColor" format="hex" :presets="brandPresets" @change="saveThemeDraft" />
```

保存配置时应约束接口接受的格式；颜色面板只保证输出格式一致，不替代后端校验。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前颜色值。 | `string` | — |
| `name` / `presets` | 原生字段名与预设色列表。 | `string` / `string[]` | `undefined` / `[]` |
| `format` | 输出颜色格式。 | `"hex" \| "rgb" \| "rgba" \| "hsv"` | `"hex"` |
| `showAlpha` / `clearable` | 启用透明度和清除入口。 | `boolean` | `false` |
| `placement` | 面板在触发器上方或下方展开。 | `"top" \| "bottom"` | `"bottom"` |
| `disabled` / `ariaLabel` | 禁用状态与无障碍名称。 | `boolean` / `string` | `false` / `"颜色选择器"` |

### 4.2 Slots

该组件没有插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 颜色确认后变化。 |
| `visible-change` | `(visible: boolean)` | 面板显示状态变化。 |
| `clear` | — | 清除颜色。 |
