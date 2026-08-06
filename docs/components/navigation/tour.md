---
title: 功能引导
component: AppTour
category: navigation
source: packages/ui/src/components/navigation/AppTour.vue
---

# 功能引导（AppTour）

`AppTour` 以遮罩高亮和分步浮层介绍页面功能，可定位元素并支持键盘前后切换、跳过和完成。

## 1. 用处

- 新功能首次出现时，引导用户理解关键入口的位置和用途。
- 将引导进度存到业务侧，在用户完成或跳过后不再重复展示。
- 对动态目标缺失的情况安全降级为居中提示，不会中断页面。

## 2. 代码演示

### 2.1 定位已有入口

```vue demo:tour-basic title="定位已有入口"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [{ key: "search", title: "从这里开始搜索", description: "快速查找订单、客户和页面。", target: "#tour-search", placement: "bottom" as const }, { key: "create", title: "新建业务", description: "在这里创建订单或客户。", target: "#tour-create", placement: "bottom" as const }];
</script>

<template>
  <div class="tour-actions"><AppButton id="tour-search" variant="secondary">搜索</AppButton><AppButton id="tour-create">新建订单</AppButton><AppButton variant="text" @click="visible = true">开始引导</AppButton></div>
  <AppTour v-model="visible" :steps="steps" />
</template>

<style scoped>
.tour-actions { display: flex; flex-wrap: wrap; gap: 8px; }
</style>
```

`target` 接受 CSS 选择器，推荐使用稳定的 `id`。打开后组件会自动尝试将目标滚动到可见区域。

### 2.2 受控步骤和缺失目标

```vue demo:tour-controlled title="受控步骤和缺失目标"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const stepIndex = ref(0);
const steps = [{ key: "panel", title: "查看筛选条件", description: "先缩小数据范围。", target: "#tour-filter", placement: "right" as const }, { key: "missing", title: "动态目标", description: "目标不存在时会自动显示居中提示。", target: "#not-mounted-yet" }];
</script>

<template>
  <AppButton id="tour-filter" variant="secondary">筛选条件</AppButton>
  <AppButton variant="text" @click="visible = true">启动受控引导</AppButton>
  <AppTour v-model="visible" v-model:step-index="stepIndex" :steps="steps" :mask-closable="true" @finish="stepIndex = 0" />
</template>
```

传入 `stepIndex` 后由父级完全管理当前进度；动态目标尚未挂载时，用户仍能完成或跳过流程。

## 3. API 使用方式

```vue
<AppTour v-model="isTourVisible" :steps="tourSteps" @finish="markTourCompleted" @skip="markTourSkipped" />
```

不要用引导组件做强制授权或安全确认。`finish` 与 `skip` 只表示用户结束了展示，应用应在服务端或本地偏好中自行记录结果。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示引导。 | `boolean` | — |
| `steps` | 引导步骤，支持 `key`、`title`、`description`、`target`、`placement`、`padding`、`disabled`。 | `TourStep[]` | — |
| `stepIndex` | 受控的当前步骤索引。 | `number` | `undefined` |
| `closeOnEsc` | 是否允许按 `Esc` 跳过。 | `boolean` | `true` |
| `maskClosable` | 是否允许点击遮罩跳过。 | `boolean` | `false` |
| `offset` | 目标高亮默认外扩距离。 | `number` | `12` |
| `nextText` | 下一步文案。 | `string` | `"下一步"` |
| `previousText` | 上一步文案。 | `string` | `"上一步"` |
| `skipText` | 跳过文案。 | `string` | `"跳过引导"` |
| `finishText` | 完成文案。 | `string` | `"完成"` |
| `ariaLabel` | 引导对话框的可访问名称。 | `string` | `"功能引导"` |

### 4.2 Slots

`AppTour` 不提供插槽，步骤内容由 `steps` 配置。

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 打开或关闭引导时触发。 | `value: boolean` |
| `update:stepIndex` | 当前步骤变化时触发。 | `index: number` |
| `change` | 成功进入新的步骤时触发。 | `step: TourStep, index: number` |
| `finish` | 最后一步完成时触发。 | — |
| `skip` | 点击跳过、关闭或允许的遮罩关闭时触发。 | — |
