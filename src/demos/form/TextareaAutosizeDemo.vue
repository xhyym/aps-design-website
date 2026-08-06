<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const reply = ref("欢迎补充具体的需求，我们会在一个工作日内回复。");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="reply"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="输入回复内容"
      aria-label="回复内容"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
