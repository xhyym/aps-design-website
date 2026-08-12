<script setup lang="ts">
import { ref } from "vue";
import { AppRadioGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("edit");
const options = [
  { label: "编辑", value: "edit" },
  { label: "预览", value: "preview" },
  { label: "分享", value: "share" },
];
</script>

<template>
  <AppRadioGroup v-model="value" :options="options" appearance="buttons" aria-label="视图模式" />
</template>
