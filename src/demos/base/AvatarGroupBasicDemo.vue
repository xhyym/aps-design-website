<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const reviewers: AvatarGroupItem[] = [
  { key: "lin", name: "林知远", src: "https://example.com/avatars/lin.jpg" },
  { key: "chen", name: "陈雨晨", initials: "陈" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
];
</script>

<template>
  <AppAvatarGroup :items="reviewers" :max="3" aria-label="本次评审成员" />
</template>
