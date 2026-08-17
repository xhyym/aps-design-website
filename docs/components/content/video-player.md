---
title: 视频播放器
component: AppVideoPlayer
category: content
source: packages/ui/src/components/content/AppVideoPlayer.vue
---

# 视频播放器（AppVideoPlayer）

`AppVideoPlayer` 提供带进度、音量和全屏控制的原生视频播放界面。

## 1. 用处

- 用于课程预览、产品演示或操作指引视频。
- 资源 URL 的鉴权、试看限制、播放统计和字幕属于业务层职责。
- 自动播放受浏览器策略限制；失败时组件会显示明确的播放提示。

## 2. 代码演示

### 2.1 默认交互控制

```vue demo:content-video-player-basic title="默认控制"
<script setup lang="ts">
import { AppVideoPlayer } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppVideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" title="产品能力演示" /></template>
```

### 2.2 静音循环背景

```vue demo:content-video-player-muted title="静音循环"
<script setup lang="ts">
import { AppVideoPlayer } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppVideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" title="静音循环背景视频" muted loop :controls="false" /></template>
```


### 2.3 封面图

```vue demo:content-video-player-poster title="封面图"
<script setup lang="ts">
import { AppVideoPlayer } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppVideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" poster="https://picsum.photos/seed/poster/640/360" />
</template>
```

### 2.4 隐藏控制栏

```vue demo:content-video-player-controls title="隐藏控制栏"
<script setup lang="ts">
import { AppVideoPlayer } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppVideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" :controls="false" />
</template>
```

### 2.5 循环播放

```vue demo:content-video-player-loop title="循环播放"
<script setup lang="ts">
import { AppVideoPlayer } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppVideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" loop />
</template>
```
## 3. API 使用方式

设置 `src` 即可播放。`autoplay` 建议与 `muted` 一同使用以提高浏览器允许自动播放的概率；关闭 `controls` 后只保留原生视频元素，不再显示组件自带的交互栏。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `src` | 视频资源地址。 | `string` | — |
| `poster` | 视频首帧加载前的封面地址。 | `string` | `""` |
| `title` | 播放器无障碍标题。 | `string` | `"视频播放器"` |
| `controls` | 是否显示自定义控制栏。 | `boolean` | `true` |
| `autoplay` | 是否尝试自动播放。 | `boolean` | `false` |
| `muted` | 初始是否静音。 | `boolean` | `false` |
| `loop` | 视频结束后是否循环。 | `boolean` | `false` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

无自定义事件；如需采集播放状态，可通过包裹层或业务媒体服务实现。
