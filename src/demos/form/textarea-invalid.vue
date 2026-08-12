<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const remark = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="remark"
      :rows="3"
      invalid
      described-by="remark-error"
      aria-label="审核意见"
    />
    <p id="remark-error" class="textarea-demo-error">审核意见不能为空，请补充说明。</p>
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
.textarea-demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
