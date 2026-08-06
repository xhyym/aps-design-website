---
title: 倒计时
component: AppCountdown
category: data
source: packages/ui/src/components/data/AppCountdown.vue
---

# 倒计时（AppCountdown）

`AppCountdown` 根据目标时间显示实时剩余时长，并在归零时通知业务页面。

## 1. 用处

- 展示活动、优惠或限时任务的截止时间。
- 使用 `finish` 接入结束后的刷新、下架或状态切换。
- 用格式化字符串控制天、时、分、秒的展示密度。

倒计时仅用于展示，限时资格的最终判断必须由服务端完成。

## 2. 代码演示

### 2.1 时分秒倒计时

```vue demo:countdown-basic title="基础倒计时"
<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const deadline = Date.now() + 2 * 60 * 60 * 1000;
</script>

<template><AppCountdown :value="deadline" prefix="活动结束还有" /></template>
```

### 2.2 带天数的促销倒计时

```vue demo:countdown-format title="自定义格式"
<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const deadline = Date.now() + 3 * 24 * 60 * 60 * 1000;
</script>

<template><AppCountdown :value="deadline" format="DD 天 HH:mm" suffix=" 后恢复原价" /></template>
```

## 3. API 使用方式

目标时间可以传时间戳、日期字符串或 `Date`。组件暴露 `restart`、`stop`、`remainingMilliseconds` 和 `isFinished` 供模板 ref 使用。

```vue
<AppCountdown :value="promotion.endsAt" @finish="reloadPromotion" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 截止时间。 | `string \| number \| Date` | 必填 |
| `format` | 显示格式。 | `string` | `"HH:mm:ss"` |
| `prefix` / `suffix` | 固定前后缀。 | `string` | `""` |
| `interval` | 刷新间隔，单位为毫秒。 | `number` | `250` |
| `ariaLabel` | 倒计时辅助名称。 | `string` | `"倒计时"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 自定义显示内容，参数为剩余毫秒、显示值和结束状态。 |
| `prefix` / `suffix` | 自定义前后缀。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `finish` | — | 首次倒计时结束时触发。 |
