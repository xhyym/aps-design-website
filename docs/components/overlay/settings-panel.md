---
title: 设置面板
component: AppSettingsPanel
category: overlay
source: packages/ui/src/components/overlay/AppSettingsPanel.vue
---

# 设置面板（AppSettingsPanel）

`AppSettingsPanel` 是针对工作区偏好设置的抽屉封装，复用抽屉的关闭、焦点和底部操作行为。

## 1. 用处

适合放置主题、密度、菜单展开方式等界面偏好。设置内容由默认插槽提供，组件本身只约定标题、说明与宽度，不绑定具体设置模型。

## 2. 代码演示

### 2.1 偏好开关

```vue demo:overlay-settings-panel-basic title="偏好开关"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSettingsPanel, AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const compact = ref(false);
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">打开偏好设置</AppButton>
  <AppSettingsPanel v-model="visible"><AppSwitch v-model="compact" label="紧凑显示" /><template #footer><AppButton @click="visible = false">完成</AppButton></template></AppSettingsPanel>
</template>
```

### 2.2 宽设置工作区

```vue demo:overlay-settings-panel-wide title="宽设置面板"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSettingsPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">打开宽设置面板</AppButton>
  <AppSettingsPanel v-model="visible" title="工作区偏好" description="在这里调整界面与通知设置。" width="wide">设置内容由业务模块提供。</AppSettingsPanel>
</template>
```


### 2.3 底部操作

```vue demo:overlay-settings-panel-footer title="底部操作"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSettingsPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">打开设置</AppButton>
    <AppSettingsPanel v-model="open">
      <p>主题、字体等设置项。</p>
      <template #footer>
        <AppButton size="small" variant="text" @click="open = false">取消</AppButton>
        <AppButton size="small" @click="open = false">保存设置</AppButton>
      </template>
    </AppSettingsPanel>
  </div>
</template>
```

### 2.4 说明文字

```vue demo:overlay-settings-panel-description title="说明文字"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSettingsPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">偏好设置</AppButton>
    <AppSettingsPanel v-model="open" title="偏好设置" description="修改后立即生效，无需重启">
      <p>设置内容区域。</p>
    </AppSettingsPanel>
  </div>
</template>
```

### 2.5 自定义标题

```vue demo:overlay-settings-panel-custom title="自定义标题"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppSettingsPanel } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">高级设置</AppButton>
    <AppSettingsPanel v-model="open" title="界面设置" description="调整当前工作区的显示偏好">
      <p>更多设置内容。</p>
    </AppSettingsPanel>
  </div>
</template>
```
## 3. API 使用方式

`AppSettingsPanel` 的宽度和标题会传递给内部 `AppDrawer`。业务侧通过 `v-model` 控制开关，将设置表单放在默认插槽，保存按钮放入 `footer`。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示设置面板。 | `boolean` | 必填 |
| `title` | 面板标题。 | `string` | `界面设置` |
| `description` | 面板说明。 | `string` | `调整当前工作区的显示偏好。` |
| `width` | 面板宽度。 | `"regular" \| "wide"` | `regular` |

### 4.2 Slots

| 插槽 | 说明 |
| --- | --- |
| `default` | 设置内容。 |
| `footer` | 底部保存、重置等操作。 |

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 面板打开状态变化。 |
