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

### 2.3 禁用状态

```vue demo:color-picker-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPicker v-model="color" disabled aria-label="禁用颜色" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 240px); }
</style>
```

### 2.4 面板位置

```vue demo:color-picker-placement-top title="上方展开"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPicker v-model="color" placement="top" aria-label="上方展开颜色" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 240px); }
</style>
```

`placement="top"` 让面板在触发器上方展开，适合颜色选择器位于页面底部时避免被遮挡。

### 2.5 预设颜色

```vue demo:color-picker-presets title="预设颜色"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPicker v-model="color" :presets="['#0071e3', '#34c759', '#ff3b30', '#ffcc00']" aria-label="预设颜色" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 240px); }
</style>
```

`presets` 在面板底部提供常用色快选，减少在色盘中反复取色。

### 2.6 可清除

```vue demo:color-picker-clearable title="可清除"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPicker v-model="color" clearable aria-label="可清除颜色" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 240px); }
</style>
```

### 2.7 HSL 格式

```vue demo:color-picker-format-hsl title="HSL 格式"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("hsl(210, 100%, 46%)");
</script>

<template>
  <div class="demo-field">
    <AppColorPicker v-model="color" format="hsl" aria-label="HSL 格式颜色" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 240px); }
</style>
```

`format` 决定确认后回传的颜色字符串格式，与后端约定保持一致即可，组件内部统一转换为目标格式。

### 2.8 透明度

```vue demo:color-picker-showalpha title="透明度"
<script setup lang="ts">
import { ref } from "vue";
import { AppColorPicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const color = ref("#0071e3");
</script>

<template>
  <div class="demo-field">
    <AppColorPicker v-model="color" show-alpha aria-label="带透明度颜色" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 240px); }
</style>
```

`showAlpha` 在面板中加入透明度通道，输出值会包含 alpha 信息。

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
