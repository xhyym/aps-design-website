<script setup lang="ts">
import { ref } from "vue";
import { AppInfiniteScroll } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref(Array.from({ length: 12 }, (_, index) => `动态记录 ${index + 1}`));
const loading = ref(false);
const finished = ref(false);
function load(): void { loading.value = true; window.setTimeout(() => { const next = items.value.length; items.value.push(...Array.from({ length: 8 }, (_, index) => `动态记录 ${next + index + 1}`)); loading.value = false; if (items.value.length >= 28) finished.value = true; }, 300); }
</script>

<template><AppInfiniteScroll :items="items" :loading="loading" :finished="finished" @load="load"><p v-for="item in items" :key="item">{{ item }}</p></AppInfiniteScroll></template>
