<script setup lang="ts">
import { AppCol, AppRow } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppRow :gutter="12">
    <AppCol :span="12">
      <div class="outer">外层 12</div>
      <AppRow :gutter="12">
        <AppCol :span="6"><div class="cell">内 6</div></AppCol>
        <AppCol :span="6"><div class="cell">内 6</div></AppCol>
      </AppRow>
    </AppCol>
    <AppCol :span="12">
      <div class="outer">外层 12</div>
    </AppCol>
  </AppRow>
</template>

<style scoped>
.cell, .outer { background: var(--aps-fill); border-radius: 4px; text-align: center; padding: 12px 0; }
.outer { background: var(--aps-fill-strong); margin-bottom: 8px; }
</style>
