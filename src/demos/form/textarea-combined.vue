<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const feedback = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="feedback"
      :autosize="{ minRows: 3, maxRows: 5 }"
      :max-length="200"
      show-word-limit
      placeholder="请输入您的反馈，最多 200 字"
      aria-label="用户反馈"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
