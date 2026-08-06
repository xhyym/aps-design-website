<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<ToastItem[]>([{ id: "saved", tone: "success", message: "课程草稿已保存", closable: true, repeatCount: 1 }]);

function addToast(): void {
  items.value = [{ id: String(Date.now()), tone: "info", message: "正在同步内容", closable: true, repeatCount: 1 }, ...items.value];
}
</script>

<template>
  <AppButton size="small" @click="addToast">新增消息</AppButton>
  <AppToast :items="items" @close="(id) => { items = items.filter((item) => item.id !== id); }" />
</template>
