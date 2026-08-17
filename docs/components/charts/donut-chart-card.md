---
title: 环形图卡片
component: AppDonutChartCard
category: charts
source: packages/ui/src/components/charts/AppDonutChartCard.vue
---

# 环形图卡片（AppDonutChartCard）

`AppDonutChartCard` 用固定环形图呈现组成比例，并提供卡片标题和可选操作。

## 1. 用处

- 在概览页展示用户来源、风险等级、状态构成等整体分布。
- 标题要体现“谁的什么构成”，避免用户只看到百分比却不知道统计对象。
- 不适合展示随时间变化的趋势；此类数据应使用折线图卡片。

## 2. 代码演示

### 2.1 用户来源构成

```vue demo:charts-donut-card-basic title="用户来源构成"
<script setup lang="ts">
import { AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "来源", data: [44, 33, 23] }];
</script>

<template><AppDonutChartCard title="用户来源" description="本月新注册用户" :series="series" :categories="['自然流量', '合作渠道', '广告投放']" /></template>
```

### 2.2 风险分布与后续处理

```vue demo:charts-donut-card-actions title="风险分布"
<script setup lang="ts">
import { AppButton, AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [{ name: "风险等级", data: [12, 63, 25] }];
</script>

<template>
  <AppDonutChartCard title="风险分布" :series="series" :categories="['高', '中', '低']" :colors="['#d55b5b', '#d08a27', '#35a16b']">
    <template #actions><AppButton size="small" variant="text">处理风险</AppButton></template>
  </AppDonutChartCard>
</template>
```


### 2.3 说明文字

```vue demo:charts-donut-card-description title="说明文字"
<script setup lang="ts">
import { AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "已售", data: [560] },
  { name: "在售", data: [240] },
];
</script>

<template>
  <AppDonutChartCard title="库存结构" description="已售与在售占比" :series="series" :categories="['已售', '在售']" />
</template>
```

### 2.4 导出

```vue demo:charts-donut-card-export title="导出"
<script setup lang="ts">
import { AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "PC", data: [420] },
  { name: "移动端", data: [680] },
];
</script>

<template>
  <AppDonutChartCard title="访问设备" :series="series" :categories="['PC', '移动端']" exportable />
</template>
```

### 2.5 图表高度

```vue demo:charts-donut-card-height title="图表高度"
<script setup lang="ts">
import { AppDonutChartCard, type ChartSeries } from "aps-design-pro";
import "aps-design-pro/style.css";

const series: ChartSeries[] = [
  { name: "通过", data: [85] },
  { name: "驳回", data: [15] },
];
</script>

<template>
  <AppDonutChartCard title="审批结果" :series="series" :categories="['通过', '驳回']" :height="300" />
</template>
```
## 3. API 使用方式

用法与 `AppChartCard` 一致，类型固定为 `donut`。数值为零的整组数据会展示空状态，业务层应给出产生空状态的原因。

## 4. Props 与 Slots

### 4.1 Props

支持 `AppChartCard` 的标题、说明、数据、颜色、提示、导出和空状态 Props；图表类型固定为 `donut`，缩放在组成图中不生效。

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 标题栏右侧操作区。 |

### 4.3 Events

支持 `export`；其他事件签名与 `AppChart` 相同。
