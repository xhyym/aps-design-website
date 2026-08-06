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
