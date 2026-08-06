---
title: 容器
component: AppContainer
category: layout
source: packages/ui/src/components/layout/AppContainer.vue
---

# 容器（AppContainer）

`AppContainer` 用于搭建纵向或横向的页面骨架，并与 `AppContainerHeader`、`AppContainerMain`、`AppContainerAside`、`AppContainerFooter` 组合使用。

## 1. 用处

- 在固定工作区中划分头部、主体、底部，避免业务页面各自处理 Flex 布局。
- 用横向模式承载侧栏与内容区；小屏幕下会自动转为纵向排列。
- 用 `fill` 建立填满父级的工作区，配合可滚动主体避免页面双滚动条。

## 2. 代码演示

### 2.1 纵向业务容器

```vue demo:layout-container-basic title="纵向容器"
<script setup lang="ts">
import { AppContainer, AppContainerFooter, AppContainerHeader, AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainer bordered class="demo-container">
    <AppContainerHeader bordered>项目概览</AppContainerHeader>
    <AppContainerMain>在同一容器中组织头部、内容与底部区域。</AppContainerMain>
    <AppContainerFooter bordered>已自动保存</AppContainerFooter>
  </AppContainer>
</template>

<style scoped>
.demo-container { min-height: 210px; }
</style>
```

### 2.2 侧栏与内容区

```vue demo:layout-container-horizontal title="横向容器"
<script setup lang="ts">
import { AppContainer, AppContainerAside, AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainer direction="horizontal" bordered class="demo-container">
    <AppContainerAside bordered width="narrow">筛选条件</AppContainerAside>
    <AppContainerMain>右侧内容区会占用剩余空间。</AppContainerMain>
  </AppContainer>
</template>

<style scoped>
.demo-container { min-height: 170px; }
</style>
```

## 3. API 使用方式

```vue
<AppContainer direction="vertical" fill bordered aria-label="订单工作区">
  <AppContainerHeader bordered>订单管理</AppContainerHeader>
  <AppContainerMain scrollable><OrderTable /></AppContainerMain>
  <AppContainerFooter bordered><Pagination /></AppContainerFooter>
</AppContainer>
```

容器只负责布局，不会自动计算浏览器高度。请在应用外层提供确定高度后再使用 `fill`，并把需要滚动的内容放在 `AppContainerMain`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `as` | 最外层语义标签。 | `"div" \| "section" \| "article"` | `"div"` |
| `direction` | 内部子项的排列方向。 | `"horizontal" \| "vertical"` | `"vertical"` |
| `gap` | 子项之间的固定间距。 | `"none" \| "small" \| "default" \| "large"` | `"none"` |
| `bordered` | 是否添加容器边框与圆角。 | `boolean` | `false` |
| `fill` | 是否填满父级的高度。 | `boolean` | `false` |
| `ariaLabel` | 容器的可访问名称。 | `string` | `"容器布局"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 按声明顺序放入容器分区组件。 |
