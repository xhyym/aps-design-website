<script setup lang="ts">
import { AppButton, AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppCard header="订单详情" footer="共 3 件商品">
    <p>商品与金额信息。</p>
    <template #footer>
      <div class="ops">
        <AppButton size="small" variant="text">取消</AppButton>
        <AppButton size="small">确认支付</AppButton>
      </div>
    </template>
  </AppCard>
</template>

<style scoped>
.ops { display: flex; gap: 8px; justify-content: flex-end; }
</style>
