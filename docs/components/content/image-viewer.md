---
title: 图片预览器
component: AppImageViewer
category: content
source: packages/ui/src/components/content/AppImageViewer.vue
---

# 图片预览器（AppImageViewer）

`AppImageViewer` 以对话框展示多张图片，内置切换、缩放、旋转、缩略图和下载事件出口。

## 1. 用处

- 用于相册、质检图片、商品详情等多图查看场景。
- 下载动作只通过 `download` 事件告知父级，实际鉴权和文件下载必须由业务层完成。
- 图片数量较多时，调用方应按需加载 `items`，不应一次传入大量超大原图。

## 2. 代码演示

### 2.1 默认工具栏与缩略图

```vue demo:content-image-viewer-basic title="默认预览器"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80", alt: "办公空间", title: "研发中心" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80", alt: "团队讨论", title: "项目评审" },
];
</script>

<template>
  <AppButton @click="open = true">查看项目相册</AppButton>
  <AppImageViewer v-model="open" :items="items" @download="(item) => console.info('由业务层下载：', item.src)" />
</template>
```

### 2.2 受控索引与非循环浏览

```vue demo:content-image-viewer-controlled title="受控索引"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const activeIndex = ref(1);
const items: ImageViewerItem[] = [
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80", alt: "桌面工作环境", title: "工程工作台" },
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", alt: "代码编辑器", title: "代码评审" },
];
</script>

<template>
  <AppButton variant="secondary" @click="open = true">从第二张打开</AppButton>
  <AppImageViewer v-model="open" v-model:active-index="activeIndex" :items="items" :infinite="false" :show-thumbnails="false" />
</template>
```


### 2.3 缩略图

```vue demo:content-image-viewer-thumbnails title="缩略图"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://picsum.photos/seed/v1/800/500", alt: "风光一" },
  { src: "https://picsum.photos/seed/v2/800/500", alt: "风光二" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">打开预览</AppButton>
    <AppImageViewer v-model="open" :items="items" show-thumbnails />
  </div>
</template>
```

### 2.4 隐藏工具栏

```vue demo:content-image-viewer-toolbar title="隐藏工具栏"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://picsum.photos/seed/v3/800/500", alt: "纯展示图" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">查看原图</AppButton>
    <AppImageViewer v-model="open" :items="items" :show-toolbar="false" />
  </div>
</template>
```

### 2.5 循环切换

```vue demo:content-image-viewer-infinite title="循环切换"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://picsum.photos/seed/v4/800/500", alt: "图 A" },
  { src: "https://picsum.photos/seed/v5/800/500", alt: "图 B" },
  { src: "https://picsum.photos/seed/v6/800/500", alt: "图 C" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">打开循环预览</AppButton>
    <AppImageViewer v-model="open" :items="items" :infinite="false" />
  </div>
</template>
```

### 2.6 初始索引

```vue demo:content-image-viewer-initial title="初始索引"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppImageViewer, type ImageViewerItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ImageViewerItem[] = [
  { src: "https://picsum.photos/seed/v7/800/500", alt: "第一张" },
  { src: "https://picsum.photos/seed/v8/800/500", alt: "第二张" },
  { src: "https://picsum.photos/seed/v9/800/500", alt: "第三张" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">从第三张开始</AppButton>
    <AppImageViewer v-model="open" :items="items" :initial-index="2" />
  </div>
</template>
```
## 3. API 使用方式

`activeIndex` 传入后进入受控模式，组件会通过 `update:activeIndex` 交回切换后的索引。键盘支持 Esc 关闭、左右方向键切图、`+`/`-` 缩放、`0` 重置。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否打开预览器。 | `boolean` | — |
| `items` | 图片项数组。 | `ImageViewerItem[]` | — |
| `activeIndex` | 受控的当前图片索引。 | `number` | `undefined` |
| `initialIndex` | 未受控时的初始索引。 | `number` | `0` |
| `infinite` | 是否循环切换。 | `boolean` | `true` |
| `showThumbnails` | 是否显示缩略图条。 | `boolean` | `true` |
| `showToolbar` | 是否显示缩放、旋转、下载工具。 | `boolean` | `true` |
| `closeOnOverlay` | 点击遮罩是否关闭。 | `boolean` | `true` |
| `closeOnPressEscape` | 按 Esc 是否关闭。 | `boolean` | `true` |
| `ariaLabel` | 对话框标签。 | `string` | `"图片预览器"` |

`ImageViewerItem`：`{ src: string; alt: string; title?: string }`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:modelValue` | 关闭预览器。 | `(value: boolean)` |
| `update:activeIndex` | 当前图片改变。 | `(index: number)` |
| `change` | 切换图片后触发。 | `(index: number, item: ImageViewerItem)` |
| `close` | 关闭操作发生。 | `()` |
| `download` | 用户点击下载按钮。 | `(item: ImageViewerItem, index: number)` |
