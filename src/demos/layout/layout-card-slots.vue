<script setup lang="ts">
import { AppButton, AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCard shadow="hover" interactive>
    <template #header>版本发布</template>
    2.4.0 已准备完毕，可在发布前查看变更记录。
    <template #footer><AppButton size="small">查看详情</AppButton></template>
  </AppCard>
</template>
