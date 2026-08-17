<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDrawer } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">打开抽屉</AppButton>
    <AppDrawer v-model="open" title="新建工单" description="填写工单基础信息">
      <p>工单表单内容。</p>
      <template #footer>
        <AppButton size="small" variant="text" @click="open = false">取消</AppButton>
        <AppButton size="small" @click="open = false">提交</AppButton>
      </template>
    </AppDrawer>
  </div>
</template>
