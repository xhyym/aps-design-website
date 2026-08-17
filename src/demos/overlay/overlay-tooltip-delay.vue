<script setup lang="ts">
import { AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTooltip text="800ms 后显示" :show-after="800"><span>慢显示</span></AppTooltip>
    <AppTooltip text="立即显示" :hide-after="2000"><span>持久显示</span></AppTooltip>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 32px; }
</style>
