---
title: 快捷入口
component: AppFastEnter
category: navigation
source: packages/ui/src/components/navigation/AppFastEnter.vue
---

# 快捷入口（AppFastEnter）

`AppFastEnter` 是 `AppCommandPalette` 的导航语义封装，用于从应用任意位置快速搜索并执行入口操作。

## 1. 用处

- 将常用创建、搜索、跳转操作集中到快捷命令面板。
- 适合配合应用层的 `⌘K` / `Ctrl+K` 快捷键控制显示状态。
- 禁用项仍可展示，但不会进入可键盘选择的命令集合。

## 2. 代码演示

### 2.1 执行快捷操作

```vue demo:fast-enter-basic title="执行快捷操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const selected = ref("");
const items = [{ key: "create", title: "新建订单", description: "创建一笔新的交易订单", icon: "plus" as const }, { key: "search", title: "搜索订单", description: "按订单号或客户查找", icon: "search" as const }];
</script>

<template>
  <AppButton @click="visible = true">打开快捷入口</AppButton>
  <small v-if="selected">已执行：{{ selected }}</small>
  <AppFastEnter v-model="visible" :items="items" @select="selected = $event.title" />
</template>

<style scoped>
small { margin-left: 10px; color: var(--aps-muted); }
</style>
```

选中项会经由 `select` 回传，面板会自动关闭。页面应根据 `item.key` 执行实际路由或业务操作。

### 2.2 禁用不可执行操作

```vue demo:fast-enter-disabled title="禁用不可执行操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [{ key: "overview", title: "查看经营概览", icon: "chart" as const }, { key: "export", title: "导出本月报表", description: "暂无导出权限", icon: "download" as const, disabled: true }];
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">打开命令菜单</AppButton>
  <AppFastEnter v-model="visible" :items="items" @select="visible = false" />
</template>
```

权限和可用性应由应用生成数据时判断，不能只依赖视觉上的禁用态作为权限保护。


### 2.3 带图标的入口

```vue demo:nav-fast-enter-items title="带图标命令"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "new", title: "新建订单", icon: "plus" as const },
  { key: "import", title: "批量导入", icon: "download" as const },
  { key: "export", title: "导出报表", icon: "chart" as const },
];
</script>

<template>
  <div>
    <p class="hint">点击「快捷入口」触发器查看带图标的命令列表。</p>
    <AppButton @click="visible = true">打开快捷入口</AppButton>
    <AppFastEnter v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
```

### 2.4 受控显隐

```vue demo:nav-fast-enter-controlled title="受控显隐"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "a", title: "创建项目" },
  { key: "b", title: "邀请成员" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">打开快捷入口</AppButton>
    <AppFastEnter v-model="visible" :items="items" />
  </div>
</template>
```

### 2.5 监听选择

```vue demo:nav-fast-enter-select title="选择回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const picked = ref("");
const items = [
  { key: "k1", title: "查看详情" },
  { key: "k2", title: "编辑资料" },
];
</script>

<template>
  <div>
    <AppFastEnter v-model="visible" :items="items" @select="(item) => (picked = item.key)" />
    <p class="hint">已选择：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.6 禁用项

```vue demo:nav-fast-enter-disabled-item title="禁用项"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "ok", title: "可用操作", icon: "check" as const },
  { key: "no", title: "维护中（禁用）", icon: "warning" as const, disabled: true },
];
</script>

<template>
  <div>
    <p class="hint">被禁用的命令不可点击。</p>
    <AppButton @click="visible = true">打开</AppButton>
    <AppFastEnter v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
```

### 2.7 带说明的入口

```vue demo:nav-fast-enter-description title="带说明文字"
<script setup lang="ts">
import { ref } from "vue";
import { AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "d1", title: "新建工单", description: "为当前客户创建售后工单" },
  { key: "d2", title: "发送通知", description: "通过站内信提醒相关成员" },
];
</script>

<template>
  <div>
    <p class="hint">带说明文字的入口便于用户理解用途。</p>
    <AppFastEnter v-model="visible" :items="items" />
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); }
</style>
```
## 3. API 使用方式

```vue
<AppFastEnter v-model="isCommandOpen" :items="quickActions" @select="handleQuickAction" />
```

`items` 使用 `CommandPaletteItem[]`：每项包含 `key`、`title`，可选 `description`、`icon` 和 `disabled`。该组件不绑定特定快捷键。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示快捷入口浮层。 | `boolean` | — |
| `items` | 快捷操作数据。 | `CommandPaletteItem[]` | — |

### 4.2 Slots

`AppFastEnter` 不提供插槽。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 请求打开或关闭面板时触发。 | `value: boolean` |
| `select` | 选择可用命令时触发。 | `item: CommandPaletteItem` |
