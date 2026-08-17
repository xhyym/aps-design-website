---
title: 卡片横幅
component: AppCardBanner
category: content
source: packages/ui/src/components/content/AppCardBanner.vue
---

# 卡片横幅（AppCardBanner）

`AppCardBanner` 用深色内容区与可选图片组织一块重点推荐内容，也可以整体作为链接入口。

## 1. 用处

- 放在仪表盘、课程首页或活动页，突出单一的主推荐内容。
- 有图片时传入 `image`；无图片时内容区会占满横幅。
- `href` 会让根节点变为链接，适合整个卡片都前往同一目的地的情况。

## 2. 代码演示

### 2.1 图片与行动按钮

```vue demo:content-card-banner-image title="图片横幅"
<script setup lang="ts">
import { AppButton, AppCardBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCardBanner title="暑期课程计划" description="为团队安排一套可持续的前端进阶训练。" image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80">
    <template #actions><AppButton size="small">查看课程</AppButton></template>
  </AppCardBanner>
</template>
```

### 2.2 整体跳转

```vue demo:content-card-banner-link title="链接横幅"
<script setup lang="ts">
import { AppCardBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCardBanner title="产品更新日志" description="点击卡片，查看本月已交付的能力。" href="https://gitee.com/xhyym/aps-design-pro" />
</template>
```


### 2.3 说明文案

```vue demo:content-card-banner-description title="说明文案"
<script setup lang="ts">
import { AppCardBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCardBanner title="会员专属福利" description="新会员首单立减 30 元，老会员回馈季同步开启" />
</template>
```

### 2.4 操作区

```vue demo:content-card-banner-actions title="操作区"
<script setup lang="ts">
import { AppButton, AppCardBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCardBanner title="邀请有礼" description="邀请好友注册，双方均可获得优惠券">
    <template #actions>
      <AppButton size="small">立即邀请</AppButton>
    </template>
  </AppCardBanner>
</template>
```

### 2.5 纯文案横幅
```vue demo:content-card-banner-plain title="纯文案横幅"
<script setup lang="ts">
import { AppCardBanner } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCardBanner title="欢迎回来" description="今天也要元气满满地推进项目哦" />
</template>
```
## 3. API 使用方式

当横幅只有一个明确目的地时使用 `href`；需要多个不同操作时不要给根节点设置 `href`，而是在 `actions` 内放置分别命名的按钮。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 横幅主标题。 | `string` | — |
| `description` | 主标题下方说明。 | `string` | `""` |
| `image` | 右侧图片地址。 | `string` | `""` |
| `href` | 整张横幅的链接地址；传入后根节点渲染为 `<a>`。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 内容区内的附加操作，适用于未设置 `href` 的场景。 |

### 4.3 Events

无自定义事件。链接点击遵循原生锚点行为。
