---
title: 全局组件容器
component: AppGlobalComponent
category: base
source: packages/ui/src/components/base/AppGlobalComponent.vue
---

# 全局组件容器（AppGlobalComponent）

`AppGlobalComponent` 是一个不参与布局的兼容容器。它只渲染默认插槽，根元素使用 `display: contents`，不会形成额外的视觉盒子。

## 1. 用处

`AppGlobalComponent` 是兼容性容器：它只输出默认插槽，并通过 `display: contents` 避免自身干扰 Flex、Grid 或高度计算。仅在已有组合代码需要稳定组件边界时使用，普通页面通常不需要主动引入。

## 2. 代码演示

### 2.1 不参与布局的组件边界

```vue demo:global-component-boundary title="无布局容器"
<script setup lang="ts">
import { AppGlobalComponent } from "aps-design-pro";
</script>

<template>
  <AppGlobalComponent>
    <main>工作区内容</main>
    <aside>全局浮层挂载区域</aside>
  </AppGlobalComponent>
</template>
```

它适合已有组合代码需要一个统一组件边界、但不能改变栅格、间距或高度计算的场景。通常业务页面不需要主动引入它。

### 2.2 在 Grid 中保持子项层级

下面的两个 `section` 仍然是 Grid 的直接子项，`AppGlobalComponent` 不会新增一层网格单元：

```vue demo:global-component-grid title="不干扰 Grid"
<script setup lang="ts">
import { AppGlobalComponent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="global-component-grid">
    <AppGlobalComponent>
      <section class="global-component-cell">数据概览</section>
      <section class="global-component-cell">快捷操作</section>
    </AppGlobalComponent>
  </div>
</template>

<style scoped>
.global-component-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  max-width: 360px;
}

.global-component-cell {
  padding: 14px;
  border: 1px solid var(--aps-border);
  border-radius: 10px;
  color: var(--aps-text);
  font-size: 14px;
}
</style>
```

### 2.3 使用限制

- 不要把它当作语义容器：它没有 `section`、`main` 等语义，也不提供辅助名称。
- 不要向它传入 `class`、`id`、事件或 ARIA 属性。组件关闭了属性继承，这些属性不会透传给子元素。
- 需要可控制布局或语义的容器时，使用布局类组件或原生语义元素。

### 2.4 包裹多个子节点

默认插槽可以放多个平级子节点，组件本身不产生额外包裹盒子，子节点直接挂到父级。

```vue demo:global-component-slots title="包裹多个子节点"
<script setup lang="ts">
import { AppGlobalComponent } from "aps-design-pro";
</script>

<template>
  <AppGlobalComponent>
    <span>头像</span>
    <span>名称</span>
    <span>状态</span>
  </AppGlobalComponent>
</template>
```

### 2.5 作为浮层挂载边界

把浮层宿主区域包在里面，既保留组件边界，又不干扰外层 Flex 或 Grid 的排布。

```vue demo:global-component-overlay title="作为浮层挂载边界"
<script setup lang="ts">
import { AppGlobalComponent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="global-component-overlay">
    <AppGlobalComponent>
      <section class="overlay-cell">浮层挂载区 A</section>
      <section class="overlay-cell">浮层挂载区 B</section>
    </AppGlobalComponent>
  </div>
</template>

<style scoped>
.global-component-overlay {
  display: flex;
  gap: 10px;
}
.overlay-cell {
  padding: 12px 16px;
  border: 1px solid var(--aps-border);
  border-radius: 8px;
  color: var(--aps-text);
  font-size: 14px;
}
</style>
```

### 2.6 不干扰 Grid 子项

被 `AppGlobalComponent` 包住的内容，在父级 `Grid` 中仍然是直接子项，不会被多包一层网格单元。

```vue demo:global-component-layout title="不干扰 Grid 子项"
<script setup lang="ts">
import { AppGlobalComponent } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="global-component-layout">
    <AppGlobalComponent>
      <article class="layout-cell">内容卡片一</article>
      <article class="layout-cell">内容卡片二</article>
    </AppGlobalComponent>
  </div>
</template>

<style scoped>
.global-component-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  max-width: 360px;
}
.layout-cell {
  padding: 14px;
  border: 1px solid var(--aps-border);
  border-radius: 10px;
  color: var(--aps-text);
  font-size: 14px;
}
</style>
```

## 3. API 使用方式

只将它作为无样式的组件边界包住原有内容，不向它传递样式、事件或 ARIA 属性。若内容需要语义或布局控制，直接使用 `main`、`section`、`div` 等原生元素。

```vue
<AppGlobalComponent>
  <AppNotificationHost />
  <AppDialogHost />
</AppGlobalComponent>
```

## 4. Props 与 Slots

### 4.1 Props

`AppGlobalComponent` 没有 Props。

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 原样渲染的子内容。 |

### 4.3 Events

`AppGlobalComponent` 不提供自定义事件。
