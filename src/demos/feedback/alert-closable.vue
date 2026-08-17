<script setup lang="ts">
import { ref } from "vue";
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(true);
const log = ref("");
</script>

<template>
  <div>
    <AppAlert v-if="show" title="可关闭提示" description="点击右侧按钮关闭" closable @close="show = false; log = '已关闭'" />
    <p class="hint">{{ log || "提示仍显示中" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
