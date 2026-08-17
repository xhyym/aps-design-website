---
title: 警告提示
component: AppAlert
category: feedback
source: packages/ui/src/components/feedback/AppAlert.vue
---

# 警告提示（AppAlert）

`AppAlert` 用于在当前页面内提示风险、规则变化或需要用户留意的信息，并可提供关闭与后续操作入口。

## 1. 用处

- 在表单、设置页和内容区域附近解释当前操作会带来的影响。
- 用 `tone` 区分普通说明、成功反馈、风险提醒和错误状态。
- 使用 `action` 插槽补充查看详情、前往处理等低成本动作。

不应用它代替需要用户确认的对话框，也不要把每一条表单校验都堆成全局警告。

## 2. 代码演示

### 2.1 基础信息提示

```vue demo:alert-basic title="基础提示"
<script setup lang="ts">
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppAlert title="发布前请检查课程信息" description="课程封面、价格和章节内容将在发布后对外展示。" />
</template>
```

### 2.2 可关闭的提醒与操作入口

```vue demo:alert-action title="关闭与操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(true);
</script>

<template>
  <AppAlert v-if="visible" tone="warning" title="账号安全提醒" closable @close="visible = false">
    检测到新的登录设备，请确认是否为本人操作。
    <template #action><a href="#/guide/introduction">查看登录记录</a></template>
  </AppAlert>
</template>
```


### 2.3 语义色调

```vue demo:alert-tones title="语义色调"
<script setup lang="ts">
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppAlert title="信息提示" description="这是一条普通信息。" tone="info" />
    <AppAlert title="操作成功" description="数据已保存。" tone="success" />
    <AppAlert title="注意" description="配置将在重启后生效。" tone="warning" />
    <AppAlert title="操作失败" description="请稍后重试。" tone="danger" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
```

### 2.4 可关闭

```vue demo:alert-closable title="可关闭"
<script setup lang="ts">
import { ref } from "vue";
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(true);
const log = ref("");
</script>

<template>
  <div>
    <AppAlert v-if="show" title="可关闭提示" description="点击右侧按钮关闭" closable @close="show = false; log = '已关闭'" />
    <p class="hint">{{ log || "提示仍显示中" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.5 深色效果

```vue demo:alert-effect title="深色效果"
<script setup lang="ts">
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppAlert title="深色信息" description="适合深色主题场景。" effect="dark" />
    <AppAlert title="深色警告" description="深色模式下仍有足够对比度。" tone="warning" effect="dark" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
```

### 2.6 居中布局

```vue demo:alert-center title="居中布局"
<script setup lang="ts">
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppAlert title="居中提示" description="内容与图标水平居中展示。" center />
</template>
```

### 2.7 自定义图标

```vue demo:alert-icon title="自定义图标"
<script setup lang="ts">
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppAlert title="维护通知" description="系统将于周六维护" icon="warning" tone="warning" />
</template>
```
## 3. API 使用方式

通过 `title` 与 `description` 提供固定文案；当说明中包含链接或强调内容时，改用默认插槽。关闭行为由业务页面决定是否隐藏组件。

```vue
<AppAlert tone="danger" title="导入失败" closable @close="errorMessage = ''">
  第 8 行手机号格式不正确，请修正后重新上传。
</AppAlert>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `tone` | 提示语义色调。 | `"info" \| "success" \| "warning" \| "danger"` | `"info"` |
| `title` / `description` | 标题与纯文本说明。 | `string` | `""` |
| `closable` / `closeText` | 是否显示关闭入口，以及覆盖关闭入口的文字。 | `boolean \| string` | `false \| ""` |
| `showIcon` / `icon` | 是否显示图标，以及覆盖默认语义图标。 | `boolean \| IconName` | `true \| undefined` |
| `center` | 是否让内容居中对齐。 | `boolean` | `false` |
| `effect` | 视觉效果。 | `"light" \| "dark"` | `"light"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 富文本说明内容，优先于 `description`。 |
| `icon` / `title` | 替换图标或标题区域。 |
| `action` | 放置查看详情、前往处理等扩展动作。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `close` | — | 点击关闭入口时触发。 |
