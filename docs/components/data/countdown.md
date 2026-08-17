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


### 2.3 前后缀

```vue demo:countdown-prefix-suffix title="前后缀"
<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const end = new Date(Date.now() + 1000 * 60 * 5).toISOString();
</script>

<template>
  <AppCountdown :value="end" format="HH:mm:ss" prefix="活动剩余 " suffix=" 后结束" />
</template>
```

### 2.4 结束回调

```vue demo:countdown-finish title="结束回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const done = ref(false);
const end = new Date(Date.now() + 3000).toISOString();
</script>

<template>
  <div>
    <AppCountdown :value="end" format="HH:mm:ss" @finish="done = true" />
    <p class="hint">{{ done ? "已结束" : "倒计时中…" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.5 自定义内容

```vue demo:countdown-slot title="自定义内容"
<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const end = new Date(Date.now() + 1000 * 60 * 2).toISOString();
</script>

<template>
  <AppCountdown :value="end">
    <template #default="{ displayValue }">
      <span class="big">{{ displayValue }}</span>
      <small>分钟前下单可享优惠</small>
    </template>
  </AppCountdown>
</template>

<style scoped>
.big { font-size: 24px; font-weight: 600; margin-right: 8px; }
</style>
```

### 2.6 不同截止格式

```vue demo:countdown-datetime title="不同截止格式"
<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const ts = Date.now() + 1000 * 60 * 60 * 2;
const date = new Date(Date.now() + 1000 * 60 * 30);
</script>

<template>
  <div class="col">
    <AppCountdown :value="ts" format="HH:mm:ss" />
    <AppCountdown :value="date" format="HH:mm:ss" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 8px; }
</style>
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
