<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("");
const medium = ref("");
const large = ref("");
const options = [
  { key: "lin", label: "林晨", value: "林晨", description: "产品设计" },
];
</script>

<template>
  <div class="demo-stack">
    <AppMention v-model="small" :options="options" size="small" placeholder="size=small" aria-label="小尺寸提及" />
    <AppMention v-model="medium" :options="options" placeholder="size=default" aria-label="默认尺寸提及" />
    <AppMention v-model="large" :options="options" size="large" placeholder="size=large" aria-label="大尺寸提及" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 520px);
}
</style>
