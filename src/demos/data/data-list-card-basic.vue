<script setup lang="ts">
import { AppDataListCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ key: "paid", label: "已支付订单", value: 128 }, { key: "refund", label: "退款申请", value: 3, detail: "需在今天内处理" }];
</script>

<template><AppDataListCard title="订单概览" :items="items" /></template>
