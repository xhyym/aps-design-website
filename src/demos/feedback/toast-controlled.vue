<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<ToastItem[]>([]);
const show = () => {
  const id = "m" + Date.now();
  items.value = [...items.value, { id, message: "这是一条新的提示", tone: "info", closable: true, repeatCount: 1 }];
};
const onClose = (id: string) => {
  items.value = items.value.filter((x) => x.id !== id);
};
</script>

<template>
  <div>
    <AppButton @click="show">弹出提示</AppButton>
    <AppToast :items="items" @close="onClose" />
  </div>
</template>
