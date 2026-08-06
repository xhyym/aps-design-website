---
title: 结果页
component: AppResult
category: feedback
source: packages/ui/src/components/feedback/AppResult.vue
---

# 结果页（AppResult）

`AppResult` 用于呈现提交、支付、导入等流程的最终状态，并给出下一步动作。

## 1. 用处

- 在用户完成一个明确流程后确认成功、警告、错误或信息状态。
- 根据 `status` 选择相匹配的图标和视觉语义。
- 通过默认 `action` 或 `actions` 插槽引导用户继续操作。

它不是系统通知的替代品；短暂反馈应使用 Toast。

## 2. 代码演示

### 2.1 成功后的默认操作

```vue demo:result-success title="成功结果"
<script setup lang="ts">
import { AppResult } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResult status="success" title="课程发布成功" description="学员现在可以在商城中购买该课程。" action-text="查看课程" @action="console.info('查看已发布课程')" />
</template>
```

### 2.2 多个后续动作

```vue demo:result-actions title="自定义操作"
<script setup lang="ts">
import { AppButton, AppResult } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResult status="warning" title="有 3 位学员尚未导入" description="可以先返回继续编辑，或直接提交当前名单。">
    <template #actions>
      <AppButton variant="secondary">继续编辑</AppButton>
      <AppButton>继续提交</AppButton>
    </template>
  </AppResult>
</template>
```

## 3. API 使用方式

默认操作适合单一路径；有多个决策时通过 `actions` 插槽放置完整按钮组。

```vue
<AppResult status="error" title="保存失败" action-text="重新提交" @action="submitAgain" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `status` | 流程结果状态。 | `"success" \| "error" \| "warning" \| "info" \| "403" \| "404" \| "500"` | `"info"` |
| `title` / `description` | 结果标题与说明。 | `string` | `"操作完成" / "当前操作已经处理完成。"` |
| `actionText` | 默认操作按钮文案。 | `string` | `"返回上一页"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 替换默认操作按钮，适合多个后续动作。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `action` | — | 点击默认操作按钮时触发。 |
