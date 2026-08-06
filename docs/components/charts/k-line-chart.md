---
title: K 线图
component: AppKLineChart
category: charts
source: packages/ui/src/components/charts/AppKLineChart.vue
---

# K 线图（AppKLineChart）

`AppKLineChart` 已保留对外组件入口，但当前通用图表内核尚未启用 OHLC 数据适配，因此会显示能力说明而非 K 线。

## 1. 用处

- 当前用于在业务界面中明确反馈 K 线功能尚未接入。
- 不应将普通收盘价数组伪装为 OHLC 数据，更不能据此做金融业务判断。
- 后续接入时需要扩展 `ChartSeries` 或新增专用 OHLC 数据类型与图表适配器。

## 2. 代码演示

### 2.1 当前默认能力提示

```vue demo:charts-k-line-empty title="默认能力提示"
<script setup lang="ts">
import { AppKLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "收盘价", data: [12.8, 13.2, 12.7, 14.1] }];
</script>

<template><AppKLineChart :series="series" :categories="['09:30', '10:30', '13:00', '14:30']" /></template>
```

### 2.2 业务侧提示文案

```vue demo:charts-k-line-guidance title="业务侧提示"
<script setup lang="ts">
import { AppKLineChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "演示数据", data: [21, 19, 24, 22, 25] }];
</script>

<template><AppKLineChart :series="series" empty-text="当前版本尚未接入 OHLC 数据适配器。" aria-label="K 线图能力说明" /></template>
```

## 3. API 使用方式

该组件当前不会渲染 K 线。可以暂时用它保持页面结构和空状态一致，但生产功能应在完成 OHLC 适配后再开放。

## 4. Props 与 Slots

### 4.1 Props

接口承接 `AppChart` 展示参数，类型固定为 `k-line`，默认 `ariaLabel` 为 `"K线图"`。`emptyText` 不能覆盖内核给出的 K 线适配说明。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

当前无可渲染图表时不会产生缩放或导出操作；事件签名仍与 `AppChart` 保持一致。
