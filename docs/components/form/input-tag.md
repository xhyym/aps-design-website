---
title: 标签输入
component: AppInputTag
category: form
source: packages/ui/src/components/form/AppInputTag.vue
---

# 标签输入（AppInputTag）

`AppInputTag` 用可编辑标签集合承接自由输入，支持回车、分隔符和粘贴批量创建，并自动忽略重复值。

## 1. 用处

- 用于技能、关键词、专题、收件人等非预定义的多值文本录入。
- 自动识别中英文逗号、分号和换行，适合从表格中粘贴多个标签。
- 通过 `max` 和 `maxLength` 保持输入集合在业务允许范围内。

## 2. 代码演示

### 2.1 基础标签输入

```vue demo:form-input-tag-basic title="创建与删除标签"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref(["Vue", "TypeScript"]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" placeholder="输入技能后按回车" aria-label="技能标签" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.2 限制数量与失焦创建

```vue demo:form-input-tag-limit title="输入边界"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>([]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" :max="3" :max-length="12" add-on-blur placeholder="最多添加 3 个专题" aria-label="专题标签" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

### 2.3 不同尺寸

```vue demo:input-tag-sizes title="尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref<string[]>(["Vue"]);
const medium = ref<string[]>(["Vue"]);
const large = ref<string[]>(["Vue"]);
</script>

<template>
  <div class="demo-stack">
    <AppInputTag v-model="small" size="small" placeholder="size=small" aria-label="小尺寸标签" />
    <AppInputTag v-model="medium" placeholder="size=default" aria-label="默认尺寸标签" />
    <AppInputTag v-model="large" size="large" placeholder="size=large" aria-label="大尺寸标签" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 420px);
}
</style>
```

`size` 改变输入框高度与标签间距，与表单内其他控件保持一致。

### 2.4 禁用与只读

```vue demo:input-tag-disabled title="禁用与只读"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const disabledTags = ref<string[]>(["Vue", "TypeScript"]);
const readonlyTags = ref<string[]>(["React", "Svelte"]);
</script>

<template>
  <div class="demo-stack">
    <AppInputTag v-model="disabledTags" disabled aria-label="禁用标签" />
    <AppInputTag v-model="readonlyTags" readonly aria-label="只读标签" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 420px);
}
</style>
```

### 2.5 失焦创建

```vue demo:input-tag-addonblur title="失焦创建"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>([]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" add-on-blur placeholder="输入后失焦也会创建标签" aria-label="失焦创建标签" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

`AddOnBlur` 让用户在输入框外点击时也能提交当前输入，适合需要离开即保存草稿的场景。

### 2.6 错误状态

```vue demo:input-tag-invalid title="错误状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>(["Vue"]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" invalid described-by="tags-error" aria-label="错误标签" />
    <p id="tags-error" class="demo-error">标签数量不符合要求。</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
.demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
```

### 2.7 限制单个长度

```vue demo:input-tag-maxlength title="限制长度"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>([]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" :max-length="6" placeholder="单个标签最多 6 个字符" aria-label="限制标签长度" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
```

`maxLength` 限制单个标签的字符数，超过部分在创建时被截断。

### 2.8 创建与删除事件

```vue demo:input-tag-events title="标签事件"
<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>([]);
const status = ref("等待操作");

function onCreate(value: string): void {
  status.value = `创建了标签：${value}`;
}
function onRemove(value: string): void {
  status.value = `移除了标签：${value}`;
}
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" @create="onCreate" @remove="onRemove" placeholder="创建或删除标签看状态" aria-label="标签事件" />
    <span class="demo-status">{{ status }}</span>
  </div>
</template>

<style scoped>
.demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 420px);
}
.demo-status {
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
```

`create` 与 `remove` 会返回被操作的具体标签文本，可用于埋点或联动其他字段。

## 3. API 使用方式

```vue
<AppInputTag
  v-model="form.keywords"
  :max="8"
  :max-length="24"
  @create="trackKeyword"
  @exceed="notifyTagLimit"
/>
```

标签值经过 trim 和去重后才会写入 `v-model`。若业务要保留标签 ID 与展示名的映射，请使用多选 `AppSelect`，不要将对象序列化成字符串标签。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前标签集合。 | `string[]` | — |
| `id` / `name` / `placeholder` | 输入元素标识、字段名和占位文本。 | `string` | `undefined` / `"输入后按回车创建标签"` |
| `disabled` / `readonly` / `invalid` | 状态控制。 | `boolean` | `false` |
| `max` / `maxLength` | 最多标签数和单个标签最大字符数。 | `number` | `undefined` |
| `addOnBlur` | 失焦时是否提交当前输入。 | `boolean` | `false` |
| `size` | 控件尺寸。 | `ControlSize` | `"default"` |
| `ariaLabel` / `describedBy` | 无障碍名称和说明元素 ID。 | `string` | `"标签输入"` / `""` |

### 4.2 Slots

该组件没有插槽。标签关闭、键盘删除和无障碍名称由组件统一处理。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string[])` | 标签集合变化。 |
| `create` / `remove` | `(value: string)` | 新增或删除单个标签。 |
| `exceed` | `(max: number)` | 新增时达到最大标签数量。 |
