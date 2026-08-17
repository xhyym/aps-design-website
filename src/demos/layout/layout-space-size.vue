<script setup lang="ts">
import { AppSpace, AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppSpace size="small">
      <AppTag label="小" /><AppTag label="小" /><AppTag label="小" />
    </AppSpace>
    <AppSpace size="large">
      <AppTag label="大" /><AppTag label="大" /><AppTag label="大" />
    </AppSpace>
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
