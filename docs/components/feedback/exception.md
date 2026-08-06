---
title: 异常页
component: AppException
category: feedback
source: packages/ui/src/components/feedback/AppException.vue
---

# 异常页（AppException）

`AppException` 为常见的 403、404 与 500 页面提供统一的错误信息与返回动作。

## 1. 用处

- 在路由找不到、权限不足或服务端故障时展示可理解的页面级反馈。
- 用 `description` 补充当前页面特有的处理建议。
- 由 `action` 接回列表、首页或重新请求逻辑。

不要把字段校验或局部接口失败升级为整页异常。

## 2. 代码演示

### 2.1 页面不存在

```vue demo:exception-not-found title="404 页面"
<script setup lang="ts">
import { AppException } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppException code="404" @action="console.info('用户返回工作台')" />
</template>
```

### 2.2 无访问权限

```vue demo:exception-forbidden title="403 页面"
<script setup lang="ts">
import { AppException } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppException code="403" description="当前账号没有查看订单导出记录的权限。" @action="console.info('用户申请权限')" />
</template>
```

## 3. API 使用方式

根据路由或接口错误码选择对应的异常类型，并由父级实现实际导航。

```vue
<AppException :code="errorCode" @action="router.replace('/dashboard')" />
```

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `code` | 异常类型。 | `"403" \| "404" \| "500"` | `"404"` |
| `description` | 补充说明。 | `string` | `"页面不存在或已被移动。"` |

### 4.2 Slots

该组件不提供插槽。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `action` | — | 点击默认操作按钮时触发。 |
