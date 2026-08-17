---
title: 工作区锁屏
component: AppScreenLock
category: overlay
source: packages/ui/src/components/overlay/AppScreenLock.vue
---

# 工作区锁屏（AppScreenLock）

`AppScreenLock` 在用户暂时离开时遮挡工作区，并收集密码后交给业务服务校验。

## 1. 用处

用于保护已登录工作区的临时离开状态，不代替登录页和权限校验。组件只负责输入、错误显示和键盘提交，密码验证由 `unlock` 事件的业务处理器完成。

## 2. 代码演示

### 2.1 解锁成功

```vue demo:overlay-screen-lock-basic title="基础锁屏"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">锁定工作区</AppButton>
  <AppScreenLock v-model="visible" user-name="林知远" @unlock="visible = false" />
</template>
```

### 2.2 展示服务端错误

```vue demo:overlay-screen-lock-error title="错误状态"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const errorMessage = ref("");

function unlock(password: string): void {
  errorMessage.value = password === "aps" ? "" : "密码不正确，请重试。";
  if (!errorMessage.value) visible.value = false;
}
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">测试密码校验</AppButton>
  <AppScreenLock v-model="visible" description="输入 aps 可解锁当前演示。" :error-message="errorMessage" @unlock="unlock" />
</template>
```


### 2.3 自定义用户

```vue demo:overlay-screen-lock-user title="自定义用户"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(false);
</script>

<template>
  <div>
    <AppButton @click="locked = true">锁定工作区</AppButton>
    <AppScreenLock v-model="locked" user-name="张伟" />
  </div>
</template>
```

### 2.4 说明文字

```vue demo:overlay-screen-lock-description title="说明文字"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(false);
</script>

<template>
  <div>
    <AppButton @click="locked = true">锁定</AppButton>
    <AppScreenLock v-model="locked" description="为保护数据安全，请重新验证身份" />
  </div>
</template>
```

### 2.5 解锁回调

```vue demo:overlay-screen-lock-unlock title="解锁回调"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(false);
const log = ref("");
const onUnlock = (password: string) => {
  log.value = "收到密码长度 " + password.length;
  locked.value = false;
};
</script>

<template>
  <div>
    <AppButton @click="locked = true">锁定工作区</AppButton>
    <AppScreenLock v-model="locked" @unlock="onUnlock" />
    <p class="hint">{{ log || "未解锁" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
```

### 2.6 解锁中

```vue demo:overlay-screen-lock-unlocking title="解锁中"
<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppScreenLock } from "aps-design-pro";
import "aps-design-pro/style.css";

const locked = ref(false);
const unlocking = ref(false);
const onUnlock = () => {
  unlocking.value = true;
  setTimeout(() => {
    unlocking.value = false;
    locked.value = false;
  }, 1500);
};
</script>

<template>
  <div>
    <AppButton @click="locked = true">锁定</AppButton>
    <AppScreenLock v-model="locked" :is-unlocking="unlocking" @unlock="onUnlock" />
  </div>
</template>
```
## 3. API 使用方式

打开时组件会自动聚焦密码框，按 Enter 或点击按钮都会触发 `unlock(password)`。业务服务请求期间把 `isUnlocking` 设为 `true`，失败信息通过 `errorMessage` 传回。

## 4. Props 与 Slots

### 4.1 Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示锁屏。 | `boolean` | 必填 |
| `userName` | 当前用户显示名称。 | `string` | `当前用户` |
| `description` | 密码框下的说明文案。 | `string` | `输入密码以继续使用工作区。` |
| `isUnlocking` | 是否正在请求解锁。 | `boolean` | `false` |
| `errorMessage` | 业务返回的错误信息。 | `string` | `""` |

### 4.2 Slots

无对外插槽；锁屏结构固定，以保证保护层不被业务内容覆盖。

### 4.3 Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `boolean` | 外部同步显示状态。 |
| `unlock` | `string` | 用户提交密码，参数为明文输入值；业务层应立即交给安全接口处理。 |
