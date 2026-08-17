<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppTableHeader } from "aps-design-pro";
import "aps-design-pro/style.css";

const visible = ref({ name: true, owner: true });
const columnOptions = [{ key: "name", label: "名称" }, { key: "owner", label: "负责人" }];
</script>

<template>
  <AppTableHeader v-model="visible" title="项目列表" :column-options="columnOptions">
    <template #actions>
      <AppButton size="small">新建项目</AppButton>
    </template>
  </AppTableHeader>
</template>
