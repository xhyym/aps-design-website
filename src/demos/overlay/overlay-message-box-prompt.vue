<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMessageBox } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const value = ref("");
</script>

<template>
  <AppButton variant="secondary" @click="visible = true">修改课程名称</AppButton>
  <AppMessageBox v-model="visible" v-model:input-value="value" mode="prompt" title="修改课程名称" message="名称会同步显示在课程列表和详情页。" input-placeholder="例如：Vue 3 实战" :input-validator="(text) => text.trim() ? undefined : '课程名称不能为空'" @confirm="visible = false" />
</template>
