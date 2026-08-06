<script setup lang="ts">
import { AppException } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <AppException code="403" description="当前账号没有查看订单导出记录的权限。" @action="console.info('用户申请权限')" />
</template>
