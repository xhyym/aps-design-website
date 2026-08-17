<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopover } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div class="pad">
    <AppPopover v-model="open" label="偏移示例" :offset="24">
      <template #trigger="{ toggle }">
        <AppButton @click="toggle">偏移 24px</AppButton>
      </template>
      <template #default="{ close }">
        <p>与触发器间距 24px 的气泡卡片。</p>
        <AppButton size="small" variant="text" @click="close">关闭</AppButton>
      </template>
    </AppPopover>
  </div>
</template>

<style scoped>
.pad { padding: 40px 0; }
</style>
