<script setup lang="ts">
import { AppTableBatchEditor, type DataTableBatchEditField } from "aps-design-pro";
import "aps-design-pro/style.css";

interface MemberRow {
  id: number;
  role: string;
}

const fields: DataTableBatchEditField<MemberRow>[] = [
  { key: "role", label: "角色", editor: { type: "select", options: [{ label: "运营", value: "operator" }, { label: "讲师", value: "teacher" }] } },
];
</script>

<template><AppTableBatchEditor :selected-keys="[]" :fields="fields" button-text="批量调整角色" /></template>
