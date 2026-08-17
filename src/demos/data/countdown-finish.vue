<script setup lang="ts">
import { ref } from "vue";
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const done = ref(false);
const end = new Date(Date.now() + 3000).toISOString();
</script>

<template>
  <div>
    <AppCountdown :value="end" format="HH:mm:ss" @finish="done = true" />
    <p class="hint">{{ done ? "已结束" : "倒计时中…" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
