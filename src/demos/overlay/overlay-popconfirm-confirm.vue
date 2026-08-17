<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppPopconfirm } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const log = ref("");
const onConfirm = () => {
  log.value = "已确认";
  open.value = false;
};
const onCancel = () => {
  log.value = "已取消";
  open.value = false;
};
</script>

<template>
  <div>
    <AppPopconfirm v-model="open" title="是否继续？" description="操作将立即生效" @confirm="onConfirm" @cancel="onCancel">
      <template #trigger="{ toggle }">
        <AppButton @click="toggle">执行操作</AppButton>
      </template>
    </AppPopconfirm>
    <p class="hint">{{ log || "未操作" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
