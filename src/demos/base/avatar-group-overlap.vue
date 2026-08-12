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
  <div class="avatar-group-overlap">
    <AppAvatarGroup :items="members" :overlap="4" aria-label="紧凑重叠" />
    <AppAvatarGroup :items="members" :overlap="14" aria-label="宽松重叠" />
  </div>
</template>

<style scoped>
.avatar-group-overlap {
  display: flex;
  align-items: center;
  gap: 28px;
}
</style>
