---
title: 顶部栏
component: AppHeaderBar
category: layout
source: packages/ui/src/components/layout/AppHeaderBar.vue
---

# 顶部栏（AppHeaderBar）

`AppHeaderBar` 是应用工作区顶部的轻量标题栏，左侧显示标题和副标题，右侧保留操作插槽。

## 1. 用处

- 在管理后台的固定顶部展示当前工作区名称。
- 将当前页面的全局操作集中放在右侧，避免与内容区的业务操作混淆。
- 保持不同模块的标题栏高度、边框与操作间距一致。

不要在 `AppHeaderBar` 内放置页面级的大段说明或搜索表单；这些内容更适合页面主体或独立筛选区域。

## 2. 代码演示

### 2.1 标题与副标题

```vue demo:layout-header-bar-basic title="基础顶部栏"
<script setup lang="ts">
import { AppHeaderBar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppHeaderBar title="数据工作台" subtitle="实时掌握业务进展" class="demo-header" />
</template>

<style scoped>
.demo-header { width: min(100%, 560px); border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
```

### 2.2 右侧全局操作

```vue demo:layout-header-bar-actions title="操作插槽"
<script setup lang="ts">
import { AppButton, AppHeaderBar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppHeaderBar title="客户管理" subtitle="共 128 位客户" class="demo-header">
    <AppButton size="small" variant="secondary">导出</AppButton>
    <AppButton size="small">新增客户</AppButton>
  </AppHeaderBar>
</template>

<style scoped>
.demo-header { width: min(100%, 560px); border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
```


### 2.3 副标题

```vue demo:layout-header-bar-subtitle title="副标题"
<script setup lang="ts">
import { AppHeaderBar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppHeaderBar title="订单中心" subtitle="查看与管理全部订单" />
</template>
```

### 2.4 右侧操作

```vue demo:layout-header-bar-default title="右侧操作"
<script setup lang="ts">
import { AppButton, AppHeaderBar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppHeaderBar title="项目列表">
    <AppButton size="small">新建项目</AppButton>
  </AppHeaderBar>
</template>
```

### 2.5 自定义标题

```vue demo:layout-header-bar-title title="自定义标题"
<script setup lang="ts">
import { AppHeaderBar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppHeaderBar title="数据报表" subtitle="按日聚合的访问统计" />
</template>
```
## 3. API 使用方式

```vue
<AppHeaderBar title="内容中心" subtitle="管理文章、评论和素材">
  <AppButton variant="secondary" size="small">帮助中心</AppButton>
  <AppButton size="small">创建文章</AppButton>
</AppHeaderBar>
```

默认插槽中的多个元素会自动横向排列。标题或副标题为空时，对应文字不会渲染。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 顶部栏主标题。 | `string` | `""` |
| `subtitle` | 主标题下方的简短说明。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 右侧操作区，适合放置轻量按钮或用户入口。 |
