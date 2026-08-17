<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="[16, 12]">
    <AppCol :span="8"><div class="cell">1</div></AppCol>
    <AppCol :span="8"><div class="cell">2</div></AppCol>
    <AppCol :span="8"><div class="cell">3</div></AppCol>
    <AppCol :span="8"><div class="cell">4</div></AppCol>
    <AppCol :span="8"><div class="cell">5</div></AppCol>
    <AppCol :span="8"><div class="cell">6</div></AppCol>
  </AppRow>
</template>

<style scoped>
.cell { background: var(--aps-fill); border-radius: 4px; text-align: center; padding: 12px 0; }
</style>
