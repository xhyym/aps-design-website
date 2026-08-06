---
title: 环形进度图
component: AppRingChart
category: charts
source: packages/ui/src/components/charts/AppRingChart.vue
---

# 环形进度图（AppRingChart）

`AppRingChart` 复用组成图渲染，以环形形式呈现进度的已完成与未完成部分。

## 1. 用处

- 表达发布、交付、学习等可拆成已完成与剩余部分的进度。
- 至少传入两项类别，使进度语义在图例中可辨识。
- 只展示视觉结构，精确百分比或完成说明仍建议在邻近文字中给出。

## 2. 代码演示

### 2.1 默认进度构成

```vue demo:charts-ring-basic title="完成进度"
<script setup lang="ts">
import { AppRingChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "完成率", data: [78, 22] }];
</script>

<template><AppRingChart :series="series" :categories="['已完成', '未完成']" /></template>
```

### 2.2 指定进度色

```vue demo:charts-ring-colors title="指定颜色"
<script setup lang="ts">
import { AppRingChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "发布进度", data: [64, 36] }];
</script>

<template><AppRingChart :series="series" :categories="['已发布', '待发布']" :colors="['#a56de2', '#d2d2d7']" /></template>
```

## 3. API 使用方式

用一条序列传入各分区数值。若业务只有百分比，先在调用方转换为 `[percent, 100 - percent]`，避免组件猜测数据口径。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChart` 的展示参数，类型固定为 `ring`，默认 `ariaLabel` 为 `"环形进度图"`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `export`；其他事件签名与 `AppChart` 一致。
