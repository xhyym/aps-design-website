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


### 2.3 多步引导

```vue demo:nav-tour-steps title="多步引导"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [
  { key: "s1", title: "创建订单", description: "从顶部入口新建订单", target: "#tour-create", padding: 8 },
  { key: "s2", title: "筛选列表", description: "使用左侧筛选快速定位", target: "#tour-filter", padding: 8 },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <div id="tour-create" class="box">创建订单区域</div>
    <div id="tour-filter" class="box">筛选区域</div>
    <AppTour v-model="visible" :steps="steps" />
  </div>
</template>

<style scoped>
.box { margin-top: 12px; padding: 16px; border: 1px solid var(--aps-line-soft); border-radius: 10px; color: var(--aps-muted); }
</style>
```

### 2.4 不同方向

```vue demo:nav-tour-placement title="不同方向"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [
  { key: "p1", title: "右侧提示", description: "引导框出现在目标右侧", target: "#tour-right" as const, placement: "right" as const },
  { key: "p2", title: "下方提示", description: "引导框出现在目标下方", target: "#tour-bottom" as const, placement: "bottom" as const },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <div id="tour-right" class="box">目标元素 A</div>
    <div id="tour-bottom" class="box">目标元素 B</div>
    <AppTour v-model="visible" :steps="steps" />
  </div>
</template>

<style scoped>
.box { margin-top: 12px; padding: 16px; border: 1px solid var(--aps-line-soft); border-radius: 10px; color: var(--aps-muted); }
</style>
```

### 2.5 自定义文案

```vue demo:nav-tour-text title="自定义文案"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [
  { key: "t1", title: "第一步", description: "自定义按钮文案" },
  { key: "t2", title: "第二步", description: "最后一步显示完成" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <AppTour v-model="visible" :steps="steps" next-text="继续" previous-text="返回" finish-text="我知道了" skip-text="暂不引导" />
  </div>
</template>
```

### 2.6 点击遮罩关闭

```vue demo:nav-tour-mask title="点击遮罩关闭"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const steps = [
  { key: "m1", title: "可跳过", description: "点击遮罩即可跳过引导" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <AppTour v-model="visible" :steps="steps" :mask-closable="true" />
  </div>
</template>
```

### 2.7 受控步骤

```vue demo:nav-tour-step title="受控步骤"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const step = ref(0);
const steps = [
  { key: "c1", title: "章节一", description: "受控步骤索引" },
  { key: "c2", title: "章节二", description: "可回退与前进" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <AppTour v-model="visible" :steps="steps" :step-index="step" @update:step-index="(i: number) => (step = i)" />
  </div>
</template>
```

### 2.8 监听完成

```vue demo:nav-tour-finish title="监听完成"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTour } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const done = ref(false);
const steps = [
  { key: "f1", title: "引导完成", description: "完成后触发回调" },
];
</script>

<template>
  <div>
    <AppButton size="small" @click="visible = true">开始引导</AppButton>
    <AppTour v-model="visible" :steps="steps" @finish="() => (done = true)" />
    <p class="hint">已完成：{{ done ? "是" : "否" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```
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
