<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
];
</script>

<template>
  <AppAvatarGroup :items="members" shape="square" aria-label="方形成员组" />
</template>
