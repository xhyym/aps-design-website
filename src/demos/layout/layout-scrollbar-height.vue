<script setup lang="ts">
import { AppScrollbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppScrollbar height="160px">
    <ul>
      <li v-for="i in 20" :key="i">滚动条目 {{ i }}</li>
    </ul>
  </AppScrollbar>
</template>

<style scoped>
ul { margin: 0; padding: 0; list-style: none; }
li { padding: 8px 12px; border-bottom: 1px solid var(--aps-border); }
</style>
