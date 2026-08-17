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
