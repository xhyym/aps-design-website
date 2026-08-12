<script setup lang="ts">
import { ref } from "vue";
import { AppCheckbox } from "aps-design-pro";
import "aps-design-pro/style.css";

const notify = ref(true);
</script>

<template>
  <AppCheckbox
    v-model="notify"
    bordered
    label="接收开课提醒"
    description="新章节上线时通过站内信通知你"
  />
</template>
