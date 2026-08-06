<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKey = ref("shipping");
const items = [{ key: "shipping", title: "发货规则", content: "资料包将在付款后自动发放。" }, { key: "refund", title: "退款规则", content: "购买前请确认课程适用范围。" }];
</script>

<template><AppCollapse v-model="activeKey" accordion :items="items" /></template>
