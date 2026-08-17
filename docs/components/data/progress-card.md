---
title: 进度卡片
component: AppProgressCard
category: data
source: packages/ui/src/components/data/AppProgressCard.vue
---

# 进度卡片（AppProgressCard）

`AppProgressCard` 用标题、补充说明和进度条展示一个任务的完成情况。

## 1. 用处

- 展示课程、交付、资料完善等单一任务进度。
- 百分比来自业务计算；组件只负责视觉映射。

## 2. 代码演示

### 2.1 常规完善度

```vue demo:progress-card-basic title="常规完善度"
<script setup lang="ts">
import { AppProgressCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppProgressCard title="课程完善度" description="补充课程封面和试听章节可提升转化" :percentage="72" /></template>
```

### 2.2 需要关注的进度

```vue demo:progress-card-warning title="风险进度"
<script setup lang="ts">
import { AppProgressCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppProgressCard title="导入进度" :percentage="36" status="warning" /></template>
```


### 2.3 成功状态

```vue demo:progress-card-success title="成功状态"
<script setup lang="ts">
import { AppProgressCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppProgressCard title="年度目标" :percentage="100" description="已完成全年指标" status="success" />
</template>
```

### 2.4 错误状态

```vue demo:progress-card-error title="错误状态"
<script setup lang="ts">
import { AppProgressCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppProgressCard title="数据迁移" :percentage="38" description="步骤 3/5 失败，请重试" status="error" />
</template>
```

### 2.5 任务说明

```vue demo:progress-card-description title="任务说明"
<script setup lang="ts">
import { AppProgressCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppProgressCard title="缓存预热" :percentage="82" description="已预热 82% 的节点" />
    <AppProgressCard title="日志归档" :percentage="50" description="正在压缩历史日志" status="warning" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; flex-wrap: wrap; }
</style>
```
## 3. API 使用方式

传入 0–100 的 `percentage`，超出范围由内置进度组件收敛显示。`status` 只表达当前反馈色，不保存业务审批结论。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 任务标题。 | `string` | — |
| `percentage` | 完成百分比。 | `number` | — |
| `description` | 任务说明。 | `string` | `""` |
| `status` | 进度状态。 | `"normal" \| "success" \| "warning" \| "error"` | `"normal"` |

### 4.2 Slots

无插槽。

### 4.3 Events

无自定义事件。
