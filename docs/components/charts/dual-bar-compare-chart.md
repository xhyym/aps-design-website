---
title: 对比柱状图
component: AppDualBarCompareChart
category: charts
source: packages/ui/src/components/charts/AppDualBarCompareChart.vue
---

# 对比柱状图（AppDualBarCompareChart）

`AppDualBarCompareChart` 固定以并列柱体展示两组或多组同口径数据。

## 1. 用处

- 对比本期与上期、实际与预算、两个团队的同维度结果。
- 每条序列应使用相同的单位和统计周期。
- 差异需要精确说明时，还应在表格或提示文本中提供原始数字。

## 2. 代码演示

### 2.1 月度对比

```vue demo:charts-dual-bar-basic title="月度对比"
<script setup lang="ts">
import { AppDualBarCompareChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "本月", data: [126, 162, 148, 193] },
  { name: "上月", data: [108, 141, 157, 169] },
];
</script>

<template><AppDualBarCompareChart :series="series" :categories="['第一周', '第二周', '第三周', '第四周']" /></template>
```

### 2.2 长周期比较与缩放

```vue demo:charts-dual-bar-zoom title="长周期比较"
<script setup lang="ts">
import { AppDualBarCompareChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const categories = Array.from({ length: 14 }, (_, index) => `${index + 1}日`);
const series: ChartSeries[] = [
  { name: "实际", data: [23, 26, 31, 28, 35, 39, 41, 37, 45, 49, 51, 55, 58, 63] },
  { name: "预算", data: [25, 25, 28, 30, 32, 34, 39, 42, 44, 46, 48, 50, 53, 56] },
];
</script>

<template><AppDualBarCompareChart :series="series" :categories="categories" zoomable :min-visible-points="4" /></template>
```

## 3. API 使用方式

建议传入两个序列，更多序列会继续并列展示但可读性会下降。类别较多时启用 `zoomable`，由用户缩放查看范围。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChart` 的展示参数，类型固定为 `dual-bar`，默认 `ariaLabel` 为 `"对比柱状图"`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
