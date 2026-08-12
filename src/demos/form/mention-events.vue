<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const content = ref("");
const status = ref("等待提及");
const options = [
  { key: "lin", label: "林晨", value: "林晨", description: "产品设计" },
  { key: "zhou", label: "周宁", value: "周宁", description: "前端研发" },
];

function onSelect(option: { label: string }): void {
  status.value = `已提及：${option.label}`;
}
</script>

<template>
  <div class="demo-field">
    <AppMention v-model="content" :options="options" @select="onSelect" placeholder="输入 @ 选择成员" aria-label="提及事件" />
    <span class="demo-status">{{ status }}</span>
  </div>
</template>

<style scoped>
.demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 520px);
}
.demo-status {
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
