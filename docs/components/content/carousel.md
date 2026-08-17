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


### 2.3 受控切换

```vue demo:content-carousel-controlled title="受控切换"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(1);
const items: CarouselItem[] = [
  { key: "a", src: "https://picsum.photos/seed/a1/600/300", alt: "第一张" },
  { key: "b", src: "https://picsum.photos/seed/b2/600/300", alt: "第二张" },
  { key: "c", src: "https://picsum.photos/seed/c3/600/300", alt: "第三张" },
];
</script>

<template>
  <div>
    <AppCarousel v-model="index" :items="items" />
    <div class="bar">
      <AppButton size="small" @click="index = 0">第一张</AppButton>
      <AppButton size="small" @click="index = 1">第二张</AppButton>
      <AppButton size="small" @click="index = 2">第三张</AppButton>
    </div>
  </div>
</template>

<style scoped>
.bar { display: flex; gap: 8px; margin-top: 10px; }
</style>
```

### 2.4 纵向轮播

```vue demo:content-carousel-vertical title="纵向轮播"
<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(0);
const items: CarouselItem[] = [
  { key: "x", src: "https://picsum.photos/seed/x1/400/260", alt: "纵向一" },
  { key: "y", src: "https://picsum.photos/seed/y2/400/260", alt: "纵向二" },
];
</script>

<template>
  <AppCarousel v-model="index" :items="items" direction="vertical" style="max-width: 400px" />
</template>
```

### 2.5 自定义内容

```vue demo:content-carousel-custom-slide title="自定义内容"
<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, AppTag, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(0);
const items: CarouselItem[] = [
  { key: "one", src: "https://picsum.photos/seed/o1/600/300", alt: "推广一", title: "夏季大促", description: "全场 8 折起" },
  { key: "two", src: "https://picsum.photos/seed/o2/600/300", alt: "推广二", title: "新品首发", description: "会员优先购" },
];
</script>

<template>
  <AppCarousel v-model="index" :items="items">
    <template #slide="{ item }">
      <div class="slide">
        <img :src="item.src" :alt="item.alt" />
        <div class="meta">
          <AppTag tone="orange">{{ item.title }}</AppTag>
          <span>{{ item.description }}</span>
        </div>
      </div>
    </template>
  </AppCarousel>
</template>

<style scoped>
.slide { position: relative; }
.slide img { width: 100%; height: 300px; object-fit: cover; }
.meta { position: absolute; left: 16px; bottom: 16px; display: flex; gap: 8px; align-items: center; color: #fff; }
</style>
```

### 2.6 隐藏指示器

```vue demo:content-carousel-no-indicators title="隐藏指示器"
<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(0);
const items: CarouselItem[] = [
  { key: "p1", src: "https://picsum.photos/seed/p1/600/300", alt: "图一" },
  { key: "p2", src: "https://picsum.photos/seed/p2/600/300", alt: "图二" },
];
</script>

<template>
  <AppCarousel v-model="index" :items="items" :show-indicators="false" />
</template>
```

### 2.7 关闭循环

```vue demo:content-carousel-loop-off title="关闭循环"
<script setup lang="ts">
import { ref } from "vue";
import { AppCarousel, type CarouselItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const index = ref(0);
const items: CarouselItem[] = [
  { key: "l1", src: "https://picsum.photos/seed/l1/600/300", alt: "页面一" },
  { key: "l2", src: "https://picsum.photos/seed/l2/600/300", alt: "页面二" },
  { key: "l3", src: "https://picsum.photos/seed/l3/600/300", alt: "页面三" },
];
</script>

<template>
  <AppCarousel v-model="index" :items="items" :loop="false" />
</template>
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
