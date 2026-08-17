---
title: 折线图卡片
component: AppLineChartCard
category: charts
source: packages/ui/src/components/charts/AppLineChartCard.vue
---

# 折线图卡片（AppLineChartCard）

`AppLineChartCard` 是固定折线图类型的指标卡片，减少仪表盘中的重复配置。

## 1. 用处

- 在经营看板中展示单个趋势指标并附上统计说明。
- 图表类型固定为折线，避免调用方误把卡片配置成其他类型。
- 长周期数据可开启缩放或导出，帮助用户做进一步分析。

## 2. 代码演示

### 2.1 冲刺完成率

```vue demo:charts-line-card-basic title="冲刺完成率"
<script setup lang="ts">
import { AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "完成率", data: [68, 72, 79, 83, 91] }];
</script>

<template><AppLineChartCard title="迭代完成率" description="当前冲刺周期" :series="series" :categories="['第 1 周', '第 2 周', '第 3 周', '第 4 周', '第 5 周']" /></template>
```

### 2.2 可导出的收入趋势

```vue demo:charts-line-card-export title="导出趋势"
<script setup lang="ts">
import { AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "收入", data: [32, 44, 51, 65, 73, 88] }];
</script>

<template><AppLineChartCard title="月度收入" :series="series" :categories="['1月', '2月', '3月', '4月', '5月', '6月']" exportable export-file-name="月度收入" /></template>
```


### 2.3 说明文字

```vue demo:charts-line-card-description title="说明文字"
<script setup lang="ts">
import { AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "在线人数", data: [320, 410, 380, 520, 480] }];
</script>

<template>
  <AppLineChartCard title="实时在线" description="最近五小时在线人数" :series="series" :categories="['14:00', '15:00', '16:00', '17:00', '18:00']" />
</template>
```

### 2.4 操作区

```vue demo:charts-line-card-actions title="操作区"
<script setup lang="ts">
import { AppButton, AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "收入", data: [88, 96, 92, 104, 118] }];
</script>

<template>
  <AppLineChartCard title="收入趋势" :series="series" :categories="['1月', '2月', '3月', '4月', '5月']">
    <template #actions>
      <AppButton size="small" variant="text">查看明细</AppButton>
    </template>
  </AppLineChartCard>
</template>
```

### 2.5 图表高度

```vue demo:charts-line-card-height title="图表高度"
<script setup lang="ts">
import { AppLineChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "请求量", data: [1200, 1800, 1600, 2400, 2100] }];
</script>

<template>
  <AppLineChartCard title="请求量监控" :series="series" :categories="['08:00', '10:00', '12:00', '14:00', '16:00']" :height="300" />
</template>
```
## 3. API 使用方式

除 `type` 固定为 `line` 外，用法与 `AppChartCard` 相同。建议按一个业务口径对应一张卡片，避免在同一张趋势卡塞入无关指标。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChartCard` 的 `title`、`description`、`series`、`categories`、`height`、颜色、提示、缩放、渲染密度、导出和空状态 Props；图表类型固定为 `line`。

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 标题栏右侧操作区。 |

### 4.3 Events

支持 `update:visible-range`、`zoom-change`、`export`，参数与 `AppChart` 相同。
