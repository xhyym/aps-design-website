<script setup lang="ts">
import { AppScrollbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppScrollbar max-height="180px">
    <p>内容较少时不出现滚动条，超出后限制在 180px 内滚动。</p>
    <p v-for="i in 15" :key="i">补充段落 {{ i }}</p>
  </AppScrollbar>
</template>
