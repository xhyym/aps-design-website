<script setup lang="ts">
import { AppAlert } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppAlert title="信息提示" description="这是一条普通信息。" tone="info" />
    <AppAlert title="操作成功" description="数据已保存。" tone="success" />
    <AppAlert title="注意" description="配置将在重启后生效。" tone="warning" />
    <AppAlert title="操作失败" description="请稍后重试。" tone="danger" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
