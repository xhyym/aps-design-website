---
title: 气泡确认
component: AppPopconfirm
category: overlay
source: packages/ui/src/components/overlay/AppPopconfirm.vue
---

# 气泡确认（AppPopconfirm）

`AppPopconfirm` 在操作入口旁就地询问用户，适合删除、移除和发布等短确认，不打断用户浏览上下文。

## 1. 用处

相对于大对话框，气泡确认更适合单个按钮的轻量确认；提交期间使用 `isConfirming` 保持浮层和焦点，避免重复点击。

## 2. 代码演示

### 2.1 危险移除

```vue demo:overlay-popconfirm-basic title="危险移除"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppPopconfirm v-model="visible" title="移除成员？" description="成员将失去工作区的访问权限。" danger @confirm="visible = false">
    <template #trigger="{ toggle }"><AppButton variant="danger" @click="toggle">移除成员</AppButton></template>
  </AppPopconfirm>
</template>
```

### 2.2 异步发布

```vue demo:overlay-popconfirm-loading title="异步发布"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const confirming = ref(false);

function submit(): void {
  confirming.value = true;
  window.setTimeout(() => {
    confirming.value = false;
    visible.value = false;
  }, 800);
}
</script>

<template>
  <AppPopconfirm v-model="visible" title="发布新版本？" description="版本发布后会立即出现在下载页。" :is-confirming="confirming" @confirm="submit">
    <template #trigger="{ toggle }"><AppButton @click="toggle">发布版本</AppButton></template>
  </AppPopconfirm>
</template>
```


### 2.3 危险确认

```vue demo:overlay-popconfirm-danger title="危险确认"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopconfirm v-model="open" title="删除记录" description="删除后不可恢复" confirm-text="删除" danger>
    <template #trigger="{ toggle }">
      <AppButton tone="danger" @click="toggle">删除</AppButton>
    </template>
  </AppPopconfirm>
</template>
```

### 2.4 自定义文案

```vue demo:overlay-popconfirm-custom-text title="自定义文案"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopconfirm v-model="open" title="提交审核" description="提交后将进入审核队列" confirm-text="提交审核" cancel-text="再想想">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">提交审核</AppButton>
    </template>
  </AppPopconfirm>
</template>
```

### 2.5 确认回调

```vue demo:overlay-popconfirm-confirm title="确认回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const log = ref("");
const onConfirm = () => {
  log.value = "已确认";
  open.value = false;
};
const onCancel = () => {
  log.value = "已取消";
  open.value = false;
};
</script>

<template>
  <div>
    <AppPopconfirm v-model="open" title="是否继续？" description="操作将立即生效" @confirm="onConfirm" @cancel="onCancel">
      <template #trigger="{ toggle }">
        <AppButton @click="toggle">执行操作</AppButton>
      </template>
    </AppPopconfirm>
    <p class="hint">{{ log || "未操作" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.6 浮层位置

```vue demo:overlay-popconfirm-placement title="浮层位置"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopconfirm v-model="open" title="确认操作" placement="top">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">上方弹出</AppButton>
    </template>
  </AppPopconfirm>
</template>
```
## 3. API 使用方式

触发器使用插槽参数的 `toggle`；`confirm` 中开始请求并设置 `isConfirming`，请求结束后更新 `v-model`。取消事件适合记录用户主动放弃操作。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 气泡是否打开。 | `boolean` | 必填 |
| `title` | 确认标题。 | `string` | 必填 |
| `description` | 补充说明。 | `string` | `""` |
| `confirmText` / `cancelText` | 确认与取消按钮文字。 | `string` | `确认` / `取消` |
| `danger` | 是否以危险语义显示。 | `boolean` | `false` |
| `isConfirming` | 是否正在确认请求。 | `boolean` | `false` |
| `placement` | 浮层位置。 | `PopoverPlacement` | `bottom-end` |
| `ariaLabel` | 浮层无障碍名称。 | `string` | `确认操作` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `trigger` | 操作入口；参数提供 `open`、`toggle`、`close`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 打开状态变化。 |
| `confirm` | — | 点击确认按钮。 |
| `cancel` | — | 点击取消按钮。 |
