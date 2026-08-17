<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDrawer } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">打开抽屉</AppButton>
    <AppDrawer v-model="open" title="重要流程" description="请完成当前流程后再关闭" :closable="false" :close-on-overlay="false">
      <p>流程步骤内容。</p>
      <template #footer>
        <AppButton size="small" @click="open = false">完成并关闭</AppButton>
      </template>
    </AppDrawer>
  </div>
</template>
