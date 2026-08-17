<script setup lang="ts">
import { AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="box">
    <AppCard header="填满父级" fill-height><p>卡片高度跟随容器。</p></AppCard>
  </div>
</template>

<style scoped>
.box { height: 220px; }
</style>
