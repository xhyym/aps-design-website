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
