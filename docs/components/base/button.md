---
title: 按钮
component: AppButton
category: base
source: packages/ui/src/components/base/AppButton.vue
---

# 按钮（AppButton）

`AppButton` 负责页面中单个明确的动作，例如保存、提交、创建、确认、取消。组件不发起请求——加载态、禁用态全部由页面控制。

## 1. 用处

- 明确的页面动作使用 `AppButton`，用 `variant` 表达主次层级。
- 请求期间绑定 `loading`，组件显示加载图标并自动禁用，避免重复提交。
- 破坏性动作使用 `danger`，点击后由业务层弹出二次确认。
- 空间有限又想要图标时，用 `AppIconButton`。

## 2. 代码演示

### 2.1 基本用法

默认 `variant` 为 `primary`，承担页面主任务；同一操作区通常只保留一个主按钮，其余用 `secondary`、`ghost`、`text` 弱化。

```vue demo:button-basic title="基本用法"
<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

/** 示例仅反馈操作已触发；实际保存逻辑由业务页面注入。 */
function saveCourseDraft(): void {
  console.info("已触发保存课程草稿操作");
}
</script>

<template>
  <div class="button-demo-actions">
    <AppButton leading-icon="plus" @click="saveCourseDraft">新建课程</AppButton>
    <AppButton variant="secondary" @click="saveCourseDraft">保存草稿</AppButton>
  </div>
</template>

<style scoped>
.button-demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
```

### 2.2 加载状态

按钮不会自行执行请求；请求期间绑定 `loading`，组件显示加载图标并自动禁用原生按钮，避免重复提交。

```vue demo:button-loading title="加载状态"
<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const isSaving = ref(false);
let savingTimerId: number | undefined;

/** 模拟提交过程，展示组件如何在请求期间自动禁用重复操作。 */
function submitCourse(): void {
  if (isSaving.value) return;
  isSaving.value = true;
  savingTimerId = window.setTimeout(() => {
    isSaving.value = false;
  }, 1100);
}

onBeforeUnmount(() => window.clearTimeout(savingTimerId));
</script>

<template>
  <AppButton type="button" :loading="isSaving" @click="submitCourse">
    {{ isSaving ? "正在保存" : "保存配置" }}
  </AppButton>
</template>
```

示例使用短计时模拟异步状态；业务中将计时逻辑替换为真实请求即可。`type` 和 `nativeType` 都映射到原生按钮类型；同时传入时 `nativeType` 优先。表单提交建议使用真实的 `<form>` 与 `type="submit"`，不要用 `@click` 模拟提交语义。

### 2.3 变体层级

`variant` 表达操作的主次：主按钮承担核心任务，次要、幽灵、文字逐级弱化，危险按钮用于破坏性操作。

```vue demo:button-variants title="变体层级"
<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-variants">
    <AppButton variant="primary">主要操作</AppButton>
    <AppButton variant="secondary">次要操作</AppButton>
    <AppButton variant="ghost">幽灵操作</AppButton>
    <AppButton variant="danger">危险操作</AppButton>
    <AppButton variant="text">文字操作</AppButton>
  </div>
</template>

<style scoped>
.button-demo-variants {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
```

同一操作区通常只保留一个主按钮，避免视觉权重分散。

### 2.4 尺寸

`size` 控制高度与内边距；未传时继承最近的 `AppConfigProvider`，保证整页控件一致。

```vue demo:button-sizes title="尺寸"
<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-sizes">
    <AppButton size="small">小尺寸</AppButton>
    <AppButton size="default">默认尺寸</AppButton>
    <AppButton size="large">大尺寸</AppButton>
  </div>
</template>

<style scoped>
.button-demo-sizes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
</style>
```

### 2.5 图标前后缀

`leadingIcon` 与 `trailingIcon` 接收内置图标名，用于强化操作语义；加载时前导图标会被加载图标替代。

```vue demo:button-icons title="图标前后缀"
<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-icons">
    <AppButton leading-icon="plus">新建</AppButton>
    <AppButton variant="secondary" trailing-icon="arrow-right">下一步</AppButton>
    <AppButton variant="ghost" leading-icon="refresh">刷新</AppButton>
  </div>
</template>

<style scoped>
.button-demo-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
```

### 2.6 形状与块级

