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


### 2.3 选择回调

```vue demo:overlay-command-palette-select title="选择回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette, type CommandPaletteItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const picked = ref("");
const items: CommandPaletteItem[] = [
  { key: "new", title: "新建文档", description: "创建一篇新文档", icon: "plus" as const },
  { key: "search", title: "全局搜索", description: "搜索全部内容", icon: "search" as const },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">打开命令面板</AppButton>
    <AppCommandPalette v-model="open" :items="items" @select="(item) => (picked = item.title)" />
    <p class="hint">已执行：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.4 自定义占位

```vue demo:overlay-command-palette-placeholder title="自定义占位"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette, type CommandPaletteItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: CommandPaletteItem[] = [
  { key: "a", title: "创建订单" },
  { key: "b", title: "导出报表" },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">快速操作</AppButton>
    <AppCommandPalette v-model="open" :items="items" placeholder="输入操作名称…" />
  </div>
</template>
```

### 2.5 受控面板

```vue demo:overlay-command-palette-controlled title="受控面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette, type CommandPaletteItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: CommandPaletteItem[] = [
  { key: "settings", title: "打开设置", icon: "settings" as const },
  { key: "help", title: "查看帮助", icon: "warning" as const },
];
</script>

<template>
  <div class="row">
    <AppButton @click="open = true">打开</AppButton>
    <AppButton @click="open = false">关闭</AppButton>
    <AppCommandPalette v-model="open" :items="items" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; }
</style>
```

### 2.6 带图标命令

```vue demo:overlay-command-palette-icons title="带图标命令"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette, type CommandPaletteItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: CommandPaletteItem[] = [
  { key: "import", title: "批量导入", description: "从 Excel 导入数据", icon: "download" as const },
  { key: "export", title: "批量导出", description: "导出当前筛选结果", icon: "chart" as const },
  { key: "users", title: "邀请成员", description: "发送邀请链接", icon: "users" as const },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">更多操作</AppButton>
    <AppCommandPalette v-model="open" :items="items" />
  </div>
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
