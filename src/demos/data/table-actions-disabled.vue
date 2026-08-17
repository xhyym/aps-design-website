<script setup lang="ts">
import { AppTableActions } from "aps-design-pro";
import "aps-design-pro/style.css";

const more = [
  { key: "copy", label: "复制" },
  { key: "delete", label: "删除", danger: true, disabled: true },
];
</script>

<template>
  <AppTableActions :more-items="more">
    <a>编辑</a>
  </AppTableActions>
</template>
