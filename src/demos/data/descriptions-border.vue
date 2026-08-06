<script setup lang="ts">
import { AppDescriptions } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ label: "订单号", value: "20260806001" }, { label: "支付金额", value: "¥199" }, { label: "购买人", value: "林同学", span: 2 }];
</script>

<template><AppDescriptions :items="items" direction="horizontal" border :columns="2" /></template>
