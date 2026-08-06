<script setup lang="ts">
import { AppWatermark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <section class="watermark-stage">
    <strong>报价单预览</strong>
    <p>仅授权给指定客户和项目成员查阅。</p>
    <AppWatermark text="APS CONFIDENTIAL" :fixed="false" :rows="3" :columns="3" :opacity="0.11" />
  </section>
</template>

<style scoped>
.watermark-stage { position: relative; min-height: 160px; overflow: hidden; padding: 28px; border: 1px solid var(--aps-line-soft); border-radius: 12px; }
.watermark-stage strong, .watermark-stage p { position: relative; z-index: 1; }
.watermark-stage p { color: var(--aps-muted); }
</style>
