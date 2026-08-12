<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("");
const medium = ref("");
const large = ref("");
</script>

<template>
  <div class="textarea-demo-stack">
    <AppTextarea v-model="small" size="small" :rows="2" placeholder="size=small" aria-label="小尺寸文本域" />
    <AppTextarea v-model="medium" :rows="2" placeholder="size=default" aria-label="默认尺寸文本域" />
    <AppTextarea v-model="large" size="large" :rows="2" placeholder="size=large" aria-label="大尺寸文本域" />
  </div>
</template>

<style scoped>
.textarea-demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 460px);
}
</style>
