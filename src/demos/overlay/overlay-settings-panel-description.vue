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
