<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "一级 A", children: [
    { key: "a1", label: "A-1" },
    { key: "a2", label: "A-2" },
  ] },
  { key: "b", label: "一级 B", children: [
    { key: "b1", label: "B-1" },
    { key: "b2", label: "B-2" },
  ] },
];
</script>

<template>
  <AppMenu :items="items" :unique-opened="true" default-active="a1" :default-openeds="['a']" />
</template>
