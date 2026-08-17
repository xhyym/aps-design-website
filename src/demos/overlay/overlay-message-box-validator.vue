<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMessageBox } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const value = ref("");
const validator = (v: string) => {
  if (v.trim().length < 2) return "名称至少 2 个字符";
  return undefined;
};
</script>

<template>
  <div>
    <AppButton @click="open = true">新建分组</AppButton>
    <AppMessageBox v-model="open" mode="prompt" v-model:input-value="value" title="新建分组" message="请输入分组名称" :input-validator="validator" />
  </div>
</template>
