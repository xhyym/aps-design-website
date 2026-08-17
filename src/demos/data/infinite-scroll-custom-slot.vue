<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<string[]>(Array.from({ length: 25 }, (_, i) => "动态 " + (i + 1)));
const loading = ref(false);
const load = async () => {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 600));
  items.value = items.value.concat(Array.from({ length: 8 }, (_, i) => "动态 " + (items.value.length + i + 1)));
  loading.value = false;
};
</script>

<template>
  <AppInfiniteScroll :items="items" :loading="loading" loading-text="正在拼命加载…" @load="load">
    <ul>
      <li v-for="it in items" :key="it">{{ it }}</li>
    </ul>
  </AppInfiniteScroll>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 10px 12px; border-bottom: 1px solid var(--aps-border); }
</style>
