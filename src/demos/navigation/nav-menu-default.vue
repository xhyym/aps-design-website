<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "内容", children: [
    { key: "a1", label: "文章" },
    { key: "a2", label: "评论" },
  ] },
  { key: "b", label: "系统", children: [
    { key: "b1", label: "用户" },
  ] },
];
</script>

<template>
  <AppMenu :items="items" default-active="a2" :default-openeds="['a', 'b']" />
</template>
