---
title: 回到顶部
component: AppBackToTop
category: navigation
source: packages/ui/src/components/navigation/AppBackToTop.vue
---

# 回到顶部（AppBackToTop）

`AppBackToTop` 在页面或指定的可滚动容器越过阈值后显示一个固定操作按钮，帮助用户快速返回开头。

## 1. 用处

- 文档站、长表单和长列表中缩短回到首段的操作路径。
- 页面有独立滚动容器时，监听该容器而不是浏览器窗口。
- 它只处理滚动动作；按钮显示阈值与业务内容由页面决定。

## 2. 代码演示

### 2.1 监听内容容器

```vue demo:back-to-top-container title="监听内容容器"
<script setup lang="ts">
import { ref } from "vue";
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";

const scrollElement = ref<HTMLElement | null>(null);
</script>

<template>
  <div ref="scrollElement" class="scroll-area">
    <p v-for="index in 18" :key="index">第 {{ index }} 段内容：在此容器内滚动，超过阈值后显示回到顶部按钮。</p>
  </div>
  <AppBackToTop :target="scrollElement" :threshold="120" />
</template>

<style scoped>
.scroll-area { height: 180px; overflow: auto; padding: 0 16px; border: 1px solid var(--aps-line-soft); border-radius: 12px; color: var(--aps-muted); line-height: 1.8; }
.scroll-area p { margin: 12px 0; }
</style>
```

将 `target` 绑定到实际滚动元素；默认监听 `window`，适合整个页面发生滚动的情况。

### 2.2 页面级返回

```vue demo:back-to-top-page title="页面级返回"
<script setup lang="ts">
import { AppBackToTop, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

function scrollPreview(): void {
  document.querySelector(".document-main")?.scrollTo({ top: 900, behavior: "smooth" });
}
</script>

<template>
  <AppButton variant="secondary" @click="scrollPreview">滚动文档区域后查看按钮</AppButton>
  <AppBackToTop :threshold="320" label="回到文档顶部" />
</template>
```

`label` 会作为图标按钮的无障碍名称，应写明返回目标而不是笼统写“按钮”。


### 2.3 调整显示阈值

```vue demo:nav-back-to-top-threshold title="调整显示阈值"
<script setup lang="ts">
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 14" :key="i">滚动超过 120px 后显示回到顶部按钮。</p>
    <AppBackToTop :threshold="120" />
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; padding: 12px; }
</style>
```

### 2.4 较大阈值

```vue demo:nav-back-to-top-large title="较大阈值"
<script setup lang="ts">
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 20" :key="i">长页面，滚动超过 600px 才出现按钮。</p>
    <AppBackToTop :threshold="600" />
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; padding: 12px; }
</style>
```

### 2.5 自定义名称

```vue demo:nav-back-to-top-label title="自定义名称"
<script setup lang="ts">
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 12" :key="i">为按钮提供更具语义的可访问名称。</p>
    <AppBackToTop label="返回页首" />
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; padding: 12px; }
</style>
```

### 2.6 指定滚动容器

```vue demo:nav-back-to-top-target title="指定滚动容器"
<script setup lang="ts">
import { ref } from "vue";
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";

const box = ref<HTMLElement | null>(null);
</script>

<template>
  <div ref="box" class="scroll-box">
    <p v-for="i in 16" :key="i">容器内的长内容，按钮只监听该容器。</p>
    <AppBackToTop :target="box" />
  </div>
</template>

<style scoped>
.scroll-box { height: 240px; overflow: auto; border: 1px solid var(--aps-line-soft); border-radius: 10px; padding: 12px; color: var(--aps-muted); }
</style>
```

### 2.7 卡片内回到顶部

```vue demo:nav-back-to-top-card title="卡片内回到顶部"
<script setup lang="ts">
import { AppBackToTop } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="card">
    <p v-for="i in 12" :key="i">卡片内容 {{ i }}。</p>
    <AppBackToTop :threshold="80" />
  </div>
</template>

<style scoped>
.card { height: 240px; overflow: auto; border: 1px solid var(--aps-line-soft); border-radius: 12px; padding: 12px; color: var(--aps-muted); }
</style>
```
## 3. API 使用方式

```vue
<AppBackToTop :target="contentElement" :threshold="240" label="回到订单列表顶部" />
```

页面中只保留一个与主阅读区域对应的回到顶部组件。切换滚动容器时，传入新的 `target` 引用即可，组件会自行解绑旧监听器。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `threshold` | 滚动距离达到此值后显示按钮；负数会按 `0` 处理。 | `number` | `320` |
| `label` | 图标按钮的可访问名称。 | `string` | `"回到顶部"` |
| `target` | 要监听并滚动的容器；未传入时使用浏览器窗口。 | `HTMLElement \| null` | `null` |

### 4.2 Slots

`AppBackToTop` 不提供插槽。按钮图标和滚动行为由组件统一维护。

### 4.3 Events

`AppBackToTop` 不提供自定义事件。需要记录用户操作时，可在外层页面监听滚动状态或包装对应业务入口。
