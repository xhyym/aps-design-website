<script setup lang="ts">
import { ref } from "vue";
import { AppTableHeader, type ControlSize } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref({ a: true });
const size = ref<ControlSize>("default");
const columnOptions = [{ key: "a", label: "列 A" }];
</script>

<template>
  <AppTableHeader v-model="visible" title="项目列表" :column-options="columnOptions" v-model:table-size="size" />
</template>
