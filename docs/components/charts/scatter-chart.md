---
title: 散点图
component: AppScatterChart
category: charts
source: packages/ui/src/components/charts/AppScatterChart.vue
---

# 散点图（AppScatterChart）

`AppScatterChart` 用离散点展示多组观测值在同一类目序列中的分布。

## 1. 用处

- 观察实验组、用户群或渠道在各个类目中的离散表现。
- 当前组件的横轴为类目索引，纵轴为数值；它不是任意二维坐标点输入器。
- 若需线性 X/Y 坐标或气泡大小编码，应在图表内核扩展对应数据适配器。

## 2. 代码演示

### 2.1 单组实验点

```vue demo:charts-scatter-basic title="单组实验点"
<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "实验组", data: [18, 36, 29, 58, 47, 71] }];
</script>

<template><AppScatterChart :series="series" :categories="['A', 'B', 'C', 'D', 'E', 'F']" /></template>
```

### 2.2 两类用户散点比较

```vue demo:charts-scatter-multiple title="用户比较"
<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "新用户", data: [22, 38, 44, 62, 78] },
  { name: "老用户", data: [30, 34, 52, 48, 71] },
];
</script>

<template><AppScatterChart :series="series" :categories="['渠道一', '渠道二', '渠道三', '渠道四', '渠道五']" /></template>
```


### 2.3 自定义颜色

```vue demo:charts-scatter-colors title="自定义颜色"
<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "样本 A", data: [12, 18, 15, 22, 19, 24] },
  { name: "样本 B", data: [8, 14, 11, 17, 13, 20] },
];
</script>

<template>
  <AppScatterChart :series="series" :categories="['P1', 'P2', 'P3', 'P4', 'P5', 'P6']" :colors="['#e65c41', '#3d8bfd']" />
</template>
```

### 2.4 隐藏提示

```vue demo:charts-scatter-tooltip-off title="隐藏提示"
<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "分布", data: [5, 9, 14, 7, 12, 16, 10] }];
</script>

<template>
  <AppScatterChart :series="series" :categories="['A', 'B', 'C', 'D', 'E', 'F', 'G']" :tooltip="false" />
</template>
```

### 2.5 导出

```vue demo:charts-scatter-export title="导出"
<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "点位", data: [22, 19, 26, 24, 21, 28] }];
</script>

<template>
  <AppScatterChart :series="series" :categories="['X1', 'X2', 'X3', 'X4', 'X5', 'X6']" exportable />
</template>
```

### 2.6 图表高度

```vue demo:charts-scatter-height title="图表高度"
<script setup lang="ts">
import { AppScatterChart, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "采样", data: [31, 27, 34, 29, 36, 33, 30] }];
</script>

<template>
  <AppScatterChart :series="series" :categories="['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7']" :height="300" />
</template>
```
## 3. API 使用方式

传入同长度的类目与数据序列。点的颜色来自 `series.color` 或 `colors`，以此区分不同人群。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChart` 的展示参数，类型固定为 `scatter`，默认 `ariaLabel` 为 `"散点图"`。

### 4.2 Slots

该组件未提供插槽。

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
