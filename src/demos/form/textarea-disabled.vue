<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const disabledValue = ref("该字段当前不可编辑");
const readonlyValue = ref("只读内容，可以选中复制但不能修改");
</script>

<template>
  <div class="textarea-demo-stack">
    <AppTextarea v-model="disabledValue" disabled aria-label="禁用文本域" />
    <AppTextarea v-model="readonlyValue" readonly aria-label="只读文本域" />
  </div>
</template>

<style scoped>
.textarea-demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 460px);
}
</style>
