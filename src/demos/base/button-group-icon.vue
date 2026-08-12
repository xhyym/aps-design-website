<script setup lang="ts">
import { AppIconButton, AppButtonGroup } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppButtonGroup aria-label="视图操作">
    <AppIconButton icon="plus" label="新增" variant="secondary" />
    <AppIconButton icon="edit" label="编辑" variant="secondary" />
    <AppIconButton icon="trash" label="删除" variant="secondary" />
  </AppButtonGroup>
</template>
