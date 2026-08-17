<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<string[]>(Array.from({ length: 12 }, (_, i) => "日志 " + (i + 1)));
const loading = ref(false);
const load = async () => {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 500));
  items.value = items.value.concat(Array.from({ length: 6 }, (_, i) => "日志 " + (items.value.length + i + 1)));
  loading.value = false;
};
</script>

<template>
  <AppInfiniteScroll :items="items" :loading="loading" :height="160" :distance="24" @load="load">
    <ul>
      <li v-for="it in items" :key="it">{{ it }}</li>
    </ul>
  </AppInfiniteScroll>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 8px 12px; border-bottom: 1px solid var(--aps-border); font-size: 13px; }
</style>
