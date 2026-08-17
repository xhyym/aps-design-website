<script setup lang="ts">
import { AppContainerMain } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppContainerMain padding="none"><p>无内边距</p></AppContainerMain>
    <AppContainerMain padding="spacious"><p>宽松内边距</p></AppContainerMain>
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 8px; }
</style>
