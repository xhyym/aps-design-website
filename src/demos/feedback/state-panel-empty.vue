<script setup lang="ts">
import { AppStatePanel } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppStatePanel type="empty" title="没有符合条件的订单" description="试着清除筛选条件后重新查询。" action-text="清除筛选" @action="console.info('清除订单筛选')" />
</template>
