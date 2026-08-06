---
title: 按钮
component: AppButton
category: base
source: packages/ui/src/components/base/AppButton.vue
---

# 按钮（AppButton）

`AppButton` 是提交、保存、创建、取消等明确操作的基础入口。它输出原生 `button`，同时统一处理视觉层级、加载态、禁用态与全局尺寸配置。

## 1. 用处

- 用于保存、提交、创建、确认和取消等明确的页面动作。
- 通过 `variant` 表达主次层级，通过 `loading` 和 `disabled` 反馈操作当前是否可用。
- 需要图标但空间有限时使用 `AppIconButton`；需要多个低频动作时使用 `AppButtonMore`。

## 2. 代码演示

### 2.1 用于明确的用户动作

```vue demo:button-basic title="基础操作"
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

默认 `variant` 为 `primary`，适合页面的主任务；同一操作区通常只保留一个主按钮，其余动作使用 `secondary`、`ghost` 或低频的更多菜单。

### 2.2 提交过程由页面控制

按钮不会自行执行请求。业务页面在请求进行时绑定 `loading`，组件会显示加载图标并自动禁用原生按钮，避免重复提交：

```vue demo:button-loading title="加载与防重复提交"
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

## 3. API 使用方式

按钮的业务状态应由父级页面维护：请求开始时设置 `loading`，请求结束后恢复；破坏性动作使用 `danger` 并在点击后由业务层弹出确认。表单提交优先使用 `type="submit"`，不要把提交语义藏在普通点击处理函数中。

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

| 项目 | 说明 |
| --- | --- |
| `default` | 按钮文本或自定义内容。 |

### 4.3 Events

组件根节点是原生 `button`，可直接使用 `@click`、`@focus`、`@blur` 等原生事件；组件没有额外定义自定义事件。
