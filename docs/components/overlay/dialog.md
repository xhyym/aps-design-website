---
title: 对话框
component: AppDialog
category: overlay
source: packages/ui/src/components/overlay/AppDialog.vue
---

# 对话框（AppDialog）

`AppDialog` 用于在不离开当前页面的情况下承载编辑、确认或补充信息，内置遮罩、焦点回收和 Escape 关闭。

## 1. 用处

基础对话框适合短流程和局部编辑；通过 `width` 区分简单确认与宽内容，`footer` 插槽承载业务操作按钮。复杂长表单更适合 `AppDrawer`。

## 2. 代码演示

### 2.1 带底部操作

```vue demo:overlay-dialog-basic title="基础对话框"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">新建课程</AppButton>
  <AppDialog v-model="visible" title="新建课程" description="先填写课程的基础信息。">
    课程创建后可以继续补充章节、价格与封面。
    <template #footer><AppButton variant="secondary" @click="visible = false">取消</AppButton><AppButton @click="visible = false">保存草稿</AppButton></template>
  </AppDialog>
</template>
```

### 2.2 宽内容与关闭事件

```vue demo:overlay-dialog-wide title="宽对话框"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">查看发布说明</AppButton>
  <AppDialog v-model="visible" title="发布前检查" description="课程将面向所有已购买用户开放。" width="wide" @close="visible = false">
    请确认课程封面、章节视频、价格和售后规则已完成校验。
  </AppDialog>
</template>
```


### 2.3 底部操作

```vue demo:overlay-dialog-footer title="底部操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">编辑资料</AppButton>
    <AppDialog v-model="open" title="编辑资料" description="请完善以下信息">
      <p>表单内容区域</p>
      <template #footer>
        <AppButton size="small" variant="text" @click="open = false">取消</AppButton>
        <AppButton size="small" @click="open = false">保存</AppButton>
      </template>
    </AppDialog>
  </div>
</template>
```

### 2.4 说明文字

```vue demo:overlay-dialog-description title="说明文字"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">查看公告</AppButton>
    <AppDialog v-model="open" title="系统公告" description="本周六凌晨将进行系统升级">
      <p>升级期间服务可能短暂不可用，请提前保存工作内容。</p>
    </AppDialog>
  </div>
</template>
```

### 2.5 禁止关闭

```vue demo:overlay-dialog-closable-off title="禁止关闭"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(true);
</script>

<template>
  <div>
    <AppButton @click="open = true">打开对话框</AppButton>
    <AppDialog v-model="open" title="必须处理" description="该对话框无法通过遮罩或关闭按钮关闭" :closable="false" :close-on-overlay="false">
      <p>只能通过业务操作关闭。</p>
      <template #footer>
        <AppButton size="small" @click="open = false">我知道了</AppButton>
      </template>
    </AppDialog>
  </div>
</template>
```

### 2.6 关闭事件

```vue demo:overlay-dialog-close-event title="关闭事件"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const log = ref("");
</script>

<template>
  <div>
    <AppButton @click="open = true">打开对话框</AppButton>
    <AppDialog v-model="open" title="提示" @close="log = '已触发关闭事件'">
      <p>通过右上角、遮罩或 Esc 关闭都会触发 close 事件。</p>
    </AppDialog>
    <p class="hint">{{ log || "对话框尚未关闭" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.7 自定义图标

```vue demo:overlay-dialog-icon title="自定义图标"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">查看订单</AppButton>
    <AppDialog v-model="open" title="订单 #1024" description="订单已支付成功">
      <template #icon>✓</template>
      <p>订单详情内容区域。</p>
    </AppDialog>
  </div>
</template>
```
## 3. API 使用方式

通常用 `v-model` 受控打开状态。需要阻止误关闭时同时关闭 `closeOnOverlay` 与 `closeOnPressEscape`，提交完成后由业务代码把状态设为 `false`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示对话框。 | `boolean` | 必填 |
| `title` | 标题。 | `string` | 必填 |
| `description` | 标题下的说明文字。 | `string` | `""` |
| `width` | 内容宽度档位。 | `"small" \| "default" \| "wide"` | `default` |
| `closable` | 是否显示右上角关闭按钮。 | `boolean` | `true` |
| `closeOnOverlay` | 点击遮罩是否关闭。 | `boolean` | `true` |
| `closeOnPressEscape` | 按 Escape 是否关闭。 | `boolean` | `true` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 对话框主体内容。 |
| `icon` | 标题左侧图标或状态标记。 |
| `footer` | 底部操作区域；未提供时不渲染 footer。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 打开状态变化。 |
| `close` | — | 通过关闭按钮、遮罩或 Escape 关闭后触发。 |
