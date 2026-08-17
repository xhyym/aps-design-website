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


### 2.3 可点击切换

```vue demo:nav-steps-clickable title="可点击切换"
<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "填写信息" },
  { key: "2", title: "确认提交" },
  { key: "3", title: "完成" },
];
</script>

<template>
  <AppSteps :items="items" :clickable="true" />
</template>
```

### 2.4 自定义状态

```vue demo:nav-steps-status title="自定义状态"
<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "已提交", status: "success" as const },
  { key: "2", title: "审核中", status: "process" as const },
  { key: "3", title: "被驳回", status: "error" as const },
  { key: "4", title: "重新提交", status: "wait" as const },
];
</script>

<template>
  <AppSteps :items="items" />
</template>
```

### 2.5 带说明

```vue demo:nav-steps-description title="带说明"
<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "创建", description: "填写基础信息" },
  { key: "2", title: "配置", description: "设置规则与权限" },
  { key: "3", title: "发布", description: "上线到生产环境" },
];
</script>

<template>
  <AppSteps :items="items" />
</template>
```

### 2.6 受控当前步

```vue demo:nav-steps-controlled title="受控当前步"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const current = ref(0);
const items = [
  { key: "1", title: "第一步" },
  { key: "2", title: "第二步" },
  { key: "3", title: "第三步" },
];
</script>

<template>
  <div>
    <AppSteps :items="items" :model-value="current" @update:model-value="(i: number) => (current = i)" />
    <AppButton size="small" class="mt" @click="current = (current + 1) % items.length">下一步</AppButton>
  </div>
</template>

<style scoped>
.mt { margin-top: 12px; }
</style>
```

### 2.7 禁用某步

```vue demo:nav-steps-disabled title="禁用某步"
<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "草稿" },
  { key: "2", title: "待审核", disabled: true },
  { key: "3", title: "已发布" },
];
</script>

<template>
  <AppSteps :items="items" />
</template>
```

### 2.8 自定义可访问名称

```vue demo:nav-steps-label title="自定义可访问名称"
<script setup lang="ts">
import { AppSteps } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "1", title: "下单" },
  { key: "2", title: "支付" },
  { key: "3", title: "发货" },
];
</script>

<template>
  <AppSteps :items="items" aria-label="下单流程" />
</template>
```
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
