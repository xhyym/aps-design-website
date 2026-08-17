<script setup lang="ts">
import { ref } from "vue";
import { AppScrollbar } from "aps-design-pro";
import "aps-design-pro/style.css";

const pos = ref("top: 0");
const onScroll = (p: { top: number; left: number }) => {
  pos.value = "top: " + p.top + "px";
};
</script>

<template>
  <div>
    <AppScrollbar height="120px" @scroll="onScroll">
      <p v-for="i in 12" :key="i">第 {{ i }} 行</p>
    </AppScrollbar>
    <p class="hint">{{ pos }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
