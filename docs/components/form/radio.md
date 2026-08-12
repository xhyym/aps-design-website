---
title: 单选框
component: AppRadio
category: form
source: packages/ui/src/components/form/AppRadio.vue
---

# 单选框（AppRadio）

`AppRadio` 用于一组选项中的唯一选择。它支持常规、按钮和卡片三种呈现方式；数据驱动的一组单选项使用 `AppRadioGroup`。

## 1. 用处

- 在学习方式、套餐、支付渠道等互斥选项中选择一项。
- 通过 `appearance="card"` 呈现带标题和说明的方案选择。
- 使用相同的 `name` 保留原生单选组语义。

选项数量多、需要搜索时使用 `AppSelect`；仅切换内容视图时使用 `AppSegmented`。

## 2. 代码演示

### 2.1 基础单选组

```vue demo:radio-basic title="基础单选"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const learningMode = ref("live");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="learningMode" name="learning-mode" value="live" label="直播授课" />
    <AppRadio v-model="learningMode" name="learning-mode" value="recorded" label="录播学习" />
  </div>
</template>

<style scoped>
.radio-demo-list {
  display: grid;
  gap: 12px;
}
</style>
```

同一组 `AppRadio` 共享同一个 `v-model` 与 `name`，每项使用不同的稳定 `value`。

### 2.2 卡片化方案选择

```vue demo:radio-card title="卡片单选"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const plan = ref("team");
</script>

<template>
  <div class="radio-card-list">
    <AppRadio
      v-model="plan"
      value="personal"
      appearance="card"
      label="个人版"
      description="适合独立讲师管理单个课程空间"
    />
    <AppRadio
      v-model="plan"
      value="team"
      appearance="card"
      label="团队版"
      description="支持协作成员、课程分工与统一资产管理"
    />
  </div>
</template>

<style scoped>
.radio-card-list {
  display: grid;
  gap: 10px;
  width: min(100%, 420px);
}
</style>
```

卡片单选适合选项本身需要解释时使用；简单的两三项切换不应为了视觉效果强行使用卡片。

### 2.3 多档尺寸

```vue demo:radio-sizes title="尺寸"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const mode = ref("live");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="mode" name="mode" value="live" size="small" label="直播" />
    <AppRadio v-model="mode" name="mode" value="recorded" size="default" label="录播" />
    <AppRadio v-model="mode" name="mode" value="mixed" size="large" label="混合" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; }
</style>
```

### 2.4 禁用状态

```vue demo:radio-disabled title="禁用"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const plan = ref("free");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="plan" name="plan" value="free" label="免费版" />
    <AppRadio v-model="plan" name="plan" value="team" disabled label="团队版（暂未开放）" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; }
</style>
```

### 2.5 按钮样式

```vue demo:radio-button title="按钮单选"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const layout = ref("list");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="layout" name="layout" value="list" appearance="button" label="列表" />
    <AppRadio v-model="layout" name="layout" value="grid" appearance="button" label="网格" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: flex; gap: 10px; }
</style>
```

### 2.6 带说明文字

```vue demo:radio-description title="补充说明"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const channel = ref("wechat");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="channel" name="channel" value="wechat" label="微信" description="扫码即可支付" />
    <AppRadio v-model="channel" name="channel" value="alipay" label="支付宝" description="跳转收银台支付" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; }
</style>
```

### 2.7 自定义文案插槽

```vue demo:radio-slot title="默认插槽"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const type = ref("person");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="type" name="type" value="person">
      个人<strong>认证</strong>
    </AppRadio>
    <AppRadio v-model="type" name="type" value="org">
      机构<strong>认证</strong>
    </AppRadio>
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; }
</style>
```

### 2.8 纵向多选列表

```vue demo:radio-list title="纵向排列"
<script setup lang="ts">
import { ref } from "vue";
import { AppRadio } from "aps-design-pro";
import "aps-design-pro/style.css";

const level = ref("l1");
</script>

<template>
  <div class="radio-demo-list">
    <AppRadio v-model="level" name="level" value="l1" label="入门" />
    <AppRadio v-model="level" name="level" value="l2" label="进阶" />
    <AppRadio v-model="level" name="level" value="l3" label="高级" />
    <AppRadio v-model="level" name="level" value="l4" label="专家" />
  </div>
</template>

<style scoped>
.radio-demo-list { display: grid; gap: 10px; width: min(100%, 360px); }
</style>
```

## 3. API 使用方式

每个单选项都传入同一个状态变量，并以 `value` 标识当前项。`invalid`、必填校验和错误文案应由外层 `AppFormField` 或业务表单负责。

```vue
<AppRadio v-model="form.plan" name="plan" value="free" label="免费版" />
<AppRadio v-model="form.plan" name="plan" value="team" label="团队版" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值，配合 `v-model` 使用。 | `string \| number` | — |
| `value` | 当前单选项的唯一值。 | `string \| number` | — |
| `id` / `name` | 原生输入框标识与分组名称。 | `string` | `undefined` / `""` |
| `label` / `description` | 主文案与补充说明。 | `string` | `""` |
| `appearance` | 外观类型。 | `"default" \| "button" \| "card"` | `"default"` |
| `size` / `disabled` | 控件尺寸与禁用状态。 | `ControlSize \| boolean` | 继承全局配置 |
| `ariaLabel` / `describedBy` / `tabindex` | 辅助名称、说明 ID 与焦点顺序。 | `string \| number` | `undefined` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 自定义主文案；未提供时使用 `label`。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` / `change` | `(value: RadioValue)` | 当前项被选择后触发。 |
