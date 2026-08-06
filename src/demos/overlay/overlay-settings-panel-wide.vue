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
