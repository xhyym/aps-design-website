<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文档", value: "doc" },
  { label: "图文", value: "article" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" :columns="2" aria-label="内容形式" />
</template>
