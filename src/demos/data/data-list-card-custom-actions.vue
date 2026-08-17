<script setup lang="ts">
import { AppButton, AppDataListCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "owner", label: "负责人", value: "张伟" },
  { key: "members", label: "成员数", value: 12 },
  { key: "created", label: "创建时间", value: "2026-07-01" },
];
</script>

<template>
  <AppDataListCard title="团队信息" :items="items">
    <template #actions>
      <AppButton size="small" variant="text">查看成员</AppButton>
    </template>
  </AppDataListCard>
</template>
