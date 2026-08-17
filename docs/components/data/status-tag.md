---
title: 状态标签
component: AppStatusTag
category: data
source: packages/ui/src/components/data/AppStatusTag.vue
---

# 状态标签（AppStatusTag）

`AppStatusTag` 用固定语义色显示简短状态文字。

## 1. 用处

- 在订单、任务、审批列表中快速标识当前状态。
- 标签只显示已确定的业务状态，不负责状态迁移或权限判断。

## 2. 代码演示

### 2.1 常用状态语义

```vue demo:data-status-tag-tones title="常用状态"
<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><div class="tag-row"><AppStatusTag tone="success" label="已完成" /><AppStatusTag tone="warning" label="待处理" /><AppStatusTag tone="danger" label="已失败" /></div></template>

<style scoped>.tag-row { display: flex; gap: 8px; }</style>
```

### 2.2 信息状态

```vue demo:data-status-tag-info title="信息状态"
<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppStatusTag tone="info" label="同步进行中" /></template>
```


### 2.3 异常状态

```vue demo:status-tag-danger title="异常状态"
<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppStatusTag tone="danger" label="服务不可用" />
</template>
```

### 2.4 成功状态

```vue demo:status-tag-success title="成功状态"
<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatusTag tone="success" label="已发布" />
    <AppStatusTag tone="success" label="部署完成" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; }
</style>
```

### 2.5 警告状态

```vue demo:status-tag-warning title="警告状态"
<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatusTag tone="warning" label="待审核" />
    <AppStatusTag tone="warning" label="即将过期" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; }
</style>
```

### 2.6 组合展示

```vue demo:status-tag-combo title="组合展示"
<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatusTag tone="info" label="处理中" />
    <AppStatusTag tone="success" label="已完成" />
    <AppStatusTag tone="warning" label="有风险" />
    <AppStatusTag tone="danger" label="已失败" />
    <AppStatusTag tone="neutral" label="未开始" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
```
## 3. API 使用方式

使用业务状态机映射 `tone` 和 `label`，不要由前端根据标签文字猜测颜色。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `tone` | 状态色。 | `"success" \| "warning" \| "danger" \| "neutral" \| "info"` | — |
| `label` | 状态文字。 | `string` | — |

### 4.2 Slots

无插槽。

### 4.3 Events

无自定义事件。
