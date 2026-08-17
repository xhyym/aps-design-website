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


### 2.3 自定义偏移量

```vue demo:nav-anchor-offset title="自定义偏移量"
<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "概览", targetId: "sec-a" },
  { key: "b", label: "配置", targetId: "sec-b" },
  { key: "c", label: "高级", targetId: "sec-c" },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" :offset="80" />
    <div class="content">
      <section id="sec-a"><h4>概览</h4><p v-for="i in 4" :key="i">概览内容 {{ i }}。</p></section>
      <section id="sec-b"><h4>配置</h4><p v-for="i in 4" :key="i">配置内容 {{ i }}。</p></section>
      <section id="sec-c"><h4>高级</h4><p v-for="i in 4" :key="i">高级内容 {{ i }}。</p></section>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
.content section { scroll-margin-top: 80px; margin-bottom: 24px; }
</style>
```

### 2.4 指定滚动容器

```vue demo:nav-anchor-container title="指定滚动容器"
<script setup lang="ts">
import { ref } from "vue";
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const box = ref<HTMLElement | null>(null);
const items = [
  { key: "x", label: "基础", targetId: "p-x" },
  { key: "y", label: "进阶", targetId: "p-y" },
];
</script>

<template>
  <div ref="box" class="scroll-box">
    <div class="inner">
      <AppAnchor :items="items" :scroll-container="box" />
      <div class="content">
        <section id="p-x"><h4>基础</h4><p v-for="i in 6" :key="i">基础段落 {{ i }}。</p></section>
        <section id="p-y"><h4>进阶</h4><p v-for="i in 6" :key="i">进阶段落 {{ i }}。</p></section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-box { height: 260px; overflow: auto; border: 1px solid var(--aps-line-soft); border-radius: 10px; padding: 12px; }
.inner { display: flex; gap: 20px; }
.content { flex: 1; color: var(--aps-muted); }
.content section { scroll-margin-top: 12px; margin-bottom: 20px; }
</style>
```

### 2.5 关闭粘性定位

```vue demo:nav-anchor-sticky-off title="关闭粘性定位"
<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "m", label: "模块一", targetId: "d-m" },
  { key: "n", label: "模块二", targetId: "d-n" },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" :sticky="false" />
    <div class="content">
      <section id="d-m"><h4>模块一</h4><p v-for="i in 4" :key="i">内容 {{ i }}。</p></section>
      <section id="d-n"><h4>模块二</h4><p v-for="i in 4" :key="i">内容 {{ i }}。</p></section>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
</style>
```

### 2.6 受控当前项

```vue demo:nav-anchor-controlled title="受控当前项"
<script setup lang="ts">
import { ref } from "vue";
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const current = ref("o1");
const items = [
  { key: "o1", label: "概览", targetId: "e-o1" },
  { key: "o2", label: "详情", targetId: "e-o2" },
  { key: "o3", label: "日志", targetId: "e-o3" },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" :offset="12" :model-value="current" @update:model-value="(k: string) => (current = k)" />
    <div class="content">
      <section id="e-o1"><h4>概览</h4><p v-for="i in 3" :key="i">概览 {{ i }}。</p></section>
      <section id="e-o2"><h4>详情</h4><p v-for="i in 3" :key="i">详情 {{ i }}。</p></section>
      <section id="e-o3"><h4>日志</h4><p v-for="i in 3" :key="i">日志 {{ i }}。</p></section>
      <p>当前目录项：{{ current }}</p>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
</style>
```

### 2.7 禁用某项

```vue demo:nav-anchor-disabled-item title="禁用某项"
<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "p", label: "可用章节", targetId: "f-p" },
  { key: "q", label: "暂未开放", targetId: "f-q", disabled: true },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" />
    <div class="content">
      <section id="f-p"><h4>可用章节</h4><p>可点击跳转。</p></section>
      <section id="f-q"><h4>暂未开放</h4><p>目录项被禁用，无法跳转。</p></section>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
</style>
```

### 2.8 自定义可访问名称

```vue demo:nav-anchor-label title="自定义可访问名称"
<script setup lang="ts">
import { AppAnchor } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "r", label: "第一节", targetId: "g-r" },
  { key: "s", label: "第二节", targetId: "g-s" },
];
</script>

<template>
  <div class="layout">
    <AppAnchor :items="items" aria-label="文档目录" />
    <div class="content">
      <section id="g-r"><h4>第一节</h4><p>内容。</p></section>
      <section id="g-s"><h4>第二节</h4><p>内容。</p></section>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; gap: 24px; }
.content { flex: 1; color: var(--aps-muted); }
</style>
```
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
