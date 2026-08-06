---
title: 雷达图
component: AppRadarChart
category: charts
source: packages/ui/src/components/charts/AppRadarChart.vue
---

# 雷达图（AppRadarChart）

`AppRadarChart` 在统一的指标维度上展示一个或多个对象的能力分布。

## 1. 用处

- 对比团队、版本、候选方案在同一套评分维度下的表现。
- 所有序列必须共享同一组 `categories` 维度和计分口径。
- 不用雷达图展示绝对量级差异很大的原始指标，应先标准化数据。

## 2. 代码演示

### 2.1 单个版本能力图谱

```vue demo:charts-radar-basic title="能力图谱"
<script setup lang="ts">
import { AppRadarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "当前版本", data: [86, 72, 90, 65, 78] }];
</script>

<template><AppRadarChart :series="series" :categories="['性能', '稳定性', '易用性', '覆盖率', '文档']" /></template>
```

### 2.2 团队能力比较

```vue demo:charts-radar-compare title="团队比较"
<script setup lang="ts">
import { AppRadarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "团队 A", data: [84, 72, 91, 67, 75] },
  { name: "团队 B", data: [70, 88, 76, 82, 69] },
];
</script>

<template><AppRadarChart :series="series" :categories="['协作', '质量', '交付', '效率', '复盘']" /></template>
```

## 3. API 使用方式

`categories.length` 应与每条 `series.data.length` 一致。不同长度会导致部分轴无数据，属于调用方数据错误。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChart` 的展示参数，类型固定为 `radar`，默认 `ariaLabel` 为 `"雷达图"`。雷达图不提供可见窗口缩放。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `export`；其他事件签名与 `AppChart` 一致。
