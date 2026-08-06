<script setup lang="ts">
import { AppExcelExport } from "aps-design-pro";
import "aps-design-pro/style.css";

function exportOrders(): void { console.info("开始导出订单数据"); }
</script>

<template><AppExcelExport filename="订单数据.xlsx" @export="exportOrders" /></template>
