<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const isSaving = ref(false);
let savingTimerId: number | undefined;

/** 模拟提交过程，展示组件如何在请求期间自动禁用重复操作。 */
function submitCourse(): void {
  if (isSaving.value) return;
  isSaving.value = true;
  savingTimerId = window.setTimeout(() => {
    isSaving.value = false;
  }, 1100);
}

onBeforeUnmount(() => window.clearTimeout(savingTimerId));
</script>

<template>
  <AppButton type="button" :loading="isSaving" @click="submitCourse">
    {{ isSaving ? "正在保存" : "保存配置" }}
  </AppButton>
</template>
