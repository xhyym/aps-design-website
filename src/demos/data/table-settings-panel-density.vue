<script setup lang="ts">
import { ref } from "vue";
import { AppTableSettingsPanel, type TablePreference } from "aps-design-pro";
import "aps-design-pro/style.css";

const pref = ref<TablePreference>({
  version: 1,
  columns: [{ key: "name", visible: true, order: 0 }, { key: "amount", visible: true, order: 1 }],
  striped: false,
  showColumnDividers: true,
  density: "compact",
  updatedAt: Date.now(),
});
const columns = [{ key: "name", label: "名称" }, { key: "amount", label: "金额", maxWidth: 200 }];
</script>

<template>
  <AppTableSettingsPanel v-model="pref" :default-value="pref" :columns="columns" />
</template>
