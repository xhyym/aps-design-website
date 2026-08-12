<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const disabledTags = ref<string[]>(["Vue", "TypeScript"]);
const readonlyTags = ref<string[]>(["React", "Svelte"]);
</script>

<template>
  <div class="demo-stack">
    <AppInputTag v-model="disabledTags" disabled aria-label="禁用标签" />
    <AppInputTag v-model="readonlyTags" readonly aria-label="只读标签" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 420px);
}
</style>
