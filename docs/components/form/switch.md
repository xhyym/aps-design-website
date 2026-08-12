---
title: 开关
component: AppSwitch
category: form
source: packages/ui/src/components/form/AppSwitch.vue
---

# 开关（AppSwitch）

`AppSwitch` 用于即时生效的二元状态切换，例如发布、通知与可见范围。它支持加载态和异步前置校验，避免用户连续点击造成状态错乱。

## 1. 用处

- 切换可立即保存的单一布尔状态。
- 在异步权限验证或保存前使用 `beforeChange` 阻止无效切换。
- 用 `activeText`、`inactiveText` 明确状态含义，而不是只依赖颜色。

需要提交后才生效的设置，优先使用复选框或单选框，并在表单底部提供保存动作。

## 2. 代码演示

### 2.1 带说明的自动发布开关

```vue demo:switch-basic title="基础开关"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const autoPublish = ref(true);
</script>

<template>
  <AppSwitch
    v-model="autoPublish"
    tone="green"
    label="审核通过后自动上架"
    description="关闭后需要手动发布课程"
  />
</template>
```

`tone` 只表示视觉色调，不应替代“开启 / 关闭”等可读文案。

### 2.2 异步前置校验

```vue demo:switch-before-change title="切换前校验"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const publicAccess = ref(false);

function confirmPublicAccess(nextValue: boolean): Promise<boolean> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(nextValue), 700);
  });
}
</script>

<template>
  <AppSwitch
    v-model="publicAccess"
    inline-prompt
    active-text="公开"
    inactive-text="私有"
    label="课程访问范围"
    :before-change="confirmPublicAccess"
  />
</template>
```

`beforeChange` 期间开关会锁定；返回 `false` 时触发 `changeBlocked`，抛出异常时触发 `changeError`。

### 2.3 控件尺寸

`size` 控制开关轨道与滑块大小；未传时继承 `AppConfigProvider`。

```vue demo:switch-sizes title="控件尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref(true);
const defaultSize = ref(true);
const large = ref(true);
</script>

<template>
  <div class="switch-demo-sizes">
    <AppSwitch v-model="small" size="small" label="小尺寸" />
    <AppSwitch v-model="defaultSize" size="default" label="默认尺寸" />
    <AppSwitch v-model="large" size="large" label="大尺寸" />
  </div>
</template>
```

### 2.4 禁用状态

`disabled` 由 `AppConfigProvider` 全局继承，也可在单个开关上覆盖；禁用态阻止一切交互。

```vue demo:switch-disabled title="禁用状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const enabled = ref(true);
const disabledOff = ref(false);
</script>

<template>
  <div class="switch-demo-disabled">
    <AppSwitch v-model="enabled" disabled label="已开启（禁用）" />
    <AppSwitch v-model="disabledOff" disabled label="已关闭（禁用）" />
  </div>
</template>
```

### 2.5 外部加载态

`loading` 由外部在保存请求期间控制，开关会锁定并展示加载指示，避免重复触发。

```vue demo:switch-loading title="外部加载态"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const saving = ref(true);
</script>

<template>
  <AppSwitch v-model="saving" loading label="保存中（外部加载态）" />
</template>
```

### 2.6 开启色调

`tone` 表达开启后的视觉色调，仅作区分；不应替代 `activeText` 等可读文案。

```vue demo:switch-tones title="开启色调"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const blue = ref(true);
const green = ref(true);
const orange = ref(true);
const red = ref(true);
</script>

<template>
  <div class="switch-demo-tones">
    <AppSwitch v-model="blue" tone="blue" label="蓝色" />
    <AppSwitch v-model="green" tone="green" label="绿色" />
    <AppSwitch v-model="orange" tone="orange" label="橙色" />
    <AppSwitch v-model="red" tone="red" label="红色" />
  </div>
</template>
```

### 2.7 轨道内文案

`inlinePrompt` 将 `activeText` 与 `inactiveText` 放入轨道内，适合空间紧凑的状态切换。

```vue demo:switch-inline-text title="轨道内文案"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const access = ref(false);
</script>

<template>
  <AppSwitch
    v-model="access"
    inline-prompt
    active-text="公开"
    inactive-text="私有"
    label="课程访问范围"
  />
</template>
```

### 2.8 扩展内容插槽

`default` 插槽位于文案区之后，适合放置辅助链接或状态说明，不影响开关本身的取值。

```vue demo:switch-extra title="扩展内容插槽"
<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const notify = ref(true);
</script>

<template>
  <AppSwitch v-model="notify" label="课程更新提醒">
    <template #default>
      <a
        class="switch-demo-extra__link"
        href="https://gitee.com/xhyym/aps-design-pro"
        target="_blank"
        rel="noopener noreferrer"
      >查看通知配置</a>
    </template>
  </AppSwitch>
</template>

<style scoped>
.switch-demo-extra__link {
  margin-left: 4px;
  color: var(--aps-blue, #0a6cdf);
  font-size: 13px;
}
</style>
```

## 3. API 使用方式

通过 `v-model` 绑定业务状态。若切换需要请求服务端，可在 `beforeChange` 中完成校验，或由外部 `loading` 控制保存中的状态。

```vue
<AppSwitch
  v-model="settings.allowComment"
  :before-change="confirmCommentPermission"
  :loading="isSaving"
  label="允许学员评论"
  @change="saveSetting"
/>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前开关状态，配合 `v-model` 使用。 | `boolean` | — |
| `label` / `description` | 外部主文案与补充说明。 | `string` | `""` |
| `activeText` / `inactiveText` | 开启与关闭的状态文字。 | `string` | `""` |
| `inlinePrompt` | 是否将状态文字放入开关轨道内。 | `boolean` | `false` |
| `tone` | 开启时的色调。 | `"blue" \| "green" \| "orange" \| "red"` | `"blue"` |
| `loading` | 是否进入外部加载态。 | `boolean` | `false` |
| `beforeChange` | 切换前校验函数，可返回布尔值或 Promise。 | `SwitchBeforeChange` | `undefined` |
| `size` / `disabled` | 控件尺寸与禁用状态。 | `ControlSize \| boolean` | 继承全局配置 |
| `ariaLabel` | 覆盖开关的辅助名称。 | `string` | `""` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 位于文案区之后的扩展内容，适合放辅助链接或状态说明。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: boolean)` | 校验通过并完成切换后触发。 |
| `changeBlocked` | `(nextValue: boolean)` | `beforeChange` 返回 `false` 时触发。 |
| `changeError` | `(message: string)` | 前置校验抛出异常时触发。 |
