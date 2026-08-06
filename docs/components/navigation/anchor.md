---
title: 锚点导航
component: AppAnchor
category: navigation
source: packages/ui/src/components/navigation/AppAnchor.vue
---

# 锚点导航（AppAnchor）

`AppAnchor` 为同页长内容提供目录、定位与当前章节跟踪，适合文档、详情页和较长的配置页面。

## 1. 用处

- 为分节的说明页面提供就近跳转。
- 通过观察可见章节同步当前目录项。
- 支持嵌套目录与不可访问章节；目标元素由页面自身提供 `id`。

## 2. 代码演示

### 2.1 基础章节定位

```vue demo:anchor-basic title="基础章节定位"
<script setup lang="ts">
import { ref } from "vue";
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("overview");
const items = [
  { key: "overview", label: "项目概览" },
  { key: "schedule", label: "交付计划" },
  { key: "members", label: "成员分工" },
];
</script>

<template>
  <div class="anchor-demo">
    <AppAnchor v-model="activeKey" :items="items" :offset="8" />
    <div class="sections">
      <section v-for="item in items" :id="item.key" :key="item.key"><h4>{{ item.label }}</h4><p>这是{{ item.label }}的说明内容。点击左侧锚点会平滑定位到本节。</p></section>
    </div>
  </div>
</template>

<style scoped>
.anchor-demo { display: grid; grid-template-columns: 132px minmax(0, 1fr); gap: 20px; }
.sections { display: grid; gap: 40px; }
.sections section { min-height: 120px; padding: 14px; border-radius: 12px; background: var(--aps-surface-soft); }
.sections h4, .sections p { margin: 0; }.sections p { margin-top: 8px; color: var(--aps-muted); line-height: 1.7; }
</style>
```

默认情况下，`key` 同时作为页面中目标元素的 `id`。若两者不同，可在目录项中配置 `targetId`。

### 2.2 嵌套目录与禁用项

```vue demo:anchor-nested title="嵌套目录与禁用项"
<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "guide", label: "接入指南", children: [{ key: "install", label: "安装依赖" }, { key: "import", label: "按需引入" }] },
  { key: "disabled", label: "暂未开放", disabled: true },
];
</script>

<template>
  <div class="anchor-demo">
    <AppAnchor :items="items" :sticky="false" />
    <div class="sections">
      <section id="guide"><h4>接入指南</h4><p>用于理解整体接入顺序。</p></section>
      <section id="install"><h4>安装依赖</h4><p>先安装组件库与对应样式。</p></section>
      <section id="import"><h4>按需引入</h4><p>在页面内按业务需要引入组件。</p></section>
    </div>
  </div>
</template>

<style scoped>
.anchor-demo { display: grid; grid-template-columns: 132px minmax(0, 1fr); gap: 20px; }.sections { display: grid; gap: 28px; }.sections section { min-height: 90px; padding: 14px; border-radius: 12px; background: var(--aps-surface-soft); }.sections h4, .sections p { margin: 0; }.sections p { margin-top: 8px; color: var(--aps-muted); }
</style>
```

禁用项仍会显示在目录中，但不会触发定位或参与当前章节计算，用于告知尚未开放的内容。

## 3. API 使用方式

```vue
<AppAnchor v-model="activeSection" :items="outline" :scroll-container="contentElement" :offset="64" @navigate="trackOutlineClick" />
```

每个可用目录项都要对应一个唯一的目标 `id`。当内容放在独立滚动容器里，必须传入 `scrollContainer`，否则组件会按窗口滚动计算。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 目录数据，单项支持 `key`、`label`、`targetId`、`disabled` 与 `children`。 | `AnchorItem[]` | — |
| `modelValue` | 受控的当前目录项键值。 | `string` | `undefined` |
| `offset` | 定位和可见性计算时预留的顶部偏移。 | `number` | `0` |
| `scrollContainer` | 自定义滚动容器；不传时使用窗口。 | `HTMLElement \| null` | `null` |
| `ariaLabel` | 目录导航的可访问名称。 | `string` | `"页面锚点"` |
| `sticky` | 是否使用粘性定位保持目录可见。 | `boolean` | `true` |

### 4.2 Slots

`AppAnchor` 不提供插槽，目录展示完全由 `items` 描述。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 当前章节变化或点击目录时触发。 | `key: string` |
| `navigate` | 用户点击可用目录项后触发。 | `item: AnchorItem` |
