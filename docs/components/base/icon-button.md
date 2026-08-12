---
title: 图标按钮
component: AppIconButton
category: base
source: packages/ui/src/components/base/AppIconButton.vue
---

# 图标按钮（AppIconButton）

`AppIconButton` 是只有图标、仍保持明确可访问名称的操作入口。它把 `label` 同时写入 `aria-label` 和浏览器提示文本，适合刷新、筛选、关闭、设置等空间受限的常见动作。

## 1. 用处

`AppIconButton` 适合刷新、筛选、关闭、设置等空间有限的明确操作。它将 `label` 写入无障碍名称和提示文本，因此使用图标时不会丢失动作语义。

## 2. 代码演示

### 2.1 基础用法

`label` 为必填项，不能用空字符串代替。若用户必须通过图标理解动作，说明它更适合有文字的 `AppButton`。

```vue demo:icon-button-basic title="基础用法"
<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";

function refreshOrders(): void {
  console.info("正在刷新订单列表");
}
</script>

<template>
  <AppIconButton
    icon="refresh"
    label="刷新订单列表"
    variant="secondary"
    @click="refreshOrders"
  />
</template>
```

### 2.2 加载状态

`loading` 时组件显示旋转图标并自动禁用；请求结束后由业务将 `loading` 改回 `false`。`circle` 只改变外观，不会降低 `label` 的必要性。

```vue demo:icon-button-loading title="加载状态"
<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const isRefreshing = ref(false);
let refreshTimerId: number | undefined;

/** 用短计时模拟请求，展示 loading 时自动禁用的防重复提交行为。 */
function refreshData(): void {
  if (isRefreshing.value) return;
  isRefreshing.value = true;
  console.info("开始刷新当前页面数据，图标按钮已进入加载状态");
  refreshTimerId = window.setTimeout(() => {
    isRefreshing.value = false;
    console.info("当前页面数据刷新演示已完成");
  }, 1100);
}

onBeforeUnmount(() => window.clearTimeout(refreshTimerId));
</script>

<template>
  <AppIconButton
    icon="refresh"
    label="刷新数据"
    :loading="isRefreshing"
    circle
    @click="refreshData"
  />
</template>
```

### 2.3 样式变体

`variant` 决定按钮视觉权重：`ghost` 用于弱背景工具条，`secondary` 用于常规操作，`primary`/`danger` 用于主操作与危险操作。

```vue demo:icon-button-variants title="样式变体"
<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton icon="refresh" label="刷新" variant="ghost" />
    <AppIconButton icon="edit" label="编辑" variant="secondary" />
    <AppIconButton icon="check" label="保存" variant="primary" />
    <AppIconButton icon="trash" label="删除" variant="danger" />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
```

### 2.4 尺寸

`size` 控制按钮尺寸，未传时继承最近的 `AppConfigProvider`；在紧凑工具条中常用 `size="small"`。

```vue demo:icon-button-sizes title="尺寸"
<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton icon="settings" label="偏好设置" size="small" variant="secondary" />
    <AppIconButton icon="settings" label="偏好设置" size="default" variant="secondary" />
    <AppIconButton icon="settings" label="偏好设置" size="large" variant="secondary" />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
```

### 2.5 激活态

`active` 表示筛选、视图等开关处于生效状态，适合在工具条中标识当前选中的操作。

```vue demo:icon-button-active title="激活态"
<script setup lang="ts">
import { ref } from "vue";
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const filterOpen = ref(true);
</script>

<template>
  <AppIconButton
    icon="filter"
    label="筛选交易订单"
    variant="secondary"
    :active="filterOpen"
    @click="filterOpen = !filterOpen"
  />
</template>
```

### 2.6 圆形轮廓

`circle` 让按钮显示为圆形轮廓，适合悬浮工具条中的独立动作。

```vue demo:icon-button-circle title="圆形轮廓"
<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton icon="plus" label="新增" variant="primary" circle />
    <AppIconButton icon="close" label="关闭" variant="secondary" circle />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
```

### 2.7 禁用态

`disabled` 时按钮不可点击；未传时继承全局配置。危险操作进入禁用态后，仍应保留清晰的视觉语义。

```vue demo:icon-button-disabled title="禁用态"
<script setup lang="ts">
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton icon="refresh" label="刷新" variant="secondary" disabled />
    <AppIconButton icon="trash" label="删除" variant="danger" disabled />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
```

### 2.8 工具栏组合

把多个图标按钮排成工具栏，用 `active` 表达当前视图，配合 `ghost` 的次要入口。

```vue demo:icon-button-toolbar title="工具栏组合"
<script setup lang="ts">
import { ref } from "vue";
import { AppIconButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeView = ref("list");
</script>

<template>
  <div class="icon-button-demo">
    <AppIconButton
      icon="grid"
      label="卡片视图"
      variant="secondary"
      :active="activeView === 'grid'"
      @click="activeView = 'grid'"
    />
    <AppIconButton
      icon="menu"
      label="列表视图"
      variant="secondary"
      :active="activeView === 'list'"
      @click="activeView = 'list'"
    />
    <AppIconButton icon="refresh" label="刷新" variant="ghost" />
  </div>
</template>

<style scoped>
.icon-button-demo {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
```

## 3. API 使用方式

必须同时提供 `icon` 和清晰的 `label`。当操作会触发请求时，由页面维护 `loading`；工具栏中可使用 `active` 表示筛选或视图处于生效状态。

```vue
<AppIconButton
  icon="filter"
  label="筛选交易订单"
  variant="secondary"
  :active="filterPanelOpen"
  @click="toggleFilterPanel"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `icon` | 必填，显示的内置图标。 | `IconName` | — |
| `label` | 必填，按钮辅助名称与提示文本。 | `string` | "" |
| `variant` | 按钮样式。 | `"ghost" \| "secondary" \| "primary" \| "danger"` | `"ghost"` |
| `size` | 控件尺寸；未传时继承 `AppConfigProvider`。 | `"small" \| "default" \| "large"` | 继承全局配置 |
| `type` | 原生按钮类型。 | `"button" \| "submit" \| "reset"` | `"button"` |
| `active` | 是否显示激活态。 | `boolean` | `false` |
| `disabled` | 是否禁用；未传时继承全局配置。 | `boolean` | 继承全局配置 |
| `loading` | 是否进入加载态；加载时自动禁用。 | `boolean` | `false` |
| `circle` | 是否显示为圆形轮廓。 | `boolean` | `false` |

### 4.2 Slots

`AppIconButton` 没有内容插槽，图标由 `icon` 指定。

### 4.3 Events

组件根节点是原生 `button`，可使用 `@click`、`@focus` 等原生事件；没有额外定义自定义事件。
