<script setup lang="ts">
import { AppButton, AppDataListCard } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [{ key: "publish", label: "本周上架", value: 6 }, { key: "draft", label: "待完善草稿", value: 4 }];
</script>

<template><AppDataListCard title="内容运营" description="最近 7 天" :items="items"><template #actions><AppButton size="small" variant="text">查看报表</AppButton></template></AppDataListCard></template>
