<script setup lang="ts">
import { ref } from "vue";
import { AppButton } from "aps-design-pro";
import "aps-design-pro/style.css";

const removed = ref(false);
function removeResource(): void {
  removed.value = true;
}
</script>

<template>
  <div class="button-demo-danger">
    <AppButton variant="danger" @click="removeResource">删除课程</AppButton>
    <span v-if="removed" class="button-demo-danger__hint">已触发删除，实际需业务层二次确认</span>
  </div>
</template>

<style scoped>
.button-demo-danger {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.button-demo-danger__hint {
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
