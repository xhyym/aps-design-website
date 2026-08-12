<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
];
</script>

<template>
  <div class="avatar-group-sizes">
    <AppAvatarGroup :items="members" size="small" aria-label="小尺寸成员组" />
    <AppAvatarGroup :items="members" size="large" aria-label="大尺寸成员组" />
  </div>
</template>

<style scoped>
.avatar-group-sizes {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
