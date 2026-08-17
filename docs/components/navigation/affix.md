---
title: 固钉
component: AppAffix
category: navigation
source: packages/ui/src/components/navigation/AppAffix.vue
---

# 固钉（AppAffix）

`AppAffix` 将筛选、提交等关键操作固定在滚动容器的顶部或底部，并在固定状态变化时通知页面。

## 1. 用处

- 在长列表上方固定查询、批量操作或保存操作。
- 在长表单底部保留提交入口，减少用户返回底部的成本。
- 只负责定位，不替代页面的滚动区域与操作权限控制。

## 2. 代码演示

### 2.1 顶部固钉操作条

```vue demo:affix-basic title="顶部固钉操作条"
<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="page-flow">
    <p>向下滚动文档区域，操作条会在距离顶部 12px 时保持可见。</p>
    <AppAffix :offset="12">
      <div class="action-bar"><strong>订单操作</strong><AppButton size="small">新建订单</AppButton></div>
    </AppAffix>
    <p v-for="index in 10" :key="index">订单列表的第 {{ index }} 段辅助说明。</p>
  </div>
</template>

<style scoped>
.page-flow { color: var(--aps-muted); line-height: 1.7; }
.action-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
```

顶部固钉常用于不会随内容变化而消失的操作。设置 `offset` 时应同时考虑应用顶部导航的实际高度。

### 2.2 底部提交区

```vue demo:affix-bottom title="底部提交区"
<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="bottom-preview">
    <p v-for="index in 8" :key="index">填写信息 {{ index }}：底部操作区始终留在可触达的位置。</p>
    <AppAffix position="bottom" :offset="8">
      <div class="submit-bar"><span>已保存草稿</span><AppButton size="small">提交审批</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.bottom-preview { height: 220px; overflow: auto; padding: 0 12px; border: 1px solid var(--aps-line-soft); border-radius: 12px; color: var(--aps-muted); line-height: 1.8; }
.submit-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
```

底部固钉适合可延后提交的任务。若保存请求尚未完成，可以结合按钮 `loading` 与 `disabled` 阻止重复提交。


### 2.3 自定义顶部偏移

```vue demo:nav-affix-offset title="自定义顶部偏移"
<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 12" :key="i">长内容段落 {{ i }}，向下滚动后操作条在距离顶部 120px 处固定。</p>
    <AppAffix :offset="120">
      <div class="bar"><strong>筛选区</strong><AppButton size="small">应用</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
```

### 2.4 固定到指定滚动容器

```vue demo:nav-affix-target title="固定到指定滚动容器"
<script setup lang="ts">
import { ref } from "vue";
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const box = ref<HTMLElement | null>(null);
</script>

<template>
  <div ref="box" class="scroll-box">
    <p v-for="i in 12" :key="i">容器内的第 {{ i }} 段内容。</p>
    <AppAffix :target="box" :offset="8">
      <div class="bar"><AppButton size="small">容器内操作</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.scroll-box { height: 220px; overflow: auto; border: 1px solid var(--aps-line-soft); border-radius: 10px; padding: 12px; color: var(--aps-muted); }
.bar { padding: 8px; background: var(--aps-surface); border-radius: 8px; }
</style>
```

### 2.5 禁用固钉

```vue demo:nav-affix-disabled title="禁用固钉"
<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 10" :key="i">禁用后操作条随文档正常流动，不再吸顶。</p>
    <AppAffix :disabled="true">
      <div class="bar"><AppButton size="small">已禁用吸顶</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { padding: 10px 12px; border: 1px dashed var(--aps-line); border-radius: 10px; color: var(--aps-ink); }
</style>
```

### 2.6 自定义层级

```vue demo:nav-affix-zindex title="自定义层级"
<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 10" :key="i">多层浮层叠加时，用 zIndex 控制固钉的覆盖关系。</p>
    <AppAffix :offset="12" :z-index="100">
      <div class="bar"><strong>高优先级操作</strong><AppButton size="small">提交</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
```

### 2.7 自定义可访问名称

```vue demo:nav-affix-label title="自定义可访问名称"
<script setup lang="ts">
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="flow">
    <p v-for="i in 8" :key="i">为辅助技术提供更具语义的区域名称。</p>
    <AppAffix :offset="12" aria-label="订单操作栏">
      <div class="bar"><AppButton size="small">新建</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
```

### 2.8 监听固定状态

```vue demo:nav-affix-stuck title="监听固定状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppAffix, AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const stuck = ref(false);
</script>

<template>
  <div class="flow">
    <p v-for="i in 10" :key="i">滚动后状态会从「释放」切换为「已固定」。</p>
    <AppAffix :offset="12" @stuck-change="(s: boolean) => (stuck = s)">
      <div class="bar"><span>状态：{{ stuck ? "已固定" : "已释放" }}</span><AppButton size="small">保存</AppButton></div>
    </AppAffix>
  </div>
</template>

<style scoped>
.flow { color: var(--aps-muted); line-height: 1.8; }
.bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; background: var(--aps-surface); color: var(--aps-ink); }
</style>
```
## 3. API 使用方式

```vue
<AppAffix position="top" :offset="56" :target="listElement" @stuck-change="isToolbarStuck = $event">
  <OrderToolbar />
</AppAffix>
```

`target` 与页面真实的滚动元素保持一致。`stuck-change` 可用于调整操作条的阴影、面包屑状态等展示细节，不应用它作为业务提交状态。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `offset` | 距离容器顶部或底部的偏移量；负数按 `0` 处理。 | `number` | `0` |
| `position` | 固定位置。 | `"top" \| "bottom"` | `"top"` |
| `target` | 监听的滚动容器；不传则监听页面滚动。 | `HTMLElement \| null` | `null` |
| `disabled` | 是否禁用固钉并恢复普通文档流。 | `boolean` | `false` |
| `zIndex` | 固钉内容的层级。 | `number` | `20` |
| `ariaLabel` | 固钉区域的可访问名称。 | `string` | `"吸顶内容"` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 需要固定的操作条、筛选区或其他内容。 |

### 4.3 Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `stuck-change` | 元素进入或离开固定状态时触发。 | `stuck: boolean` |
