<script setup lang="ts">
import { ref } from "vue";
import { AppNotification } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(true);
const notifications = ref([
  { id: "1", title: "退款申请", description: "有 1 条退款待审核", time: "刚刚", read: false },
  { id: "2", title: "库存预警", description: "课程资料包库存不足", time: "5 分钟前", read: false },
]);

function markAllRead(): void {
  notifications.value.forEach((item) => { item.read = true; });
}
</script>

<template>
  <AppNotification v-model="open" :items="notifications" title="待办通知" @read-all="markAllRead" />
</template>
