<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDialog } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(true);
</script>

<template>
  <div>
    <AppButton @click="open = true">打开对话框</AppButton>
    <AppDialog v-model="open" title="必须处理" description="该对话框无法通过遮罩或关闭按钮关闭" :closable="false" :close-on-overlay="false">
      <p>只能通过业务操作关闭。</p>
      <template #footer>
        <AppButton size="small" @click="open = false">我知道了</AppButton>
      </template>
    </AppDialog>
  </div>
</template>
