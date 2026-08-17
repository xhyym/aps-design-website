<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<string[]>(Array.from({ length: 20 }, (_, i) => "条目 " + (i + 1)));
const loading = ref(false);
const error = ref("请求失败，请重试");
const failed = ref(0);
const load = async () => {
  loading.value = true;
  await new Promise((r) => setTimeout(r, 800));
  if (failed.value < 1) { failed.value++; error.value = "请求失败，请重试"; }
  else { error.value = ""; items.value = items.value.concat(Array.from({ length: 10 }, (_, i) => "更多 " + (items.value.length + i + 1))); }
  loading.value = false;
};
</script>

<template>
  <AppInfiniteScroll :items="items" :loading="loading" :error-message="error" @load="load">
    <ul>
      <li v-for="it in items" :key="it">{{ it }}</li>
    </ul>
  </AppInfiniteScroll>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 10px 12px; border-bottom: 1px solid var(--aps-border); }
</style>
