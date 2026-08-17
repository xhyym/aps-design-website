<script setup lang="ts">
import { ref } from "vue";
import { AppFastEnter } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
const picked = ref("");
const items = [
  { key: "k1", title: "查看详情" },
  { key: "k2", title: "编辑资料" },
];
</script>

<template>
  <div>
    <AppFastEnter v-model="visible" :items="items" @select="(item) => (picked = item.key)" />
    <p class="hint">已选择：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
