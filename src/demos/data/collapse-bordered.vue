<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(["p1"]);
const items = [
  { key: "p1", title: "基础信息", content: "用于填写订单的基础信息。" },
  { key: "p2", title: "配送信息", content: "收货地址与配送方式。" },
];
</script>

<template>
  <AppCollapse v-model="open" :items="items" bordered />
</template>
