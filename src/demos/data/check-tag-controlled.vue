<script setup lang="ts">
import { ref } from "vue";
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const active = ref(false);
const log = ref("");
</script>

<template>
  <div>
    <AppCheckTag v-model="active" label="点击切换" @change="(v: boolean) => (log = v ? '已选中' : '已取消')" />
    <p class="hint">最近一次：{{ log || "尚未操作" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
