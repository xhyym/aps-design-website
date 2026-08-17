---
title: 产品标识
component: AppLogo
category: layout
source: packages/ui/src/components/layout/AppLogo.vue
---

# 产品标识（AppLogo）

`AppLogo` 将 `AppBrandMark` 与产品名称组合为统一的产品标识，适合放在侧栏或导航栏起始位置。

## 1. 用处

- 为应用主导航提供一致的品牌起点。
- 用 `label` 替换默认名称，适配二次开发后的产品名。
- 在窄侧栏中以 `compact` 仅保留标记，减少横向占用。

## 2. 代码演示

### 2.1 自定义名称

```vue demo:layout-logo-basic title="产品名称"
<script setup lang="ts">
import { AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppLogo label="星河工作台" />
</template>
```

### 2.2 收起侧栏中的标识

```vue demo:layout-logo-compact title="紧凑模式"
<script setup lang="ts">
import { AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-logos">
    <AppLogo compact />
    <AppLogo label="仅显示标记" compact />
  </div>
</template>

<style scoped>
.demo-logos { display: flex; align-items: center; gap: 24px; }
</style>
```


### 2.3 自定义名称

```vue demo:layout-logo-custom-label title="自定义名称"
<script setup lang="ts">
import { AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppLogo label="APS Design" />
    <AppLogo label="控制台" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 24px; align-items: center; }
</style>
```

### 2.4 组合品牌

```vue demo:layout-logo-with-brand title="组合品牌"
<script setup lang="ts">
import { AppBrandMark, AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppBrandMark size="small" />
    <AppLogo label="APS Design Pro" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; align-items: center; }
</style>
```

### 2.5 长名称
```vue demo:layout-logo-long-label title="长名称"
<script setup lang="ts">
import { AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppLogo label="APS Design System Pro" />
</template>
```
## 3. API 使用方式

```vue
<AppLogo :label="isSidebarCollapsed ? '' : '业务管理平台'" :compact="isSidebarCollapsed" />
```

`compact` 为 `true` 时会直接隐藏文字，因此无需同时把 `label` 改为空字符串；上例仅用于说明可以由同一状态驱动两项配置。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 产品名称文字。 | `string` | `"aps-design-pro"` |
| `compact` | 是否隐藏产品名称，仅显示品牌标记。 | `boolean` | `false` |

### 4.2 Slots

`AppLogo` 的标记与文字由组件内部保持固定组合，不提供插槽或事件。
