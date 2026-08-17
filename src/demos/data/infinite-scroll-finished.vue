<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<string[]>(Array.from({ length: 30 }, (_, i) => "记录 " + (i + 1)));
const loading = ref(false);
const finished = ref(true);
const load = async () => {};
</script>

<template>
  <AppInfiniteScroll :items="items" :loading="loading" :finished="finished" @load="load">
    <ul>
      <li v-for="it in items" :key="it">{{ it }}</li>
    </ul>
  </AppInfiniteScroll>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 10px 12px; border-bottom: 1px solid var(--aps-border); }
</style>
