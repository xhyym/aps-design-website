<script setup lang="ts">
import { AppSkeletonItem } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppSkeletonItem variant="text" width="60%" />
    <AppSkeletonItem variant="text" width="40%" height="20px" />
    <AppSkeletonItem variant="circle" width="48px" height="48px" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
