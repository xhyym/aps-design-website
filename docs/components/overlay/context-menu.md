---
title: 上下文菜单
component: AppContextMenu
category: overlay
source: packages/ui/src/components/overlay/AppContextMenu.vue
---

# 上下文菜单（AppContextMenu）

`AppContextMenu` 将针对当前记录、文件或区域的操作收纳到点击菜单或实体右键菜单中。

## 1. 用处

菜单项通过 `items` 描述，支持图标、禁用、危险和分隔线状态；`triggerMode="contextmenu"` 同时支持鼠标右键、菜单键与 Shift+F10。

## 2. 代码演示

### 2.1 点击打开菜单

```vue demo:overlay-context-menu-basic title="点击菜单"
<script setup lang="ts">
import { ref } from "vue";
import { AppContextMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "edit", label: "编辑课程", icon: "edit" as const },
  { key: "copy", label: "复制链接" },
  { key: "delete", label: "删除课程", icon: "trash" as const, danger: true, divided: true },
];
</script>

<template>
  <AppContextMenu v-model="visible" :items="items" menu-label="课程操作" @select="visible = false">
    <template #trigger="{ toggle }">
      <button type="button" @click="toggle">打开课程菜单</button>
    </template>
  </AppContextMenu>
</template>
```

### 2.2 实体右键菜单

```vue demo:overlay-context-menu-right-click title="右键菜单"
<script setup lang="ts">
import { ref } from "vue";
import { AppContextMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items = [
  { key: "rename", label: "重命名文件夹", icon: "edit" as const },
  { key: "move", label: "移动到", icon: "arrow-right" as const },
];
</script>

<template>
  <AppContextMenu v-model="visible" :items="items" menu-label="文件夹操作" trigger-mode="contextmenu" @select="visible = false">
    <template #trigger>
      <button type="button">在这里右键打开菜单</button>
    </template>
  </AppContextMenu>
</template>
```


### 2.3 危险项

```vue demo:overlay-context-menu-danger title="危险项"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContextMenu, type ContextMenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ContextMenuItem[] = [
  { key: "edit", label: "编辑", icon: "edit" as const },
  { key: "delete", label: "删除", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppContextMenu v-model="open" :items="items" menu-label="行操作">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">右键菜单</AppButton>
    </template>
  </AppContextMenu>
</template>
```

### 2.4 分隔项

```vue demo:overlay-context-menu-divided title="分隔项"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContextMenu, type ContextMenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ContextMenuItem[] = [
  { key: "copy", label: "复制", icon: "copy" as const },
  { key: "paste", label: "粘贴", icon: "check" as const },
  { key: "move", label: "移动到…", icon: "drag" as const, divided: true },
  { key: "delete", label: "删除", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppContextMenu v-model="open" :items="items" menu-label="更多操作">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">更多操作</AppButton>
    </template>
  </AppContextMenu>
</template>
```

### 2.5 选择回调

```vue demo:overlay-context-menu-select title="选择回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContextMenu, type ContextMenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const picked = ref("");
const items: ContextMenuItem[] = [
  { key: "view", label: "查看详情" },
  { key: "refresh", label: "刷新" },
];
</script>

<template>
  <div>
    <AppContextMenu v-model="open" :items="items" menu-label="列表操作" @select="(k: string) => (picked = k)">
      <template #trigger="{ toggle }">
        <AppButton @click="toggle">打开菜单</AppButton>
      </template>
    </AppContextMenu>
    <p class="hint">已选：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.6 禁用项

```vue demo:overlay-context-menu-disabled title="禁用项"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContextMenu, type ContextMenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ContextMenuItem[] = [
  { key: "a", label: "可用操作" },
  { key: "b", label: "锁定操作", disabled: true },
];
</script>

<template>
  <AppContextMenu v-model="open" :items="items" menu-label="操作菜单">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">操作菜单</AppButton>
    </template>
  </AppContextMenu>
</template>
```
## 3. API 使用方式

把实际业务入口放入 `trigger` 插槽，在 `select` 中按 key 执行动作。点击模式使用插槽暴露的 `toggle`，右键模式则由组件监听触发器事件。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 菜单是否打开。 | `boolean` | 必填 |
| `items` | 菜单项，包含 `key`、`label`，可选 `icon`、`disabled`、`danger`、`divided`。 | `ContextMenuItem[]` | 必填 |
| `menuLabel` | 菜单的无障碍名称。 | `string` | 必填 |
| `placement` | 相对触发器的浮层位置。 | `PopoverPlacement` | `bottom-start` |
| `triggerMode` | 打开方式。 | `"click" \| "contextmenu"` | `click` |
| `followTriggerOnScroll` | 滚动时是否跟随触发器重新定位。 | `boolean` | `false` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `trigger` | 菜单触发器；插槽参数包含底层浮层的 `open`、`toggle`、`close`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 菜单打开状态变化。 |
| `select` | `string` | 选择菜单项的 key。 |
