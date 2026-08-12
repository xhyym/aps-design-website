<script setup lang="ts">
import { ref } from "vue";
import { AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const readOnly = ref("只读内容");
const disabled = ref("禁用内容");
</script>

<template>
  <div class="input-demo-disabled">
    <AppInput v-model="readOnly" readonly placeholder="只读" aria-label="只读示例" />
    <AppInput v-model="disabled" disabled placeholder="禁用" aria-label="禁用示例" />
  </div>
</template>

<style scoped>
.input-demo-disabled {
  display: grid;
  gap: 12px;
  width: min(100%, 360px);
}
</style>
