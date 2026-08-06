---
title: 命令面板
component: AppCommandPalette
category: overlay
source: packages/ui/src/components/overlay/AppCommandPalette.vue
---

# 命令面板（AppCommandPalette）

`AppCommandPalette` 提供可搜索、可键盘导航的全局操作入口，适合在管理后台承载快捷命令。

## 1. 用处

把跨页面的创建、跳转或批量操作集中到一个可检索面板中；通过 `description` 帮助用户区分同名动作。它只负责筛选和选择，不负责具体业务执行。

## 2. 代码演示

### 2.1 基础命令搜索

```vue demo:overlay-command-palette-basic title="基础命令搜索"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "course", title: "新建课程", description: "进入课程创建流程", icon: "plus" as const },
  { key: "orders", title: "查看订单", description: "打开交易订单列表", icon: "panel" as const },
];
</script>

<template>
  <AppButton @click="visible = true">打开命令面板</AppButton>
  <AppCommandPalette v-model="visible" :items="items" @select="visible = false" />
</template>
```

### 2.2 自定义占位文案与禁用项

```vue demo:overlay-command-palette-disabled title="禁用命令"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "publish", title: "发布课程", description: "当前课程尚未完成审核", icon: "arrow-right" as const, disabled: true },
  { key: "draft", title: "保存草稿", description: "保留当前编辑内容", icon: "panel" as const },
];
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">查看可用操作</AppButton>
  <AppCommandPalette v-model="visible" :items="items" placeholder="搜索课程操作" @select="visible = false" />
</template>
```

## 3. API 使用方式

用 `v-model` 控制打开状态，`items` 传入动作清单；`select` 事件中根据 `item.key` 分发真实业务动作。面板打开后支持上下方向键、Enter 选择和 Escape 关闭。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示命令面板。 | `boolean` | 必填 |
| `items` | 可搜索的命令项列表。 | `CommandPaletteItem[]` | 必填 |
| `placeholder` | 搜索框占位文案。 | `string` | `搜索功能或操作` |

### 4.2 Slots

无插槽；图标、标题和描述由 `items` 数据驱动。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 面板打开或关闭时同步状态。 |
| `select` | `CommandPaletteItem` | 用户确认一个可用命令时触发。 |
