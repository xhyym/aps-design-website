---
title: 颜色面板
component: AppColorPickerPanel
category: form
source: packages/ui/src/components/form/AppColorPickerPanel.vue
---
# 颜色面板（AppColorPickerPanel）

`AppColorPickerPanel` 是直接嵌入页面的颜色编辑面板。

## 1. 用处

- 用于主题编辑器、图表配置等需要持续显示颜色控制区的场景。
- 支持预定义颜色、颜色格式和透明度。
- 需要紧凑触发器时使用 `AppColorPicker`。

## 2. 代码演示

### 2.1 基础颜色

```vue demo:form-color-picker-panel-basic title="基础面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";
const value = ref("#0071e3");
</script>
<template><AppColorPickerPanel v-model="value" aria-label="颜色面板" /></template>
```

### 2.2 透明度与预定义色

```vue demo:form-color-picker-panel-alpha title="透明颜色"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";
const value = ref("rgba(0, 113, 227, 0.6)");
</script>
<template><AppColorPickerPanel v-model="value" format="rgb" show-alpha :predefine="['#0071e3', '#1d1d1f']" aria-label="透明颜色面板" /></template>
```

### 2.3 禁用状态

```vue demo:color-picker-panel-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" disabled aria-label="禁用颜色面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
```

### 2.4 HSL 格式

```vue demo:color-picker-panel-format-hsl title="HSL 格式"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("hsl(210, 100%, 46%)");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" format="hsl" aria-label="HSL 格式面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
```

### 2.5 预定义颜色

```vue demo:color-picker-panel-predefine title="预定义颜色"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" :predefine="['#0071e3', '#34c759', '#ff3b30']" aria-label="预定义颜色面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
```

`predefine` 在面板底部展示业务预定义色板，适合品牌主题等需要统一取色的场景。

### 2.6 透明度

```vue demo:color-picker-panel-showalpha title="透明度"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" show-alpha aria-label="带透明度面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
```

### 2.7 RGB 与预定义

```vue demo:color-picker-panel-rgb-predefine title="RGB 预定义"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" format="rgb" :predefine="['#0071e3', '#1d1d1f', '#f5f5f7']" aria-label="RGB 预定义面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
```

### 2.8 透明 HEX

```vue demo:color-picker-panel-alpha-hex title="透明 HEX"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPickerPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("rgba(0, 113, 227, 0.5)");
</script>

<template>
  <div class="demo-field">
    <AppColorPickerPanel v-model="value" show-alpha format="hex" aria-label="透明 HEX 面板" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 280px); }
</style>
```

`showAlpha` 与 `format="hex"` 组合时，确认值会以 8 位 HEX（含 alpha）形式回传。

## 3. API 使用方式

```vue
<AppColorPickerPanel v-model="theme.accent" format="hex" :predefine="brandColors" @change="saveDraft" />
```

颜色值由 `format` 规范化后回传；业务层负责决定如何持久化主题配置。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前颜色。 | `string` | — |
| `format` | 输出格式。 | `ColorValueFormat` | `"hex"` |
| `showAlpha` | 显示透明度控制。 | `boolean` | `false` |
| `predefine` | 预定义颜色。 | `string[]` | `[]` |
| `disabled` / `ariaLabel` | 禁用状态与无障碍名称。 | `boolean` / `string` | `false` / `"颜色面板"` |

### 4.2 Slots

该组件没有插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 颜色变化。 |
