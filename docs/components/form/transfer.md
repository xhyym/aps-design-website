---
title: 穿梭框
component: AppTransfer
category: form
source: packages/ui/src/components/form/AppTransfer.vue
---

# 穿梭框（AppTransfer）

`AppTransfer` 在来源和目标两列之间移动大量可选项，适合成员分配、权限授权和内容可见范围维护。

## 1. 用处

- 将“所有可选项”和“已选择项”同时呈现，降低多选框在大量数据下的认知成本。
- 目标值只保存选项 `key`，可直接作为接口字段提交。
- 支持两侧筛选、批量全选、禁用选项以及目标列表排序策略。

## 2. 代码演示

### 2.1 转移课程可见范围

```vue demo:form-transfer-basic title="基础穿梭"
<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref(["course-2"]);
const options = [
  { key: "course-1", label: "Vue 3 实战", description: "前端课程" },
  { key: "course-2", label: "TypeScript 工程化", description: "前端课程" },
  { key: "course-3", label: "Node.js 服务端", description: "后端课程" },
];
</script>

<template>
  <AppTransfer v-model="values" :options="options" aria-label="可见课程" />
</template>
```

### 2.2 带筛选的成员分配

```vue demo:form-transfer-filter title="筛选与排序"
<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { key: "01", label: "林晨", description: "产品设计" },
  { key: "02", label: "周宁", description: "前端研发" },
  { key: "03", label: "陈果", description: "服务端研发" },
  { key: "04", label: "周远", description: "前端研发", disabled: true },
];
</script>

<template>
  <AppTransfer v-model="values" :options="options" filterable target-order="push" :titles="['候选成员', '已加入项目']" aria-label="项目成员" />
</template>
```

### 2.3 自定义左右面板标题

```vue demo:form-transfer-titles title="自定义标题"
<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["course-2"]);
const options = [
  { key: "course-1", label: "Vue 3 实战", description: "前端课程" },
  { key: "course-2", label: "TypeScript 工程化", description: "前端课程" },
  { key: "course-3", label: "Node.js 服务端", description: "后端课程" },
];
</script>

<template><AppTransfer v-model="values" :options="options" :titles="['全部课程', '已选课程']" aria-label="课程分配" /></template>
```

### 2.4 候选成员筛选

```vue demo:form-transfer-search title="可搜索"
<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { key: "u01", label: "林晨", description: "产品设计" },
  { key: "u02", label: "周宁", description: "前端研发" },
  { key: "u03", label: "陈果", description: "服务端研发" },
  { key: "u04", label: "赵敏", description: "测试" },
  { key: "u05", label: "孙浩", description: "运维" },
  { key: "u06", label: "李雷", description: "数据" },
];
</script>

<template><AppTransfer v-model="values" :options="options" filterable :titles="['候选成员', '已加入项目']" aria-label="项目成员" /></template>
```

### 2.5 目标列表排序策略

```vue demo:form-transfer-order title="目标排序"
<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["m1", "m3"]);
const options = [
  { key: "m1", label: "模块 A", description: "基础" },
  { key: "m2", label: "模块 B", description: "进阶" },
  { key: "m3", label: "模块 C", description: "高级" },
];
</script>

<template><AppTransfer v-model="values" :options="options" target-order="unshift" :titles="['可选模块', '已启用模块']" aria-label="模块顺序" /></template>
```

### 2.6 禁用状态与禁用项

```vue demo:form-transfer-disabled title="禁用状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["course-2"]);
const options = [
  { key: "course-1", label: "Vue 3 实战", description: "前端课程" },
  { key: "course-2", label: "TypeScript 工程化", description: "前端课程" },
  { key: "course-3", label: "Node.js 服务端", description: "后端课程", disabled: true },
];
</script>

<template>
  <div class="demo-stack">
    <AppTransfer v-model="values" :options="options" disabled aria-label="禁用穿梭" />
    <AppTransfer v-model="values" :options="options" :titles="['课程', '已选课程']" aria-label="含禁用项" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 24px; }
</style>
```

### 2.7 丰富候选项与说明

```vue demo:form-transfer-many title="多候选项"
<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["g1", "g3"]);
const options = [
  { key: "g1", label: "数据看板", description: "实时指标" },
  { key: "g2", label: "用户画像", description: "分群分析" },
  { key: "g3", label: "行为漏斗", description: "转化分析" },
  { key: "g4", label: "留存报表", description: "周期留存" },
  { key: "g5", label: "异常监控", description: "告警规则" },
];
</script>

<template><AppTransfer v-model="values" :options="options" filterable :titles="['全部功能', '已开通功能']" aria-label="功能授权" /></template>
```

### 2.8 自定义筛选函数

```vue demo:form-transfer-custom-filter title="自定义筛选"
<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer, type TransferOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options: TransferOption[] = [
  { key: "p1", label: "北京", description: "华北" },
  { key: "p2", label: "上海", description: "华东" },
  { key: "p3", label: "广州", description: "华南" },
  { key: "p4", label: "成都", description: "西南" },
];

function filterByRegion(keyword: string, option: TransferOption): boolean {
  return option.label.includes(keyword) || (option.description ?? "").includes(keyword);
}
</script>

<template><AppTransfer v-model="values" :options="options" filterable :filter-method="filterByRegion" :titles="['城市', '已选城市']" aria-label="城市筛选" /></template>
```

## 3. API 使用方式

```vue
<AppTransfer
  v-model="form.memberIds"
  :options="memberOptions"
  filterable
  target-order="original"
/>
```

`targetOrder="original"` 按源数据排序；`push` 保留添加顺序；`unshift` 将新项置于目标列表开头。业务层应保证所有 `key` 唯一。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 目标列表的选项 `key` 数组。 | `string[]` | — |
| `options` | 穿梭候选项，包含 `key`、`label`、可选说明和禁用状态。 | `TransferOption[]` | — |
| `titles` | 左右面板标题。 | `[string, string]` | `["可选项", "已选项"]` |
| `filterable` | 是否在两侧显示关键词筛选。 | `boolean` | `true` |
| `targetOrder` | 目标列表排序策略。 | `"original" \| "push" \| "unshift"` | `"original"` |
| `filterMethod` | 自定义筛选函数。 | `(keyword, option) => boolean` | `undefined` |
| `disabled` / `ariaLabel` | 整体禁用状态和无障碍名称。 | `boolean` / `string` | `false` / `"穿梭选择"` |

### 4.2 Slots

该组件没有插槽。候选项可通过 `label` 和 `description` 传递必要业务信息。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: string[])` | 目标集合发生变化。 |
