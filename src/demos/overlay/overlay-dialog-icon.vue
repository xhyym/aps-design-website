<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">查看订单</AppButton>
    <AppDialog v-model="open" title="订单 #1024" description="订单已支付成功">
      <template #icon>✓</template>
      <p>订单详情内容区域。</p>
    </AppDialog>
  </div>
</template>
