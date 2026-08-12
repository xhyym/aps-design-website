<script setup lang="ts">
import { ref } from "vue";
import { AppSwitch } from "aps-design-pro";
import "aps-design-pro/style.css";

const notify = ref(true);
</script>

<template>
  <AppSwitch v-model="notify" label="课程更新提醒">
    <template #default>
      <a
        class="switch-demo-extra__link"
        href="https://gitee.com/xhyym/aps-design-pro"
        target="_blank"
        rel="noopener noreferrer"
      >查看通知配置</a>
    </template>
  </AppSwitch>
</template>

<style scoped>
.switch-demo-extra__link {
  margin-left: 4px;
  color: var(--aps-blue, #0a6cdf);
  font-size: 13px;
}
</style>
