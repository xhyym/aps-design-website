---
title: 容器主体
component: AppContainerMain
category: layout
source: packages/ui/src/components/layout/AppContainerMain.vue
---

# 容器主体（AppContainerMain）

`AppContainerMain` 是纵向容器中承担剩余空间的内容区域，可选择由自身承接滚动。

## 1. 用处

- 放置表格、表单、详情等主要业务内容，并在头部与底部之间自动伸展。
- 在确定高度的工作区中开启 `scrollable`，让页面只保留一个可预期的内容滚动区域。
- 用 `as` 调整内容的语义标签，不改变布局能力。

## 2. 代码演示

### 2.1 主体内容区

```vue demo:layout-container-main-basic title="基础主体"
<script setup lang="ts">
import { AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerMain as="section" class="demo-main">主内容区会自动占据纵向容器的剩余空间。</AppContainerMain>
</template>

<style scoped>
.demo-main { width: min(100%, 480px); min-height: 120px; border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
```

### 2.2 内容区独立滚动

```vue demo:layout-container-main-scrollable title="可滚动主体"
<script setup lang="ts">
import { AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ["需求已确认", "视觉稿已通过", "开发中", "等待测试", "准备发布", "上线后复盘"];
</script>

<template>
  <AppContainerMain scrollable class="demo-main">
    <p v-for="item in items" :key="item">{{ item }}</p>
  </AppContainerMain>
</template>

<style scoped>
.demo-main { width: min(100%, 480px); height: 118px; border: 1px solid var(--aps-line-soft); border-radius: 10px; }
.demo-main p { margin: 0 0 12px; }
</style>
```


### 2.3 语义标签

```vue demo:layout-container-main-as title="语义标签"
<script setup lang="ts">
import { AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerMain as="section">
    <p>以 section 语义渲染的主体区域。</p>
  </AppContainerMain>
</template>
```

### 2.4 内边距

```vue demo:layout-container-main-padding title="内边距"
<script setup lang="ts">
import { AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppContainerMain padding="none"><p>无内边距</p></AppContainerMain>
    <AppContainerMain padding="spacious"><p>宽松内边距</p></AppContainerMain>
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 8px; }
</style>
```

### 2.5 主体内容

```vue demo:layout-container-main-content title="主体内容"
<script setup lang="ts">
import { AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerMain>
    <h3>销售概览</h3>
    <p>这里是表格、图表等核心业务内容区。</p>
  </AppContainerMain>
</template>
```
## 3. API 使用方式

```vue
<AppContainer fill>
  <AppContainerHeader bordered>活动记录</AppContainerHeader>
  <AppContainerMain scrollable padding="compact"><ActivityList /></AppContainerMain>
</AppContainer>
```

`scrollable` 只在父级拥有确定高度时才有意义。若父级没有高度约束，内容会自然撑开，应该由页面外层决定滚动归属。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `as` | 主体的语义标签。 | `"main" \| "section" \| "article" \| "div"` | `"main"` |
| `padding` | 内容区内边距档位。 | `"none" \| "compact" \| "default" \| "spacious"` | `"default"` |
| `scrollable` | 是否在主体内启用滚动。 | `boolean` | `false` |
| `ariaLabel` | 主体区域的可访问名称。 | `string` | `"容器主内容"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 表格、表单、列表等主业务内容。 |
