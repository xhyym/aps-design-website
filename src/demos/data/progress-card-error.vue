<script setup lang="ts">
import { AppProgressCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppProgressCard title="数据迁移" :percentage="38" description="步骤 3/5 失败，请重试" status="error" />
</template>
