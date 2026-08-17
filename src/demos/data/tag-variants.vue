<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTag label="柔和" variant="soft" />
    <AppTag label="描边" variant="outline" />
    <AppTag label="实心" variant="solid" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; }
</style>
