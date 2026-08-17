---
title: 下拉菜单
component: AppDropdown
category: overlay
source: packages/ui/src/components/overlay/AppDropdown.vue
---

# 下拉菜单（AppDropdown）

`AppDropdown` 负责把账户、视图和记录操作组织成可键盘操作的菜单。

## 1. 用处

用 `items` 表达菜单结构，`danger` 和 `divided` 帮助用户识别危险操作与分组边界；组件会在打开时把焦点移到第一项，支持方向键、Home/End、Enter 和 Escape。

## 2. 代码演示

### 2.1 账户菜单

```vue demo:overlay-dropdown-basic title="账户菜单"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items: DropdownItem[] = [
  { key: "profile", label: "个人资料", icon: "user" },
  { key: "settings", label: "偏好设置", icon: "settings" },
  { key: "logout", label: "退出登录", icon: "logout", danger: true, divided: true },
];
</script>

<template>
  <AppDropdown v-model="visible" :items="items" menu-label="账户菜单" @select="visible = false">
    <template #trigger="{ toggle }"><AppButton variant="secondary" @click="toggle">林知远</AppButton></template>
  </AppDropdown>
</template>
```

### 2.2 选择视图时保持菜单

```vue demo:overlay-dropdown-persist title="不自动关闭"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const items: DropdownItem[] = [
  { key: "all", label: "全部课程" },
  { key: "published", label: "已发布课程" },
  { key: "draft", label: "草稿课程" },
];
</script>

<template>
  <AppDropdown v-model="visible" :items="items" menu-label="课程视图" :hide-on-click="false">
    <template #trigger="{ toggle }"><AppButton @click="toggle">课程视图</AppButton></template>
  </AppDropdown>
</template>
```


### 2.3 选择回调

```vue demo:overlay-dropdown-select title="选择回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const picked = ref("");
const items: DropdownItem[] = [
  { key: "profile", label: "个人中心" },
  { key: "settings", label: "账号设置" },
];
</script>

<template>
  <div>
    <AppDropdown v-model="open" :items="items" menu-label="用户菜单" @select="(k: string) => (picked = k)">
      <template #trigger="{ toggle }">
        <AppButton @click="toggle">用户菜单</AppButton>
      </template>
    </AppDropdown>
    <p class="hint">已选：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.4 危险项

```vue demo:overlay-dropdown-danger title="危险项"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: DropdownItem[] = [
  { key: "export", label: "导出数据", icon: "download" as const },
  { key: "delete", label: "删除项目", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppDropdown v-model="open" :items="items" menu-label="项目操作">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">项目操作</AppButton>
    </template>
  </AppDropdown>
</template>
```

### 2.5 禁用项

```vue demo:overlay-dropdown-disabled title="禁用项"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: DropdownItem[] = [
  { key: "a", label: "正常操作" },
  { key: "b", label: "暂不可用", disabled: true },
];
</script>

<template>
  <AppDropdown v-model="open" :items="items" menu-label="操作菜单">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">操作菜单</AppButton>
    </template>
  </AppDropdown>
</template>
```

### 2.6 菜单位置

```vue demo:overlay-dropdown-placement title="菜单位置"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: DropdownItem[] = [
  { key: "top", label: "顶部对齐" },
  { key: "center", label: "居中对齐" },
];
</script>

<template>
  <AppDropdown v-model="open" :items="items" menu-label="对齐菜单" placement="bottom-start">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">bottom-start</AppButton>
    </template>
  </AppDropdown>
</template>
```
## 3. API 使用方式

触发器放在 `trigger` 插槽，选择结果在 `select` 中处理。需要让用户连续勾选或切换视图时，设置 `hideOnClick="false"`，再在业务条件满足时关闭 `v-model`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示菜单。 | `boolean` | 必填 |
| `items` | 菜单项列表。 | `DropdownItem[]` | 必填 |
| `menuLabel` | 菜单无障碍名称。 | `string` | 必填 |
| `placement` | 菜单位置。 | `PopoverPlacement` | `bottom-end` |
| `hideOnClick` | 选择后是否关闭。 | `boolean` | `true` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `trigger` | 菜单触发器；参数包含 `open`、`toggle` 和 `close`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 菜单状态同步。 |
| `select` | `string` | 选择菜单项 key。 |
