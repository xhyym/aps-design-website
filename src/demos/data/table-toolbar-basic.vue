<script setup lang="ts">
import { AppButton, AppTableToolbar } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template><AppTableToolbar><AppButton size="small">新建课程</AppButton><template #actions><AppButton size="small" variant="secondary">导入</AppButton><AppButton size="small" variant="secondary">导出</AppButton></template></AppTableToolbar></template>
