<script setup lang="ts">
import { AppButton, AppStatePanel } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppStatePanel type="permission" title="暂时无法访问结算中心" description="联系管理员申请财务权限。">
    <template #actions><AppButton variant="secondary">申请权限</AppButton></template>
  </AppStatePanel>
</template>
