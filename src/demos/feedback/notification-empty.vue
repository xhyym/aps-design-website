<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppNotification, type NotificationItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: NotificationItem[] = [];
</script>

<template>
  <div>
    <AppButton @click="open = true">查看通知</AppButton>
    <AppNotification v-model="open" :items="items" />
  </div>
</template>
