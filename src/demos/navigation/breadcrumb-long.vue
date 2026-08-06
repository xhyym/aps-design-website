<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ label: "数据资产中心", href: "/data" }, { label: "指标管理", href: "/data/metrics" }, { label: "华东区域月度经营指标分析与复盘" }];
</script>

<template>
  <div class="narrow"><AppBreadcrumb :items="items" /></div>
</template>

<style scoped>
.narrow { max-width: 360px; overflow: hidden; padding: 12px; border: 1px solid var(--aps-line-soft); border-radius: 10px; }
</style>
