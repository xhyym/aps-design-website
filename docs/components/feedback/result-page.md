---
title: 页面结果
component: AppResultPage
category: feedback
source: packages/ui/src/components/feedback/AppResultPage.vue
---

# 页面结果（AppResultPage）

`AppResultPage` 是面向整页场景的 `AppResult` 包装组件，适合导入、审批等流程结束后的独立路由。

## 1. 用处

- 为流程结束后的全页反馈保留统一的布局和状态语义。
- 支持业务按成功、错误、权限与系统异常替换页面内容。
- 通过 `actions` 插槽放置回退、重试或继续操作按钮。

当反馈只影响页面中的一个卡片时，使用 `AppResult` 或 `AppStatePanel`。

## 2. 代码演示

### 2.1 文件导入失败

```vue demo:result-page-error title="导入失败"
<script setup lang="ts">
import { AppButton, AppResultPage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResultPage status="error" title="导入失败" description="第 8 行手机号格式不正确，请修正后再次导入。">
    <template #actions><AppButton>返回修改文件</AppButton></template>
  </AppResultPage>
</template>
```

### 2.2 资源未找到

```vue demo:result-page-not-found title="资源不存在"
<script setup lang="ts">
import { AppButton, AppResultPage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResultPage status="404" title="课程不存在" description="它可能已下架，或访问地址有误。">
    <template #actions><AppButton variant="secondary">返回课程列表</AppButton></template>
  </AppResultPage>
</template>
```


### 2.3 成功状态

```vue demo:result-page-success title="成功状态"
<script setup lang="ts">
import { AppResultPage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResultPage status="success" title="发布成功" description="新版本已发布到生产环境" />
</template>
```

### 2.4 警告状态

```vue demo:result-page-warning title="警告状态"
<script setup lang="ts">
import { AppResultPage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResultPage status="warning" title="部分失败" description="3 条记录导入失败，请查看明细" />
</template>
```

### 2.5 页面操作

```vue demo:result-page-actions title="页面操作"
<script setup lang="ts">
import { AppButton, AppResultPage } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppResultPage status="success" title="订单已提交" description="我们会在 24 小时内处理">
    <template #actions>
      <AppButton size="small">查看订单</AppButton>
      <AppButton size="small" variant="text">返回首页</AppButton>
    </template>
  </AppResultPage>
</template>
```
## 3. API 使用方式

直接在路由页面中选择状态和内容，将跳转逻辑放在插槽内的按钮事件中。

```vue
<AppResultPage status="success" title="订单已创建">
  <template #actions><AppButton @click="router.push('/orders')">查看订单</AppButton></template>
</AppResultPage>
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `status` | 页面结果状态。 | `"success" \| "error" \| "warning" \| "info" \| "403" \| "404" \| "500"` | `undefined` |
| `title` / `description` | 页面标题与说明。 | `string` | `undefined` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `actions` | 放置返回、重试等页面级动作。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `action` | — | 内部结果组件触发默认操作时向外透传。 |
