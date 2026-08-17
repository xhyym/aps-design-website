<script setup lang="ts">
import { AppTooltip } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTooltip text="上方提示" placement="top"><span>上</span></AppTooltip>
    <AppTooltip text="下方提示" placement="bottom"><span>下</span></AppTooltip>
    <AppTooltip text="左侧提示" placement="left"><span>左</span></AppTooltip>
    <AppTooltip text="右侧提示" placement="right"><span>右</span></AppTooltip>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 32px; }
</style>
