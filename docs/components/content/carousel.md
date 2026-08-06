---
title: 轮播
component: AppCarousel
category: content
source: packages/ui/src/components/content/AppCarousel.vue
---

# 轮播（AppCarousel）

`AppCarousel` 用受控索引、键盘导航和触摸滑动展示一组同级视觉内容。

## 1. 用处

- 展示活动、产品或内容推荐中的一组同级图片。
- `v-model` 连接当前轮播索引；业务可根据 `change` 记录曝光或同步外部说明。
- 每个轮播项必须提供有意义的 `alt`，不要将关键文本只放进图片。

## 2. 代码演示

### 2.1 受控当前项

```vue demo:content-carousel-basic title="受控当前项"
<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeIndex = ref(0);
const items: CarouselItem[] = [
  { key: "design", src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80", alt: "团队讨论设计方案", title: "设计协作", description: "让产品、设计与研发保持同一节奏。" },
  { key: "code", src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", alt: "笔记本电脑上的代码", title: "工程交付", description: "将稳定的组件能力接入每个业务场景。" },
];
</script>

<template><AppCarousel v-model="activeIndex" :items="items" @change="(_, item) => console.info('已切换轮播项：', item?.key)" /></template>
```

### 2.2 自动播放的推荐内容

```vue demo:content-carousel-autoplay title="自动播放"
<script setup lang="ts">
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: CarouselItem[] = [
  { key: "one", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80", alt: "办公桌上的显示器", title: "系统公告" },
  { key: "two", src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80", alt: "会议室", title: "活动报名" },
];
</script>

<template><AppCarousel :items="items" autoplay :interval="2600" :show-arrows="false" aria-label="本周推荐内容" /></template>
```

## 3. API 使用方式

`items` 是唯一的数据来源，每项至少包含稳定 `key`、资源 `src` 和替代文本 `alt`。开启 `autoplay` 时，组件在悬停、聚焦或触摸拖动时会自动暂停；键盘可使用方向键、Home 和 End 切换。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 轮播项数组。 | `CarouselItem[]` | — |
| `modelValue` | 当前项的零基索引。 | `number` | `0` |
| `autoplay` | 是否自动切换。 | `boolean` | `false` |
| `interval` | 自动切换间隔，最小为 1800ms。 | `number` | `5000` |
| `loop` | 到达首尾是否循环。 | `boolean` | `true` |
| `showArrows` | 是否显示前后切换按钮。 | `boolean` | `true` |
| `showIndicators` | 是否显示位置指示器。 | `boolean` | `true` |
| `direction` | 轮播方向。 | `"horizontal" \| "vertical"` | `"horizontal"` |
| `ariaLabel` | 轮播区域标签。 | `string` | `"图片轮播"` |

`CarouselItem`：`{ key: string; src: string; alt: string; title?: string; description?: string }`。

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `slide` | 自定义当前轮播项，作用域参数为 `item` 和 `index`。 |

### 4.3 Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:modelValue` | 当前索引变化。 | `(index: number)` |
| `change` | 切换后触发。 | `(index: number, item: CarouselItem \| undefined)` |

组件实例还暴露 `prev()`、`next()` 和 `setActiveItem(index)`。
