<script setup lang="ts">
import { ref } from "vue";
import { AppTableSettingsPanel, type TablePreference } from "aps-design-pro";
import "aps-design-pro/style.css";

const pref = ref<TablePreference>({
  version: 1,
  columns: [{ key: "a", visible: true, order: 0 }],
  striped: true,
  showColumnDividers: false,
  density: "comfortable",
  updatedAt: Date.now(),
});
const saving = ref(false);
const onUpdate = async (v: TablePreference) => {
  saving.value = true;
  await new Promise((r) => setTimeout(r, 1000));
  pref.value = v;
  saving.value = false;
};
</script>

<template>
  <AppTableSettingsPanel v-model="pref" :default-value="pref" :columns="[{ key: 'a', label: '列 A' }]" :saving="saving" @update:model-value="onUpdate" />
</template>
