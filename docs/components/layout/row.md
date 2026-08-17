---
title: 栅格行
component: AppRow
category: layout
source: packages/ui/src/components/layout/AppRow.vue
---

# 栅格行（AppRow）

`AppRow` 是 24 栅格系统的行容器，负责向 `AppCol` 提供列间距，并控制列组的对齐与换行。

## 1. 用处

- 将筛选条件、数据摘要卡片或表单字段以稳定的 24 栅格排列。
- 用二维 `gutter` 同时控制横向列间距与换行后的纵向间距。
- 对同一行不同高度的内容指定垂直对齐方式。

必须使用 `AppCol` 作为直接或间接子项才能获得栅格尺寸；`AppRow` 不会为普通元素自动划分宽度。

## 2. 代码演示

### 2.1 带横纵间距的栅格

```vue demo:layout-row-gutter title="栅格间距"
<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="[16, 16]" class="demo-row">
    <AppCol :span="12"><div>12 / 24</div></AppCol>
    <AppCol :span="12"><div>12 / 24</div></AppCol>
    <AppCol :span="8"><div>8 / 24</div></AppCol>
    <AppCol :span="16"><div>16 / 24</div></AppCol>
  </AppRow>
</template>

<style scoped>
.demo-row { width: min(100%, 560px); }
.demo-row :deep(.app-col) div { padding: 12px; border-radius: 8px; background: var(--aps-blue-soft); color: var(--aps-blue); text-align: center; }
</style>
```

### 2.2 垂直居中与两端分布

```vue demo:layout-row-align title="对齐方式"
<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow align="middle" justify="space-between" :gutter="12" class="demo-row">
    <AppCol :span="8"><div class="short">顶部</div></AppCol>
    <AppCol :span="8"><div class="tall">居中</div></AppCol>
    <AppCol :span="8"><div class="short">底部</div></AppCol>
  </AppRow>
</template>

<style scoped>
.demo-row { width: min(100%, 560px); }
.demo-row :deep(.app-col) div { display: grid; place-items: center; border-radius: 8px; background: var(--aps-surface-soft); color: var(--aps-muted); }
.short { height: 40px; }
.tall { height: 82px; }
</style>
```


### 2.3 基础栅格

```vue demo:layout-row-basic title="基础栅格"
<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="12">
    <AppCol :span="12"><div class="cell">12</div></AppCol>
    <AppCol :span="12"><div class="cell">12</div></AppCol>
  </AppRow>
</template>

<style scoped>
.cell { background: var(--aps-fill); border-radius: 4px; text-align: center; padding: 12px 0; }
</style>
```

### 2.4 自定义标签

```vue demo:layout-row-tag title="自定义标签"
<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow tag="section" :gutter="12">
    <AppCol :span="8"><div class="cell">列一</div></AppCol>
    <AppCol :span="8"><div class="cell">列二</div></AppCol>
    <AppCol :span="8"><div class="cell">列三</div></AppCol>
  </AppRow>
</template>

<style scoped>
.cell { background: var(--aps-fill); border-radius: 4px; text-align: center; padding: 12px 0; }
</style>
```

### 2.5 嵌套栅格

```vue demo:layout-row-nest title="嵌套栅格"
<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="12">
    <AppCol :span="12">
      <div class="outer">外层 12</div>
      <AppRow :gutter="12">
        <AppCol :span="6"><div class="cell">内 6</div></AppCol>
        <AppCol :span="6"><div class="cell">内 6</div></AppCol>
      </AppRow>
    </AppCol>
    <AppCol :span="12">
      <div class="outer">外层 12</div>
    </AppCol>
  </AppRow>
</template>

<style scoped>
.cell, .outer { background: var(--aps-fill); border-radius: 4px; text-align: center; padding: 12px 0; }
.outer { background: var(--aps-fill-strong); margin-bottom: 8px; }
</style>
```

### 2.6 横纵间距

```vue demo:layout-row-gutter-xy title="横纵间距"
<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="[16, 12]">
    <AppCol :span="8"><div class="cell">1</div></AppCol>
    <AppCol :span="8"><div class="cell">2</div></AppCol>
    <AppCol :span="8"><div class="cell">3</div></AppCol>
    <AppCol :span="8"><div class="cell">4</div></AppCol>
    <AppCol :span="8"><div class="cell">5</div></AppCol>
    <AppCol :span="8"><div class="cell">6</div></AppCol>
  </AppRow>
</template>

<style scoped>
.cell { background: var(--aps-fill); border-radius: 4px; text-align: center; padding: 12px 0; }
</style>
```
## 3. API 使用方式

```vue
<AppRow :gutter="[20, 16]" align="middle">
  <AppCol :xs="24" :md="12"><AppInput v-model="keyword" /></AppCol>
  <AppCol :xs="24" :md="12"><AppSelect v-model="status" :options="options" /></AppCol>
</AppRow>
```

单个数值 `gutter` 会同时应用于横向和纵向间距；传入 `[horizontal, vertical]` 可分别控制。负值会自动收敛为 0。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `tag` | 最外层语义标签。 | `"div" \| "section" \| "article" \| "main"` | `"div"` |
| `gutter` | 横纵列间距；数值表示两个方向相同。 | `number \| [number, number]` | `0` |
| `align` | 子项的交叉轴对齐方式。 | `"top" \| "middle" \| "bottom"` | `"top"` |
| `justify` | 子项的主轴分布方式。 | `"start" \| "end" \| "center" \| "space-around" \| "space-between" \| "space-evenly"` | `"start"` |
| `wrap` | 栅格总宽超出 24 时是否允许换行。 | `boolean` | `true` |
| `ariaLabel` | 栅格组的可访问名称。 | `string` | `"栅格布局"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 一个或多个 `AppCol`。 |
