---
title: 进度条
component: AppProgress
category: data
source: packages/ui/src/components/data/AppProgress.vue
---

# 进度条（AppProgress）

`AppProgress` 展示上传、导入、任务处理等明确百分比进度，支持线形、圆形和仪表盘形态。

## 1. 用处

- 反映可量化的异步任务进度。
- 用 `status` 表达正常、成功、警告与失败语义。
- 用 `indeterminate` 表达未知长度的处理中状态。

## 2. 代码演示

### 2.1 带标签的线形进度

```vue demo:progress-line title="线形进度"
<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppProgress :percentage="68" label="课程资料上传" striped striped-flow /></template>
```

### 2.2 成功的圆形进度

```vue demo:progress-circle title="圆形进度"
<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppProgress :percentage="92" type="circle" status="success" /></template>
```


### 2.3 仪表盘

```vue demo:progress-dashboard title="仪表盘"
<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppProgress :percentage="68" type="dashboard" />
</template>
```

### 2.4 状态

```vue demo:progress-status title="状态"
<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppProgress :percentage="100" status="success" />
    <AppProgress :percentage="55" status="warning" />
    <AppProgress :percentage="20" status="error" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
```

### 2.5 条纹动画

```vue demo:progress-striped title="条纹动画"
<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppProgress :percentage="70" striped />
    <AppProgress :percentage="70" striped striped-flow />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
```

### 2.6 文字内置

```vue demo:progress-text-inside title="文字内置"
<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppProgress :percentage="45" text-inside label="上传进度" />
</template>
```

### 2.7 尺寸与线宽

```vue demo:progress-size title="尺寸与线宽"
<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppProgress :percentage="60" size="small" />
    <AppProgress :percentage="60" :stroke-width="12" />
    <AppProgress :percentage="60" type="circle" :width="120" :stroke-width="10" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 16px; }
</style>
```
## 3. API 使用方式

业务接口返回进度时更新 `percentage`；数值会被安全限制在 0 到 100 之间。

```vue
<AppProgress :percentage="upload.progress" :status="upload.failed ? 'error' : 'normal'" :format="(value) => `${value}%`" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `percentage` | 进度百分比。 | `number` | 必填 |
| `type` / `status` | 形态和状态。 | `"line" \| "circle" \| "dashboard"` / `ProgressStatus` | `"line" / "normal"` |
| `showText` / `textInside` / `label` | 数值文本与标签展示。 | `boolean \| string` | `true / false / ""` |
| `size` / `strokeWidth` / `width` | 尺寸、线宽与圆形直径。 | `"small" \| "default" \| number` | `"default" / 组件默认值` |
| `color` / `striped` / `stripedFlow` | 自定义颜色与条纹效果。 | `string \| boolean` | `"" / false / false` |
| `indeterminate` / `format` / `ariaLabel` | 不定进度、自定义显示文本与辅助名称。 | `boolean \| ProgressFormatter \| string` | `false / undefined / "进度"` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

该组件不提供自定义事件。
