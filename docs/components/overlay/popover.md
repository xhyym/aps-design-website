---
title: 气泡卡片
component: AppPopover
category: overlay
source: packages/ui/src/components/overlay/AppPopover.vue
---

# 气泡卡片（AppPopover）

`AppPopover` 在触发器附近展示可交互的补充内容，支持多方向定位、点击外部关闭和滚动重定位。

## 1. 用处

适合展示筛选说明、操作补充和小型交互表单；需要确认语义时使用 `AppPopconfirm`，需要完整流程时使用 `AppDialog`。

## 2. 代码演示

### 2.1 带关闭动作的内容

```vue demo:overlay-popover-basic title="内容气泡"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppPopover v-model="visible" label="课程说明">
    <template #trigger="{ toggle }"><AppButton variant="secondary" @click="toggle">查看说明</AppButton></template>
    <template #default="{ close }">购买课程后可永久查看全部章节。<AppButton size="small" @click="close">知道了</AppButton></template>
  </AppPopover>
</template>
```

### 2.2 指定定位与间距

```vue demo:overlay-popover-placement title="指定定位"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppPopover v-model="visible" label="筛选帮助" placement="right-start" :offset="12">
    <template #trigger="{ toggle }"><AppButton @click="toggle">筛选规则</AppButton></template>
    <template #default>多个筛选条件会按“同时满足”组合。</template>
  </AppPopover>
</template>
```


### 2.3 间距

```vue demo:overlay-popover-offset title="间距"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div class="pad">
    <AppPopover v-model="open" label="偏移示例" :offset="24">
      <template #trigger="{ toggle }">
        <AppButton @click="toggle">偏移 24px</AppButton>
      </template>
      <template #default="{ close }">
        <p>与触发器间距 24px 的气泡卡片。</p>
        <AppButton size="small" variant="text" @click="close">关闭</AppButton>
      </template>
    </AppPopover>
  </div>
</template>

<style scoped>
.pad { padding: 40px 0; }
</style>
```

### 2.4 外部点击

```vue demo:overlay-popover-close-outside title="外部点击"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopover v-model="open" label="保持打开" :close-on-outside="false">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">不会自动关闭</AppButton>
    </template>
    <template #default="{ close }">
      <p>点击外部不会关闭，需显式操作。</p>
      <AppButton size="small" @click="close">手动关闭</AppButton>
    </template>
  </AppPopover>
</template>
```

### 2.5 自定义触发器

```vue demo:overlay-popover-custom-trigger title="自定义触发器"
<script setup lang="ts">
import { ref } from "vue";
import { AppPopover, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopover v-model="open" label="标签触发器">
    <template #trigger="{ toggle }">
      <AppTag style="cursor: pointer" @click="toggle">点击标签</AppTag>
    </template>
    <template #default>
      <p>任意元素都可作为触发器。</p>
    </template>
  </AppPopover>
</template>
```

### 2.6 无障碍标签

```vue demo:overlay-popover-label title="无障碍标签"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <AppPopover v-model="open" label="帮助信息" content-role="dialog">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">帮助</AppButton>
    </template>
    <template #default>
      <p>以对话框角色呈现的气泡内容，便于屏幕阅读器识别。</p>
    </template>
  </AppPopover>
</template>
```
## 3. API 使用方式

触发器插槽提供 `open`、`toggle`、`close`；内容插槽也提供 `close`，可在完成一个动作后主动关闭。组件会根据视口空间自动翻转方向并限制最大尺寸。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示气泡。 | `boolean` | 必填 |
| `placement` | 首选定位方向。 | `PopoverPlacement` | `bottom-end` |
| `label` | dialog 内容角色下的无障碍名称。 | `string` | 必填 |
| `closeOnOutside` | 点击触发器和内容之外是否关闭。 | `boolean` | `true` |
| `closeOnEscape` | 按 Escape 是否关闭。 | `boolean` | `true` |
| `contentRole` | 内容语义角色。 | `"dialog" \| "presentation"` | `dialog` |
| `repositionOnScroll` | 滚动时是否重新定位。 | `boolean` | `true` |
| `offset` | 与触发器的间距，单位 px。 | `number` | `8` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `trigger` | 触发器；参数为 `open`、`toggle`、`close`。 |
| `default` | 气泡内容；参数为 `close`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 气泡打开状态变化。 |
