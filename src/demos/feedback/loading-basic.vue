<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppLoading } from "aps-design-pro";
import "aps-design-pro/style.css";

const loading = ref(false);

function refreshData(): void {
  loading.value = true;
  window.setTimeout(() => { loading.value = false; }, 900);
}
</script>

<template>
  <AppLoading :loading="loading" text="正在刷新订单数据">
    <p>订单总数：128</p>
    <AppButton size="small" @click="refreshData">刷新数据</AppButton>
  </AppLoading>
</template>
