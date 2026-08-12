<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
  { key: "qian", name: "钱多多" },
];
</script>

<template>
  <div class="avatar-group-max">
    <AppAvatarGroup :items="members" :max="3" aria-label="最多展示 3 人" />
    <AppAvatarGroup :items="members" :max="0" aria-label="展示全部成员" />
  </div>
</template>

<style scoped>
.avatar-group-max {
  display: flex;
  align-items: center;
  gap: 28px;
}
</style>
