<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref<string[]>(["Vue"]);
const medium = ref<string[]>(["Vue"]);
const large = ref<string[]>(["Vue"]);
</script>

<template>
  <div class="demo-stack">
    <AppInputTag v-model="small" size="small" placeholder="size=small" aria-label="小尺寸标签" />
    <AppInputTag v-model="medium" placeholder="size=default" aria-label="默认尺寸标签" />
    <AppInputTag v-model="large" size="large" placeholder="size=large" aria-label="大尺寸标签" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 420px);
}
</style>
