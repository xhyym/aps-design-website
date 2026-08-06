<script setup lang="ts">
import { AppEditableTable, type DataTableColumn } from "aps-design-pro";
import "aps-design-pro/style.css";

interface TicketRow {
  id: string;
  subject: string;
  priority: string;
}

const rows: TicketRow[] = [
  { id: "T-101", subject: "支付页加载异常", priority: "high" },
  { id: "T-102", subject: "补充课程封面", priority: "normal" },
];
const columns: DataTableColumn<TicketRow>[] = [
  { key: "subject", label: "事项", editable: true, editor: { placeholder: "输入事项" } },
  { key: "priority", label: "优先级", editable: true, editor: { type: "select", options: [{ label: "高", value: "high" }, { label: "普通", value: "normal" }, { label: "低", value: "low" }] } },
];
</script>

<template><AppEditableTable :rows="rows" :columns="columns" row-key="id" edit-trigger="dblclick" /></template>
