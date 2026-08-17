---
title: 容器底部
component: AppContainerFooter
category: layout
source: packages/ui/src/components/layout/AppContainerFooter.vue
---

# 容器底部（AppContainerFooter）

`AppContainerFooter` 为容器底部提供统一的高度与内边距，适合放置状态说明、分页或表单操作。

## 1. 用处

- 在编辑区域下方固定承载取消、保存、提交等操作。
- 作为列表或表格的分页承载区，让内容区保持独立滚动。
- 用 `size` 和 `padding` 与同一容器的头部保持节奏一致。

## 2. 代码演示

### 2.1 带操作的底部

```vue demo:layout-container-footer-basic title="基础底部"
<script setup lang="ts">
import { AppButton, AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerFooter bordered class="demo-footer">
    <span>草稿已保存</span>
    <AppButton size="small">提交</AppButton>
  </AppContainerFooter>
</template>

<style scoped>
.demo-footer { width: min(100%, 480px); justify-content: flex-end; }
.demo-footer span { margin-right: auto; color: var(--aps-muted); font-size: 13px; }
</style>
```

### 2.2 不同尺寸底部

```vue demo:layout-container-footer-size title="尺寸档位"
<script setup lang="ts">
import { AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="demo-stack">
    <AppContainerFooter size="small" padding="compact">紧凑底部</AppContainerFooter>
    <AppContainerFooter size="large" padding="spacious">用于多操作项的宽松底部</AppContainerFooter>
  </div>
</template>

<style scoped>
.demo-stack { display: grid; width: min(100%, 480px); gap: 10px; }
.demo-stack :deep(.app-container-footer) { border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
```


### 2.3 分隔线

```vue demo:layout-container-footer-bordered title="分隔线"
<script setup lang="ts">
import { AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerFooter bordered>
    <span>© 2026 APS Design</span>
  </AppContainerFooter>
</template>
```

### 2.4 内边距

```vue demo:layout-container-footer-padding title="内边距"
<script setup lang="ts">
import { AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppContainerFooter padding="compact"><span>紧凑</span></AppContainerFooter>
    <AppContainerFooter padding="spacious"><span>宽松</span></AppContainerFooter>
  </div>
</template>

<style scoped>
.row { display: flex; flex-direction: column; gap: 8px; }
</style>
```

### 2.5 底部内容

```vue demo:layout-container-footer-content title="底部内容"
<script setup lang="ts">
import { AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppContainerFooter>
    <div class="ops">
      <span>共 12 条记录</span>
      <button>上一页</button>
      <button>下一页</button>
    </div>
  </AppContainerFooter>
</template>

<style scoped>
.ops { display: flex; gap: 12px; align-items: center; justify-content: space-between; }
</style>
```
## 3. API 使用方式

```vue
<AppContainerFooter bordered padding="default">
  <AppButton variant="secondary">取消</AppButton>
  <AppButton>保存变更</AppButton>
</AppContainerFooter>
```

底部默认只负责左对齐的横向排列。需要将操作组置右时，在槽位内使用 `AppSpace justify="end"`，不要依赖子元素的随机外边距。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 最小高度档位。 | `"small" \| "default" \| "large"` | `"default"` |
| `padding` | 水平内边距档位。 | `"none" \| "compact" \| "default" \| "spacious"` | `"default"` |
| `bordered` | 是否显示顶部分隔线。 | `boolean` | `false` |
| `ariaLabel` | 底部区域的可访问名称。 | `string` | `"容器底部"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 底部状态、分页或操作按钮。 |
