<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const courseSummary = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="courseSummary"
      :rows="3"
      :max-length="120"
      show-word-limit
      placeholder="简要说明课程适合的人群、学习目标和前置条件"
      aria-label="课程简介"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
