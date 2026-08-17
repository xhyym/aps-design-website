<script setup lang="ts">
import { AppContainerHeader } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppContainerHeader padding="compact"><span>紧凑头部</span></AppContainerHeader>
    <AppContainerHeader padding="spacious"><span>宽松头部</span></AppContainerHeader>
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 8px; }
</style>
