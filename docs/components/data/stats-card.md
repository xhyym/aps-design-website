---
title: 指标卡片
component: AppStatsCard
category: data
source: packages/ui/src/components/data/AppStatsCard.vue
---

# 指标卡片（AppStatsCard）

`AppStatsCard` 用紧凑卡片呈现单个业务指标、变化趋势和辅助说明。

## 1. 用处

- 在仪表盘顶部并列展示今日订单、活跃用户等概览指标。
- 数值计算、同比环比口径由业务层保证一致。

## 2. 代码演示

### 2.1 成功趋势

```vue demo:stats-card-basic title="成功趋势"
<script setup lang="ts">
import { AppStatsCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppStatsCard title="今日支付订单" :value="86" trend="+18.2%" detail="较昨日" tone="success" icon="chart" /></template>
```

### 2.2 中性信息卡

```vue demo:stats-card-neutral title="中性指标"
<script setup lang="ts">
import { AppStatsCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppStatsCard title="待审核课程" :value="4" detail="需要运营人员处理" tone="neutral" icon="grid" /></template>
```


### 2.3 状态色调

```vue demo:stats-card-tone title="状态色调"
<script setup lang="ts">
import { AppStatsCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatsCard title="正常" value="86" tone="success" />
    <AppStatsCard title="告警" value="12" tone="warning" />
    <AppStatsCard title="异常" value="3" tone="danger" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; flex-wrap: wrap; }
</style>
```

### 2.4 趋势与说明

```vue demo:stats-card-trend title="趋势与说明"
<script setup lang="ts">
import { AppStatsCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppStatsCard title="月活跃用户" :value="128400" trend="+12.4%" detail="较上月增长" />
</template>
```

### 2.5 图标

```vue demo:stats-card-icon title="图标"
<script setup lang="ts">
import { AppStatsCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatsCard title="订单数" :value="8600" icon="chart" tone="info" />
    <AppStatsCard title="商品数" :value="320" icon="grid" tone="neutral" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; flex-wrap: wrap; }
</style>
```
## 3. API 使用方式

指定 `title`、`value` 与语义色 `tone`。`trend` 应含方向和比例文字，例如 `+18.2%`，避免只传颜色没有数据。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` / `value` | 指标标题与数值。 | `string` / `string \| number` | — |
| `trend` / `detail` | 趋势与辅助说明。 | `string` | `""` |
| `icon` / `tone` | 图标与状态色。 | `IconName` / `StatusTone` | `undefined` / `"info"` |

### 4.2 Slots

无插槽。

### 4.3 Events

无自定义事件。
