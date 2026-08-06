<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNotification } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const notifications = ref([
  { id: "order", title: "新订单待处理", description: "订单 #20260806 已支付", time: "刚刚", read: false },
  { id: "course", title: "课程审核通过", description: "Vue 工程化课程已上架", time: "10 分钟前", read: true },
]);
</script>

<template>
  <AppButton variant="secondary" @click="open = true">打开通知</AppButton>
  <AppNotification v-model="open" :items="notifications" @read="(id) => { const item = notifications.find((entry) => entry.id === id); if (item) item.read = true; }" />
</template>
