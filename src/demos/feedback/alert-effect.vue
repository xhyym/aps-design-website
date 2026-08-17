<script setup lang="ts">
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppAlert title="深色信息" description="适合深色主题场景。" effect="dark" />
    <AppAlert title="深色警告" description="深色模式下仍有足够对比度。" tone="warning" effect="dark" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
