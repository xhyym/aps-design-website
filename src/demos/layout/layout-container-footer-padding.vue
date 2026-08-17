<script setup lang="ts">
import { AppContainerFooter } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppContainerFooter padding="compact"><span>紧凑</span></AppContainerFooter>
    <AppContainerFooter padding="spacious"><span>宽松</span></AppContainerFooter>
  </div>
</template>

<style scoped>
.row { display: flex; flex-direction: column; gap: 8px; }
</style>
