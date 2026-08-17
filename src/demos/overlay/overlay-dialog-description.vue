<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">查看公告</AppButton>
    <AppDialog v-model="open" title="系统公告" description="本周六凌晨将进行系统升级">
      <p>升级期间服务可能短暂不可用，请提前保存工作内容。</p>
    </AppDialog>
  </div>
</template>