`block` 撑满父容器，`plain` 使用浅色填充，`round` 为胶囊圆角，`circle` 为等宽等高的圆形按钮（圆形按钮应提供 `ariaLabel`）。

```vue demo:button-shapes title="形状与块级"
<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-shapes">
    <AppButton block>撑满宽度</AppButton>
    <AppButton plain>浅色填充</AppButton>
    <AppButton round>胶囊圆角</AppButton>
    <AppButton circle aria-label="设置" leading-icon="settings" />
  </div>
</template>

<style scoped>
.button-demo-shapes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
</style>
```

### 2.7 禁用状态

`disabled` 由 `AppConfigProvider` 全局继承，也可在单个按钮上覆盖；禁用态会阻止点击与键盘触发。

```vue demo:button-disabled title="禁用状态"
<script setup lang="ts">
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="button-demo-disabled">
    <AppButton disabled>主按钮禁用</AppButton>
    <AppButton variant="secondary" disabled>次按钮禁用</AppButton>
    <AppButton variant="ghost" disabled>幽灵禁用</AppButton>
  </div>
</template>

<style scoped>
.button-demo-disabled {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
```

### 2.8 危险操作

破坏性动作使用 `danger`，并在点击后由业务层弹出二次确认，组件本身不内置确认弹窗。

```vue demo:button-danger title="危险操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const removed = ref(false);
function removeResource(): void {
  removed.value = true;
}
</script>

<template>
  <div class="button-demo-danger">
    <AppButton variant="danger" @click="removeResource">删除课程</AppButton>
    <span v-if="removed" class="button-demo-danger__hint">已触发删除，实际需业务层二次确认</span>
  </div>
</template>

<style scoped>
.button-demo-danger {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.button-demo-danger__hint {
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
```

## 3. API 使用方式

按钮的业务状态由父级页面维护：请求开始设置 `loading`，结束恢复；破坏性动作使用 `danger` 并由业务层确认。表单提交优先 `type="submit"`，不要把提交语义藏在点击事件里。

```vue
<form @submit.prevent="submitForm">
  <AppButton type="submit" :loading="isSubmitting">提交审核</AppButton>
  <AppButton type="button" variant="ghost" :disabled="isSubmitting">取消</AppButton>
</form>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `variant` | 视觉层级。`text` 适合行内次级动作，`danger` 用于破坏性操作。 | `"primary" \| "secondary" \| "ghost" \| "danger" \| "text"` | `"primary"` |
| `size` | 控件尺寸；未传时继承最近的 `AppConfigProvider`。 | `"small" \| "default" \| "large"` | 继承全局配置 |
| `type` | 原生按钮类型。 | `"button" \| "submit" \| "reset"` | `"button"` |
| `nativeType` | 原生按钮类型的兼容字段，优先级高于 `type`。 | `"button" \| "submit" \| "reset"` | `undefined` |
| `disabled` | 是否禁用；未传时继承全局配置。 | `boolean` | 继承全局配置 |
| `loading` | 是否显示加载态；加载时自动禁用。 | `boolean` | `false` |
| `block` | 是否撑满父容器宽度。 | `boolean` | `false` |
| `plain` | 是否使用浅色填充样式。 | `boolean` | `false` |
| `round` | 是否使用胶囊圆角。 | `boolean` | `false` |
| `circle` | 是否使用等宽等高的圆形按钮。圆形按钮应提供 `ariaLabel`。 | `boolean` | `false` |
| `leadingIcon` | 文本前的内置图标；加载时由加载图标替代。 | `IconName` | `undefined` |
| `trailingIcon` | 文本后的内置图标；加载时不显示。 | `IconName` | `undefined` |
| `autofocus` | 是否在页面加载后获取焦点。 | `boolean` | `false` |
| `ariaLabel` | 覆盖按钮的辅助名称。 | `string` | `""` |

### 4.2 Slots

| 组件 | 插槽 | 说明 |
| --- | --- | --- |
| `AppButton` | `default` | 按钮文本或自定义内容。 |

### 4.3 Events

| 组件 | 事件 | 参数 | 说明 |
| --- | --- | --- | --- |
| `AppButton` | 原生事件 | — | 根节点是原生 `button`，可直接用 `@click`、`@focus`、`@blur` 等，无额外自定义事件。 |
