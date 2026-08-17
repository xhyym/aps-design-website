---
title: 表格导入
component: AppExcelImport
category: data
source: packages/ui/src/components/data/AppExcelImport.vue
---

# 表格导入（AppExcelImport）

`AppExcelImport` 是限定 Excel/CSV 格式的上传入口，复用上传队列与请求能力。

## 1. 用处

- 导入客户、商品、成员等批量表格数据。
- 组件只上传文件；解析、字段校验、错误行回传由导入服务处理。
- 服务端仍需校验文件格式与权限。

## 2. 代码演示

### 2.1 基础导入

```vue demo:data-excel-import-basic title="基础导入"
<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadFileItem, type UploadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request: UploadRequest = async ({ onProgress }) => { onProgress(100); return {}; };
</script>

<template><AppExcelImport v-model="files" :request="request" /></template>
```

### 2.2 文件体积校验

```vue demo:data-excel-import-validate title="文件校验"
<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadBeforeUpload, type UploadFileItem, type UploadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request: UploadRequest = async ({ onProgress }) => { onProgress(100); return {}; };
const beforeUpload: UploadBeforeUpload = (file) => file.size < 2 * 1024 * 1024;
</script>

<template><AppExcelImport v-model="files" :request="request" :before-upload="beforeUpload" /></template>
```


### 2.3 多文件导入

```vue demo:excel-import-multiple title="多文件导入"
<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <AppExcelImport v-model="files" multiple />
</template>
```

### 2.4 禁用状态

```vue demo:excel-import-disabled title="禁用状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
</script>

<template>
  <AppExcelImport v-model="files" disabled />
</template>
```

### 2.5 自定义上传

```vue demo:excel-import-request title="自定义上传"
<script setup lang="ts">
import { ref } from "vue";
import { AppExcelImport, type UploadFileItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const files = ref<UploadFileItem[]>([]);
const request = async ({ file }: { file: File }) => {
  console.log("upload", file.name);
  await new Promise((r) => setTimeout(r, 1000));
  return { url: "/mock/" + file.name };
};
</script>

<template>
  <AppExcelImport v-model="files" :request="request" />
</template>
```
## 3. API 使用方式

提供上传 `request`，将接口进度回传给 `onProgress`。收到 `change` 后用服务端返回的导入任务 ID 跳转到结果页或更新导入状态。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 导入文件队列。 | `UploadFileItem[]` | — |
| `multiple` / `disabled` | 多选与禁用状态。 | `boolean` | `undefined` |
| `request` / `beforeUpload` | 上传服务与入队校验。 | `UploadRequest` / `UploadBeforeUpload` | `undefined` |

### 4.2 Slots

无插槽。

### 4.3 Events

支持 `update:modelValue` 与 `change(file, files)`；实例可调用 `add()`、`submit()`、`abort()`。
