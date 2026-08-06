<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const autoPublish = ref(true);
</script>

<template>
  <AppSwitch
    v-model="autoPublish"
    tone="green"
    label="审核通过后自动上架"
    description="关闭后需要手动发布课程"
  />
</template>
