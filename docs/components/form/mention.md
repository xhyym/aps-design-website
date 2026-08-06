---
title: 提及输入
component: AppMention
category: form
source: packages/ui/src/components/form/AppMention.vue
---

# 提及输入（AppMention）

`AppMention` 在多行文本中识别触发字符，并让用户从受控候选项中插入成员、专题等引用内容。

## 1. 用处

- 用于评论、任务说明、公告等需要提及成员或关联对象的文本编辑。
- 支持 `@`、`#` 等单字符触发器，并在输入后按关键词过滤候选项。
- 组件保留编辑后的纯文本；若需要持久化提及对象 ID，请在 `select` 事件中同步维护结构化数据。

## 2. 代码演示

### 2.1 @ 提及成员

```vue demo:form-mention-basic title="成员提及"
<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("请 @林晨 跟进课程封面");
const options = [
  { key: "lin", label: "林晨", value: "林晨", description: "产品设计" },
  { key: "zhou", label: "周宁", value: "周宁", description: "前端研发" },
  { key: "chen", label: "陈果", value: "陈果", description: "服务端研发" },
];
</script>

<template>
  <div class="demo-field">
    <AppMention v-model="content" :options="options" placeholder="输入评论，使用 @ 提及成员" aria-label="评论内容" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 520px); }
</style>
```

### 2.2 # 关联专题

```vue demo:form-mention-custom-trigger title="自定义触发符"
<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("关联 #课程运营");
const options = [
  { key: "operation", label: "课程运营", value: "课程运营" },
  { key: "design", label: "产品设计", value: "产品设计" },
  { key: "research", label: "用户研究", value: "用户研究" },
];
</script>

<template>
  <div class="demo-field">
    <AppMention v-model="content" :options="options" trigger="#" :rows="3" placeholder="输入 # 关联专题" aria-label="专题说明" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 520px); }
</style>
```

## 3. API 使用方式

```vue
<AppMention v-model="form.comment" :options="memberOptions" @select="recordMention" @query="searchMembers" />
```

候选项的 `key` 应是稳定主键，`value` 未设置时会使用 `label` 插入文本。通过组件引用可调用 `focus()` 和 `close()`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` / `options` | 当前文本与提及候选项。 | `string` / `MentionOption[]` | — |
| `trigger` | 提及触发字符。 | `string` | `"@"` |
| `id` / `name` / `size` / `rows` / `placeholder` | 字段标识、尺寸、行数和占位文本。 | `string` / `ControlSize` / `number` | — / `"default"` / `4` |
| `disabled` / `readonly` / `invalid` / `maxLength` | 编辑状态与最大文本长度。 | `boolean` / `number` | `false` / `undefined` |
| `emptyText` | 候选项为空时的文案。 | `string` | `"没有匹配的成员"` |
| `ariaLabel` / `describedBy` | 无障碍名称和说明元素 ID。 | `string` | `"提及输入"` / `undefined` |

### 4.2 Slots

该组件没有插槽。候选项标签及描述通过 `MentionOption` 提供。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string)` | 文本变化。 |
| `query` | `(keyword: string)` | 检测到触发符并更新关键词。 |
| `select` | `(option: MentionOption)` | 选择候选项后触发。 |
