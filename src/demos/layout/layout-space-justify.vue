<script setup lang="ts">
import { AppSpace, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppSpace justify="between">
      <AppTag label="左" /><AppTag label="中" /><AppTag label="右" />
    </AppSpace>
    <AppSpace justify="around">
      <AppTag label="A" /><AppTag label="B" /><AppTag label="C" />
    </AppSpace>
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
