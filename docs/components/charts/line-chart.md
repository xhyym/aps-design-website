---
title: 折线图
component: AppLineChart
category: charts
source: packages/ui/src/components/charts/AppLineChart.vue
---

# 折线图（AppLineChart）

`AppLineChart` 是固定 `type="line"` 的趋势图封装，适合有连续顺序的指标变化。

## 1. 用处

- 展示按天、周、月递进的访问量、收入、完成率等趋势。
- 多序列用于同一指标口径下的同期或分组比较。
- 类目顺序由传入数组决定，组件不对日期或业务时间重新排序。

## 2. 代码演示

### 2.1 单指标趋势

```vue demo:charts-line-basic title="单指标趋势"
<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "访客数", data: [120, 178, 156, 210, 266, 298] }];
</script>

<template><AppLineChart :series="series" :categories="['1月', '2月', '3月', '4月', '5月', '6月']" /></template>
```

### 2.2 双序列同比比较

```vue demo:charts-line-multiple title="双序列比较"
<script setup lang="ts">
import { AppLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "本期", data: [52, 61, 73, 68, 84] },
  { name: "上期", data: [44, 58, 59, 72, 76] },
];
</script>

<template><AppLineChart :series="series" :categories="['周一', '周二', '周三', '周四', '周五']" :colors="['#0071e3', '#a56de2']" /></template>
```

## 3. API 使用方式

传入一到多个 `ChartSeries`。缺失值可不在数组中提供，但不要用非数值文本占位；组件会将非有限数值处理为断点。

## 4. Props 与 Slots

### 4.1 Props

除不支持 `type` 外，其余 Props 与 `AppChart` 相同：`series`、`categories`、`height`、`colors`、`ariaLabel`、`tooltip`、`zoomable`、`visibleRange`、`minVisiblePoints`、`maxRenderedPoints`、`maxAxisLabels`、`sampling`、`exportable`、`exportFileName`、`emptyText`。

默认 `ariaLabel` 为 `"折线图"`；其余默认值与 `AppChart` 一致。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
