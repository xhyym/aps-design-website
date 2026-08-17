<script setup lang="ts">
import { AppLogo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppLogo label="APS Design" />
    <AppLogo label="控制台" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 24px; align-items: center; }
</style>
