<script setup lang="ts">
import { AppButton, AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppTableToolbar :selected-count="3"><AppButton size="small">添加成员</AppButton><template #bulk><AppButton size="small">批量分配</AppButton><AppButton size="small" variant="text">取消选择</AppButton></template></AppTableToolbar></template>
