<script setup lang="ts">
import { ref } from "vue";
import { AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="input-demo-sizes">
    <AppInput v-model="value" size="small" placeholder="小尺寸" aria-label="小尺寸示例" />
    <AppInput v-model="value" size="default" placeholder="默认尺寸" aria-label="默认尺寸示例" />
    <AppInput v-model="value" size="large" placeholder="大尺寸" aria-label="大尺寸示例" />
  </div>
</template>

<style scoped>
.input-demo-sizes {
  display: grid;
  gap: 12px;
  width: min(100%, 360px);
}
</style>
