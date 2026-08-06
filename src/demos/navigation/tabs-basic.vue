<script setup lang="ts">
import { ref } from "vue";
import { AppTabs, type TabItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeTab = ref("profile");
const items: TabItem[] = [{ key: "profile", label: "个人资料", content: "在此维护展示信息。" }, { key: "security", label: "安全设置", content: "在此维护登录与设备安全。" }];
</script>

<template>
  <AppTabs v-model="activeTab" :items="items" show-panels />
</template>
