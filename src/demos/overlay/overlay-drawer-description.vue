<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDrawer } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
</script>

<template>
  <div>
    <AppButton @click="open = true">查看详情</AppButton>
    <AppDrawer v-model="open" title="项目详情" description="项目的基础信息与负责人">
      <p>详细内容区域。</p>
    </AppDrawer>
  </div>
</template>
