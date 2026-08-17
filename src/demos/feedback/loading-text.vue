<script setup lang="ts">
import { AppLoading } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="box">
    <AppLoading :loading="true" text="正在提交申请…">
      <p>表单内容</p>
    </AppLoading>
  </div>
</template>

<style scoped>
.box { height: 160px; border: 1px solid var(--aps-border); border-radius: 8px; padding: 16px; position: relative; }
</style>
