<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNotification, type NotificationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items = ref<NotificationItem[]>([
  { id: "a1", title: "审批提醒", description: "你的请假申请等待审批", time: "昨天 16:00" },
  { id: "a2", title: "公告", description: "八月版本更新说明", time: "昨天 09:30" },
]);
const log = ref("");
const onRead = (id: string) => {
  const it = items.value.find((x) => x.id === id);
  if (it) it.read = true;
  log.value = "已读：" + (it?.title ?? id);
};
</script>

<template>
  <div>
    <AppButton @click="open = true">通知中心</AppButton>
    <AppNotification v-model="open" :items="items" @read="onRead" />
    <p class="hint">{{ log || "点击未读通知试试" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
