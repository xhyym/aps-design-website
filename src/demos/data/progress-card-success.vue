<script setup lang="ts">
import { AppProgressCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppProgressCard title="年度目标" :percentage="100" description="已完成全年指标" status="success" />
</template>
