<script setup lang="ts">
import { AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppSkeletonItem variant="text" width="80%" :animated="false" />
    <AppSkeletonItem variant="text" width="60%" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
