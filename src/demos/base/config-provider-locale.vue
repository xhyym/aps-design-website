<script setup lang="ts">
import { ref } from "vue";
import { AppConfigProvider, useAppComponentConfig } from "aps-design-pro";

const locale = ref<"zh-CN" | "en-US">("zh-CN");
const config = useAppComponentConfig();
</script>

<template>
  <AppConfigProvider :locale="locale">
    <div class="config-provider-locale">
      <p>当前语言环境：{{ config.locale }}</p>
      <button type="button" @click="locale = locale === 'zh-CN' ? 'en-US' : 'zh-CN'">
        切换语言环境
      </button>
    </div>
  </AppConfigProvider>
</template>

<style scoped>
.config-provider-locale {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
