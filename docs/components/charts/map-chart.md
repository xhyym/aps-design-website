---
title: 地图图表
component: AppMapChart
category: charts
source: packages/ui/src/components/charts/AppMapChart.vue
---

# 地图图表（AppMapChart）

`AppMapChart` 已提供稳定组件入口，但当前内核未注册具体地图 GeoJSON 数据，因而显示能力提示。

## 1. 用处

- 当前用于保留业务页面的地图位置和说明尚未接入的状态。
- 地图边界数据、行政区映射、数据权限和地理坐标必须在业务层明确管理。
- 不能用类目数组替代地图注册，避免向用户误导空间分布结果。

## 2. 代码演示

### 2.1 默认地图适配提示

```vue demo:charts-map-empty title="默认地图提示"
<script setup lang="ts">
import { AppMapChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "访问量", data: [126, 87, 63] }];
</script>

<template><AppMapChart :series="series" :categories="['上海', '北京', '广州']" /></template>
```

### 2.2 自定义接入说明

```vue demo:charts-map-guidance title="接入说明"
<script setup lang="ts">
import { AppMapChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "门店数", data: [18, 24, 15] }];
</script>

<template><AppMapChart :series="series" empty-text="请先在业务层注册可用地图数据。" aria-label="地图图表能力说明" /></template>
```

## 3. API 使用方式

当前版本没有对外的地图注册 API，传入 `series` 不会生成地理图层。计划使用前应先完成地图数据注册和数据类型设计。

## 4. Props 与 Slots

### 4.1 Props

接口承接 `AppChart` 展示参数，类型固定为 `map`，默认 `ariaLabel` 为 `"地图图表"`。内核地图提示优先于 `emptyText`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

当前无可渲染图表时不会产生缩放或导出操作；事件签名仍与 `AppChart` 保持一致。
