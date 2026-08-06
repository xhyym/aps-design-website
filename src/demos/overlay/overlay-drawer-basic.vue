<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDrawer } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref(false);
</script>

<template>
  <AppButton @click="visible = true">打开筛选</AppButton>
  <AppDrawer v-model="visible" title="订单筛选" description="按订单状态和创建时间缩小结果范围。">
    这里放置状态、时间和金额筛选条件。
    <template #footer><AppButton variant="secondary" @click="visible = false">重置</AppButton><AppButton @click="visible = false">应用筛选</AppButton></template>
  </AppDrawer>
</template>
