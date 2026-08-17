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
