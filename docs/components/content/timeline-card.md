---
title: 时间线卡片
component: AppTimelineCard
category: content
source: packages/ui/src/components/content/AppTimelineCard.vue
---

# 时间线卡片（AppTimelineCard）

`AppTimelineCard` 把标题、说明、右侧操作和 `AppTimeline` 收拢在一张内容卡片内。

## 1. 用处

- 在详情页侧栏或仪表盘模块中快速展示一段流程记录。
- 适合短时间线；需要筛选、分页或大量记录时，应单独使用 `AppTimeline` 配合业务列表。
- 卡片只传递时间线数据，状态映射规则仍沿用 `AppTimeline`。

## 2. 代码演示

### 2.1 带标题操作的服务进度

```vue demo:content-timeline-card-basic title="服务进度卡片"
<script setup lang="ts">
import { AppButton, AppTimelineCard, type TimelineItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: TimelineItem[] = [
  { key: "1", title: "提交工单", timestamp: "今天 09:10", state: "success" },
  { key: "2", title: "工程师处理中", timestamp: "今天 09:24", state: "processing" },
];
</script>

<template>
  <AppTimelineCard title="服务进度" description="工单 #APS-2026-0826" :items="items">
    <template #actions><AppButton size="small" variant="text">查看详情</AppButton></template>
  </AppTimelineCard>
</template>
```

### 2.2 紧凑的同步记录

```vue demo:content-timeline-card-compact title="同步记录卡片"
<script setup lang="ts">
import { AppTimelineCard, type TimelineItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: TimelineItem[] = [
  { key: "1", title: "已同步 CRM", timestamp: "08:30", state: "success" },
  { key: "2", title: "待同步分析数据", timestamp: "等待执行", state: "warning" },
];
</script>

<template><AppTimelineCard title="同步记录" :items="items" /></template>
```


### 2.3 补充说明

```vue demo:content-timeline-card-description title="补充说明"
<script setup lang="ts">
import { AppTimelineCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "t1", title: "创建项目", description: "初始化仓库与配置", timestamp: "08-10 09:00" },
  { key: "t2", title: "提交代码", description: "完成首版功能", timestamp: "08-11 14:30" },
];
</script>

<template>
  <AppTimelineCard title="项目进展" description="最近两周的关键节点" :items="items" />
</template>
```

### 2.4 操作区

```vue demo:content-timeline-card-actions title="操作区"
<script setup lang="ts">
import { AppButton, AppTimelineCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", title: "发布 v0.2", timestamp: "08-12" },
  { key: "b", title: "发布 v0.3", timestamp: "08-15" },
];
</script>

<template>
  <AppTimelineCard title="版本记录" :items="items">
    <template #actions>
      <AppButton size="small" variant="text">查看全部</AppButton>
    </template>
  </AppTimelineCard>
</template>
```

### 2.5 状态记录

```vue demo:content-timeline-card-state title="状态记录"
<script setup lang="ts">
import { AppTimelineCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "已上线", description: "灰度 10%", timestamp: "08-16 10:00", tone: "green" as const },
  { key: "2", title: "正在验证", description: "等待监控数据", timestamp: "08-16 11:20", tone: "orange" as const },
  { key: "3", title: "计划回滚", description: "异常率上升", timestamp: "08-16 12:40", tone: "red" as const },
];
</script>

<template>
  <AppTimelineCard title="发布状态" :items="items" />
</template>
```
## 3. API 使用方式

传入标题和 `items` 即可。右侧只有单个附加动作时使用 `actions` 插槽；复杂筛选和批量操作不适合塞进卡片标题栏。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 卡片标题。 | `string` | — |
| `items` | 要交给内置 `AppTimeline` 的记录。 | `TimelineItem[]` | — |
| `description` | 标题补充说明。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 卡片标题栏右侧操作区。 |

### 4.3 Events

无自定义事件。
