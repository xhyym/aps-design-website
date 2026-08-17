<script setup lang="ts">
import { AppSkeleton } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppSkeleton :rows="2" :title="false" />
    <AppSkeleton :rows="5" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 24px; flex: 1; }
</style>
