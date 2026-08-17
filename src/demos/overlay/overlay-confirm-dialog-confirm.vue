<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppConfirmDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const log = ref("");
const onConfirm = () => {
  log.value = "已确认操作";
  open.value = false;
};
</script>

<template>
  <div>
    <AppButton @click="open = true">执行操作</AppButton>
    <AppConfirmDialog v-model="open" title="执行操作" description="是否继续执行该操作？" confirm-text="确认" @confirm="onConfirm" />
    <p class="hint">{{ log || "尚未操作" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
