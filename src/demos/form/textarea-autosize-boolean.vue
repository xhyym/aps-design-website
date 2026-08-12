<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const reply = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="reply"
      :autosize="true"
      placeholder="高度随内容增长，无固定上下限"
      aria-label="自适应文本域"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
