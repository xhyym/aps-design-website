<script setup lang="ts">
import { ref } from "vue";
import { AppAutocomplete } from "aps-design-pro";
import "aps-design-pro/style.css";

const assignee = ref("");

async function fetchMembers({ query, signal }: { query: string; signal: AbortSignal }) {
  await new Promise<void>((resolve, reject) => {
    const timer = window.setTimeout(resolve, 260);
    signal.addEventListener("abort", () => { window.clearTimeout(timer); reject(new DOMException("请求已取消", "AbortError")); });
  });
  return ["林晨", "周宁", "陈果"].filter((name) => name.includes(query)).map((name) => ({ key: name, label: name, value: name, description: "产品团队" }));
}
</script>

<template>
  <div class="demo-field">
    <AppAutocomplete v-model="assignee" :fetch-suggestions="fetchMembers" :debounce="0" placeholder="输入成员姓名" aria-label="负责人" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 360px); }
</style>
