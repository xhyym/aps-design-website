---
title: 统计数值
component: AppStatistic
category: data
source: packages/ui/src/components/data/AppStatistic.vue
---

# 统计数值（AppStatistic）

`AppStatistic` 展示格式化数值、趋势说明与可选倒计时。

## 1. 用处

- 用于金额、订单数、截止倒计时等关键指标。
- 格式化逻辑可通过 `formatter` 注入，不应把数据计算塞入模板。

## 2. 代码演示

### 2.1 格式化金额

```vue demo:statistic-basic title="格式化金额"
<script setup lang="ts">
import { AppStatistic } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppStatistic title="累计成交额" :value="125630" prefix="¥" group-separator="," detail="较上月增长 12.4%" tone="success" icon="chart" /></template>
```

### 2.2 截止倒计时

```vue demo:statistic-countdown title="截止倒计时"
<script setup lang="ts">
import { AppStatistic } from "aps-design-pro";
import "aps-design-pro/style.css";

const deadline = Date.now() + 4 * 60 * 60 * 1000;
</script>

<template><AppStatistic title="限时优惠结束" :value="0" :countdown-at="deadline" countdown-format="HH:mm:ss" status="活动价即将结束" tone="warning" /></template>
```

## 3. API 使用方式

传入数值可使用 `precision` 和 `groupSeparator` 格式化；传入 `countdownAt` 后 `value` 会被倒计时展示替代，并在结束时触发 `finish`。

## 4. Props 与 Slots

### 4.1 Props

包括 `value`、`title`/`label`、`detail`、`status`、`tone`、`icon`、`precision`、`groupSeparator`、`prefix`、`suffix`、`formatter`、`countdownAt`、`countdownFormat`；默认格式为 `HH:mm:ss`。

### 4.2 Slots

支持 `title`、默认数值、`prefix`、`suffix`、`detail`、`status` 插槽。

### 4.3 Events

| 事件 | 说明 |
| --- | --- |
| `finish` | 倒计时到达零时触发。 |
