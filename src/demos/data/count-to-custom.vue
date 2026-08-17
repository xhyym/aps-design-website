<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <div class="item"><span>月活跃</span><AppCountTo :value="1234567" :duration="1500" /></div>
    <div class="item"><span>转化率</span><AppCountTo :value="4.32" :decimals="2" :duration="800" suffix="%" /></div>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 48px; }
.item span { color: var(--aps-muted); margin-right: 8px; font-size: 18px; }
</style>
