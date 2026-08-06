<script setup lang="ts">
import { ref } from "vue";
import { AppToast, type ToastItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = ref<ToastItem[]>([{ id: "undo", tone: "warning", message: "课程已移至回收站", actionText: "撤销", closable: true, repeatCount: 1 }]);
</script>

<template>
  <AppToast :items="items" @action="console.info('撤销删除课程')" @close="(id) => { items = items.filter((item) => item.id !== id); }" />
</template>
