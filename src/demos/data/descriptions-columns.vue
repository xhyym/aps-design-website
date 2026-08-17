<script setup lang="ts">
import { AppDescriptions } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "name", label: "姓名", value: "陈晨" },
  { key: "dept", label: "部门", value: "研发中心" },
  { key: "city", label: "城市", value: "杭州" },
  { key: "email", label: "邮箱", value: "chen@example.com" },
];
</script>

<template>
  <AppDescriptions title="员工信息" :items="items" :columns="2" />
</template>
