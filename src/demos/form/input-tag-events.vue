<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>([]);
const status = ref("等待操作");

function onCreate(value: string): void {
  status.value = `创建了标签：${value}`;
}
function onRemove(value: string): void {
  status.value = `移除了标签：${value}`;
}
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" @create="onCreate" @remove="onRemove" placeholder="创建或删除标签看状态" aria-label="标签事件" />
    <span class="demo-status">{{ status }}</span>
  </div>
</template>

<style scoped>
.demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 420px);
}
.demo-status {
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
