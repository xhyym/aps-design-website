<script setup lang="ts">
import { ref } from "vue";
import { AppSegmented } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("published");
const options = [
  { label: "待审核草稿", value: "draft" },
  { label: "已发布上线", value: "published" },
  { label: "已下线隐藏", value: "offline" },
];
</script>

<template>
  <AppSegmented v-model="value" :options="options" aria-label="课程状态" />
</template>
