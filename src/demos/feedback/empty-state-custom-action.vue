<script setup lang="ts">
import { AppEmptyState } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppEmptyState title="还没有成员" description="邀请成员加入你的团队" action-text="邀请成员" @action="console.log('invite')" />
</template>
