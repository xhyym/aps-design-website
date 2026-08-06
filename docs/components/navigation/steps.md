---
title: 步骤条
component: AppSteps
category: navigation
source: packages/ui/src/components/navigation/AppSteps.vue
---

# 步骤条（AppSteps）

`AppSteps` 用于呈现线性流程的进度、已完成状态和当前可处理步骤；是否允许跳转由 `clickable` 明确控制。

## 1. 用处

- 展示开户、下单、审批等有明确顺序的流程。
- 让用户回看已完成步骤，或在可编辑流程中跳转到可操作步骤。
- 自带等待、进行中、成功和错误状态，业务只需传入例外状态。

## 2. 代码演示

### 2.1 可点击流程

```vue demo:steps-basic title="可点击流程"
<script setup lang="ts">
import { ref } from "vue";
import { AppSteps, type StepItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeStep = ref(1);
const items: StepItem[] = [{ key: "create", title: "创建订单" }, { key: "pay", title: "支付确认" }, { key: "complete", title: "完成交付" }];
</script>

<template>
  <AppSteps v-model="activeStep" :items="items" clickable />
  <p class="result">当前步骤：{{ items[activeStep]?.title }}</p>
</template>

<style scoped>
.result { margin: 16px 0 0; color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
```

开启 `clickable` 后可通过点击或方向键切换未禁用步骤；实际表单校验仍由页面在 `change` 中处理。

### 2.2 纵向流程与状态说明

```vue demo:steps-vertical title="纵向流程与状态说明"
<script setup lang="ts">
import { AppSteps, type StepItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items: StepItem[] = [
  { key: "account", title: "账户信息", description: "已完成" },
  { key: "permission", title: "配置权限", description: "请分配管理员角色" },
  { key: "finish", title: "完成开通", status: "wait" },
];
</script>

<template>
  <AppSteps :items="items" :model-value="1" direction="vertical" />
</template>
```

单项未显式设置 `status` 时，当前步骤为 `process`，前序步骤为 `success`，后续步骤为 `wait`。

## 3. API 使用方式

```vue
<AppSteps v-model="activeStepIndex" :items="workflowSteps" clickable @change="handleStepChange" />
```

对于必须按顺序完成的流程，应保持 `clickable="false"`，由“上一步/下一步”业务按钮先完成校验再更新 `activeStepIndex`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前步骤索引，从 `0` 开始；超出范围会自动收敛。 | `number` | `0` |
| `items` | 流程项，支持 `key`、`title`、`description`、`status` 与 `disabled`。 | `StepItem[]` | — |
| `direction` | 展示方向。 | `"horizontal" \| "vertical"` | `"horizontal"` |
| `clickable` | 是否允许用户主动选择步骤。 | `boolean` | `false` |
| `ariaLabel` | 步骤列表的可访问名称。 | `string` | `"流程步骤"` |

### 4.2 Slots

`AppSteps` 不提供插槽，步骤内容由 `items` 描述。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 点击可用步骤后触发。 | `index: number` |
| `change` | 选择新的可用步骤时触发。 | `index: number, item: StepItem` |
