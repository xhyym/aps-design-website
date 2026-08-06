<script setup lang="ts">
import { ref } from "vue";
import { AppCollapse } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeKeys = ref(["intro"]);
const items = [{ key: "intro", title: "课程介绍", content: "面向 Vue 3 项目的工程化实战课程。" }, { key: "outline", title: "课程大纲", content: "包含构建、测试与发布章节。" }];
</script>

<template><AppCollapse v-model="activeKeys" :items="items" /></template>
