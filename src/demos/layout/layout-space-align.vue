<script setup lang="ts">
import { AppSpace } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppSpace align="start">
      <span class="tall">高</span><span>对齐 start</span>
    </AppSpace>
    <AppSpace align="end">
      <span class="tall">高</span><span>对齐 end</span>
    </AppSpace>
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
.tall { font-size: 22px; }
</style>
