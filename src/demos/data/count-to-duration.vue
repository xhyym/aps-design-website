<script setup lang="ts">
import { AppCountTo } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <div class="item"><span>1s 快速</span><AppCountTo :value="5000" :duration="1000" /></div>
    <div class="item"><span>3s 慢速</span><AppCountTo :value="5000" :duration="3000" /></div>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 48px; }
.item span { color: var(--aps-muted); margin-right: 8px; font-size: 18px; }
</style>
