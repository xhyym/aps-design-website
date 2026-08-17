---
title: 更多菜单
component: AppMenuRight
category: navigation
source: packages/ui/src/components/navigation/AppMenuRight.vue
---

# 更多菜单（AppMenuRight）

`AppMenuRight` 是基于上下文菜单的轻量更多操作入口，适合表格行、页面标题和卡片右上角。

## 1. 用处

- 将低频编辑、复制、删除操作收纳到一个紧凑入口中。
- 使用 `danger` 与 `divided` 区分不可逆操作，但确认逻辑仍应由业务层提供。
- 通过触发器插槽对接现有按钮、行项或图标按钮。

## 2. 代码演示

### 2.1 页面更多操作

```vue demo:menu-right-basic title="页面更多操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const selected = ref("");
const items = [{ key: "rename", label: "重命名", icon: "edit" as const }, { key: "copy", label: "复制链接" }, { key: "delete", label: "删除页面", icon: "trash" as const, danger: true, divided: true }];
</script>

<template>
  <AppMenuRight v-model="visible" :items="items" label="页面操作" @select="selected = $event">
    <template #trigger="{ toggle }"><AppButton variant="secondary" @click="toggle">更多操作</AppButton></template>
  </AppMenuRight>
  <small v-if="selected">已选择：{{ selected }}</small>
</template>

<style scoped>
small { margin-left: 10px; color: var(--aps-muted); }
</style>
```

触发器插槽提供 `toggle`、`open` 和 `close`，外层可按自己的按钮交互来控制菜单。

### 2.2 卡片行入口

```vue demo:menu-right-context title="卡片行入口"
<script setup lang="ts">
import { ref } from "vue";
import { AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [{ key: "open", label: "打开详情", icon: "arrow-right" as const }, { key: "archive", label: "归档", icon: "check" as const }];
</script>

<template>
  <AppMenuRight v-model="visible" :items="items" label="订单操作" @select="visible = false">
    <template #trigger="{ toggle }"><button class="record" type="button" @click="toggle">订单 #20260806001 <span>点击查看操作</span></button></template>
  </AppMenuRight>
</template>

<style scoped>
.record { display: flex; width: 100%; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); font: inherit; text-align: left; }.record span { color: var(--aps-muted); font-size: var(--aps-text-sm); }
</style>
```

用于行内菜单时，建议让触发控件自身保留可访问名称，`label` 则描述菜单整体用途。


### 2.3 自定义触发器

```vue demo:nav-menu-right-trigger title="自定义触发器"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "edit", label: "编辑", icon: "edit" as const },
  { key: "copy", label: "复制", icon: "copy" as const },
  { key: "del", label: "删除", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppMenuRight v-model="visible" :items="items" label="行操作">
    <template #trigger="{ toggle }">
      <AppButton size="small" @click="toggle">更多操作</AppButton>
    </template>
  </AppMenuRight>
</template>
```

### 2.4 危险项

```vue demo:nav-menu-right-danger title="危险操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "share", label: "分享", icon: "copy" as const },
  { key: "reset", label: "重置密码", icon: "refresh" as const },
  { key: "del", label: "注销账号", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppButton @click="visible = true">打开菜单</AppButton>
  <AppMenuRight v-model="visible" :items="items" label="账号操作" />
</template>
```

### 2.5 分割线

```vue demo:nav-menu-right-divided title="分隔与危险项"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "top", label: "置顶", icon: "arrow-up" as const },
  { key: "move", label: "移动", icon: "drag" as const },
  { key: "sep", label: "删除", icon: "trash" as const, divided: true, danger: true },
];
</script>

<template>
  <AppButton @click="visible = true">打开菜单</AppButton>
  <AppMenuRight v-model="visible" :items="items" label="列表操作" />
</template>
```

### 2.6 受控显隐

```vue demo:nav-menu-right-controlled title="受控显隐"
<script setup lang="ts">
import { ref } from "vue";
import { AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items = [
  { key: "a", label: "查看", icon: "eye" as const },
  { key: "b", label: "编辑", icon: "edit" as const },
];
</script>

<template>
  <AppMenuRight v-model="open" :items="items" label="操作" />
</template>
```

### 2.7 监听选择

```vue demo:nav-menu-right-select title="选择回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const last = ref("");
const visible = ref(false);
const items = [
  { key: "k1", label: "刷新", icon: "refresh" as const },
  { key: "k2", label: "导出", icon: "download" as const },
];
</script>

<template>
  <div>
    <AppButton @click="visible = true">打开菜单</AppButton>
    <AppMenuRight v-model="visible" :items="items" label="更多" @select="(key: string) => (last = key)" />
    <p class="hint">已选：{{ last || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```
## 3. API 使用方式

```vue
<AppMenuRight v-model="isOpen" :items="rowActions" label="订单操作" @select="handleRowAction">
  <template #trigger="{ toggle }"><AppIconButton icon="dots" label="订单更多操作" @click="toggle" /></template>
</AppMenuRight>
```

删除、停用等危险操作应在 `select` 后继续打开 `AppPopconfirm` 或 `AppConfirmDialog`，不要只凭菜单颜色执行不可逆请求。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 菜单是否显示。 | `boolean` | — |
| `items` | 菜单项，支持 `key`、`label`、`icon`、`disabled`、`danger` 与 `divided`。 | `ContextMenuItem[]` | — |
| `label` | 菜单的可访问名称。 | `string` | `undefined` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `trigger` | 触发器插槽，接收 `open`、`close`、`toggle`。 |

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 菜单开关状态变化时触发。 | `value: boolean` |
| `select` | 点击未禁用菜单项时触发。 | `key: string` |
