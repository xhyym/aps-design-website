---
title: 页面内容
component: AppPageContent
category: layout
source: packages/ui/src/components/layout/AppPageContent.vue
---

# 页面内容（AppPageContent）

`AppPageContent` 为页面的主体内容提供默认响应式内边距，并可在已具备边距的嵌入式内容中关闭它。

## 1. 用处

- 让不同业务页面共享一致的 24px 内容起始边距，并在小屏下自动缩小。
- 对表格、全宽图表等自身已有边界的内容关闭 `padded`，避免双重留白。
- 通过 `as` 使用 `main`、`section` 或普通容器标签表达页面结构。

## 2. 代码演示

### 2.1 默认内边距

```vue demo:layout-page-content-basic title="基础内容区"
<script setup lang="ts">
import { AppPageContent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppPageContent as="section" class="demo-content">
    <strong>内容区域</strong>
    <p>默认内边距适合直接承载页面中的一段业务内容。</p>
  </AppPageContent>
</template>

<style scoped>
.demo-content { width: min(100%, 480px); border: 1px solid var(--aps-line-soft); border-radius: 10px; }
.demo-content p { margin: 8px 0 0; color: var(--aps-muted); }
</style>
```

### 2.2 承载全宽表格

```vue demo:layout-page-content-flush title="关闭内边距"
<script setup lang="ts">
import { AppDataTable, AppPageContent, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

const rows = [{ name: "设计评审", owner: "周宁" }, { name: "接口联调", owner: "陈晓" }];
const columns: DataTableColumn<(typeof rows)[number]>[] = [{ key: "name", label: "任务" }, { key: "owner", label: "负责人" }];
</script>

<template>
  <AppPageContent :padded="false" class="demo-content">
    <AppDataTable :rows="rows" :columns="columns" row-key="name" />
  </AppPageContent>
</template>

<style scoped>
.demo-content { width: min(100%, 480px); overflow: hidden; border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
```


### 2.3 语义标签

```vue demo:layout-page-content-as title="语义标签"
<script setup lang="ts">
import { AppPageContent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppPageContent as="section">
    <p>以 section 渲染的页面内容。</p>
  </AppPageContent>
</template>
```

### 2.4 自定义内容

```vue demo:layout-page-content-custom title="自定义内容"
<script setup lang="ts">
import { AppPageContent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppPageContent>
    <h3>欢迎使用 APS Design</h3>
    <p>这是一段页面主体内容示例。</p>
  </AppPageContent>
</template>
```

### 2.5 默认内边距
```vue demo:layout-page-content-padded title="默认内边距"
<script setup lang="ts">
import { AppPageContent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppPageContent>
    <p>使用页面默认内边距的内容区。</p>
  </AppPageContent>
</template>
```
## 3. API 使用方式

```vue
<AppPageContent :padded="!isFullscreenTable">
  <AppDataTable v-if="isFullscreenTable" fill-height />
  <OrderBoard v-else />
</AppPageContent>
```

页面内容区不负责固定高度或滚动控制；需要表格填充剩余高度时，应交给外层工作区和表格本身处理。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `as` | 内容区的语义标签。 | `"main" \| "section" \| "div"` | `"main"` |
| `padded` | 是否使用页面默认内边距。 | `boolean` | `true` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 页面主体业务内容。 |
