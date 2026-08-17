---
title: 基础横幅
component: AppBasicBanner
category: content
source: packages/ui/src/components/content/AppBasicBanner.vue
---

# 基础横幅（AppBasicBanner）

`AppBasicBanner` 用一行清晰的标题、说明和可选操作，承载页面级的轻量通知或状态提醒。

## 1. 用处

- 在页面顶部说明维护安排、同步结果或当前工作区状态。
- 将需要继续处理的动作放在右侧 `actions` 插槽，避免把横幅本身做成不可预期的跳转入口。
- 它适合短期提示；需要用户确认或阻断流程时，应使用弹窗或告警组件。

## 2. 代码演示

### 2.1 带后续操作的通知

```vue demo:content-basic-banner-notice title="带操作的通知"
<script setup lang="ts">
import { AppBasicBanner, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBasicBanner title="工作区即将升级" description="升级期间历史订单仍可正常查看。" icon="warning" tone="blue">
    <template #actions><AppButton size="small" variant="secondary">查看安排</AppButton></template>
  </AppBasicBanner>
</template>
```

### 2.2 成功状态

```vue demo:content-basic-banner-status title="成功状态"
<script setup lang="ts">
import { AppBasicBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBasicBanner title="数据同步已完成" description="本次共更新 128 条客户记录。" icon="check" tone="green" />
</template>
```


### 2.3 语义色调

```vue demo:content-basic-banner-tone title="语义色调"
<script setup lang="ts">
import { AppBasicBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppBasicBanner title="系统升级通知" description="今晚 23:00 进行例行维护" tone="blue" />
    <AppBasicBanner title="活动开始" description="限时折扣已开启" tone="green" />
    <AppBasicBanner title="配置提醒" description="部分接口参数即将调整" tone="orange" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
```

### 2.4 自定义图标

```vue demo:content-basic-banner-icon title="自定义图标"
<script setup lang="ts">
import { AppBasicBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBasicBanner title="安全提示" description="请定期更换登录密码" icon="shield" tone="orange" />
</template>
```

### 2.5 操作区

```vue demo:content-basic-banner-actions title="操作区"
<script setup lang="ts">
import { AppBasicBanner, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppBasicBanner title="新版本可用" description="v0.3.1 已发布，包含多项修复">
    <template #actions>
      <AppButton size="small" variant="text">查看更新日志</AppButton>
    </template>
  </AppBasicBanner>
</template>
```
## 3. API 使用方式

传入必填 `title`，再按提示语义选择 `tone`；有后续处理时才提供 `actions` 插槽。`AppBasicBanner` 只负责展示，不触发通知请求或页面跳转。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 横幅标题。 | `string` | — |
| `description` | 标题下方的补充说明。 | `string` | `""` |
| `icon` | 左侧内置图标名称。 | `IconName` | `"grid"` |
| `tone` | 提示色调。 | `"blue" \| "green" \| "orange" \| "neutral"` | `"blue"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 横幅右侧的操作区，通常放一个轻量按钮或链接。 |

### 4.3 Events

无自定义事件；操作行为由 `actions` 中的实际交互组件处理。
