---
title: 抽屉
component: AppDrawer
category: overlay
source: packages/ui/src/components/overlay/AppDrawer.vue
---

# 抽屉（AppDrawer）

`AppDrawer` 从页面末端滑入一块独立工作区，适合筛选、详情和需要保留主页面上下文的长表单。

## 1. 用处

相比对话框，抽屉更适合宽度较大或字段较多的任务；使用 `footer` 固定放置重置、保存等动作，避免内容滚动时操作丢失。

## 2. 代码演示

### 2.1 筛选抽屉

```vue demo:overlay-drawer-basic title="筛选抽屉"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDrawer } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">打开筛选</AppButton>
  <AppDrawer v-model="visible" title="订单筛选" description="按订单状态和创建时间缩小结果范围。">
    这里放置状态、时间和金额筛选条件。
    <template #footer><AppButton variant="secondary" @click="visible = false">重置</AppButton><AppButton @click="visible = false">应用筛选</AppButton></template>
  </AppDrawer>
</template>
```

### 2.2 宽详情抽屉

```vue demo:overlay-drawer-wide title="宽详情抽屉"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDrawer } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">打开详情面板</AppButton>
  <AppDrawer v-model="visible" title="订单详情" description="查看订单状态、收货信息和操作记录。" width="wide">
    <dl><dt>订单编号</dt><dd>SO-20260806-018</dd><dt>当前状态</dt><dd>待发货</dd></dl>
  </AppDrawer>
</template>
```

## 3. API 使用方式

用 `v-model` 管理抽屉显示。抽屉内容放在默认插槽，固定操作放在 `footer`；异步保存时保留 `modelValue`，完成后再关闭。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示抽屉。 | `boolean` | 必填 |
| `title` | 抽屉标题。 | `string` | 必填 |
| `description` | 标题下说明。 | `string` | `""` |
| `width` | 抽屉宽度。 | `"regular" \| "wide"` | `regular` |
| `closable` | 是否显示关闭按钮。 | `boolean` | `true` |
| `closeOnOverlay` | 点击遮罩是否关闭。 | `boolean` | `true` |
| `closeOnPressEscape` | 按 Escape 是否关闭。 | `boolean` | `true` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 抽屉主体内容。 |
| `footer` | 固定底部操作。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 显示状态变化。 |
| `close` | — | 抽屉关闭后触发。 |
