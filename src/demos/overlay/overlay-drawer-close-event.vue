<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDrawer } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const log = ref("");
</script>

<template>
  <div>
    <AppButton @click="open = true">打开抽屉</AppButton>
    <AppDrawer v-model="open" title="通知设置" @close="log = '抽屉已关闭'">
      <p>设置项内容。</p>
    </AppDrawer>
    <p class="hint">{{ log || "抽屉未关闭" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
