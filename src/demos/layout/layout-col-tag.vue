<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="12">
    <AppCol :span="12" tag="section"><div class="cell">section</div></AppCol>
    <AppCol :span="12" tag="aside"><div class="cell">aside</div></AppCol>
  </AppRow>
</template>

<style scoped>
.cell { background: var(--aps-fill); border-radius: 4px; text-align: center; padding: 12px 0; }
</style>
