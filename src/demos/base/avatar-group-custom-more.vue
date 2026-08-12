<script setup lang="ts">
import { AppAvatarGroup, type AvatarGroupItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const members: AvatarGroupItem[] = [
  { key: "lin", name: "林知远" },
  { key: "chen", name: "陈雨晨" },
  { key: "wang", name: "王宇航" },
  { key: "zhao", name: "赵晴" },
  { key: "qian", name: "钱多多" },
  { key: "sun", name: "孙岚" },
];

function buildMoreLabel(count: number): string {
  return `还有 ${count} 位协作者未显示`;
}
</script>

<template>
  <AppAvatarGroup :items="members" :max="3" :more-label="buildMoreLabel" aria-label="项目协作者" />
</template>
