<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppOverlay } from "aps-design-pro";
import "aps-design-pro/style.css";

const show = ref(false);
const log = ref("");
</script>

<template>
  <div>
    <AppButton @click="show = true">打开遮罩</AppButton>
    <AppOverlay v-model="show" @update:model-value="(v: boolean) => (log = v ? '打开' : '点击遮罩关闭')">
      <p>点击遮罩空白区域关闭</p>
    </AppOverlay>
    <p class="hint">{{ log || "遮罩未打开" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
