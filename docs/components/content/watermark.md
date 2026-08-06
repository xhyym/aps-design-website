---
title: 水印
component: AppWatermark
category: content
source: packages/ui/src/components/content/AppWatermark.vue
---

# 水印（AppWatermark）

`AppWatermark` 以不可交互的重复文本覆盖固定视口或指定容器，用于提示内容来源与访问范围。

## 1. 用处

- 在内部资料、报价预览或受限截图页面标识查看范围。
- `fixed` 为 `true` 时覆盖整个视口；设为 `false` 后需放进 `position: relative` 的容器。
- 水印不能代替权限控制、文件加密或审计记录。

## 2. 代码演示

### 2.1 固定页面水印

```vue demo:content-watermark-fixed title="固定页面水印"
<script setup lang="ts">
import { AppWatermark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <p>此页面使用固定水印，滚动时水印仍覆盖在视口上方。</p>
  <AppWatermark text="内部资料 · 禁止外传" />
</template>
```

### 2.2 局部报价预览

```vue demo:content-watermark-inline title="局部水印"
<script setup lang="ts">
import { AppWatermark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <section class="watermark-stage">
    <strong>报价单预览</strong>
    <p>仅授权给指定客户和项目成员查阅。</p>
    <AppWatermark text="APS CONFIDENTIAL" :fixed="false" :rows="3" :columns="3" :opacity="0.11" />
  </section>
</template>

<style scoped>
.watermark-stage { position: relative; min-height: 160px; overflow: hidden; padding: 28px; border: 1px solid var(--aps-line-soft); border-radius: 12px; }
.watermark-stage strong, .watermark-stage p { position: relative; z-index: 1; }
.watermark-stage p { color: var(--aps-muted); }
</style>
```

## 3. API 使用方式

`text` 应包含可辨识的主体或访问范围。为局部水印设置 `fixed=false` 时，父容器必须建立定位上下文并处理自身溢出。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 重复显示的水印文案。 | `string` | — |
| `rows` | 垂直重复行数。 | `number` | `6` |
| `columns` | 水平重复列数。 | `number` | `5` |
| `rotate` | 文本旋转角度。 | `number` | `-20` |
| `opacity` | 整体不透明度。 | `number` | `0.08` |
| `fixed` | 是否固定覆盖视口。 | `boolean` | `true` |

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

无自定义事件。
