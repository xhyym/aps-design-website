<script setup lang="ts">
import { AppContainerAside } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppContainerAside width="narrow"><p>窄</p></AppContainerAside>
    <AppContainerAside width="default"><p>默认</p></AppContainerAside>
    <AppContainerAside width="wide"><p>宽</p></AppContainerAside>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; height: 160px; }
.row :deep(.aps-container-aside) { border: 1px solid var(--aps-border); }
</style>
