---
title: 柱状图
component: AppBarChart
category: charts
source: packages/ui/src/components/charts/AppBarChart.vue
---

# 柱状图（AppBarChart）

`AppBarChart` 固定渲染垂直柱状图，适合比较有限类目下的数值差异。

## 1. 用处

- 比较区域、渠道、季度或产品类别的数量与金额。
- 多序列时每一个类别下按序列并列展示。
- 类目过多时开启 `zoomable`，避免柱体与坐标标签被过度压缩。

## 2. 代码演示

### 2.1 单序列区域成交

```vue demo:charts-bar-basic title="区域成交"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "成交订单", data: [86, 122, 98, 146, 168] }];
</script>

<template><AppBarChart :series="series" :categories="['华东', '华南', '华北', '西南', '西北']" /></template>
```

### 2.2 实际与目标

```vue demo:charts-bar-compare title="目标比较"
<script setup lang="ts">
import { AppBarChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "实际", data: [34, 46, 52, 61] },
  { name: "目标", data: [40, 44, 50, 58] },
];
</script>

<template><AppBarChart :series="series" :categories="['一季度', '二季度', '三季度', '四季度']" :colors="['#0071e3', '#35a16b']" /></template>
```

## 3. API 使用方式

`series[i].data[j]` 与 `categories[j]` 对应。若类别名称很长，优先在业务层提供短名称并在表格或详情中保留全称。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChart` 的全部展示参数，但图表类型固定为 `bar`，默认 `ariaLabel` 为 `"柱状图"`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
