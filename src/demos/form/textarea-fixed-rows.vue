<script setup lang="ts">
import { ref } from "vue";
import { AppTextarea } from "aps-design-pro";
import "aps-design-pro/style.css";

const intro = ref("");
</script>

<template>
  <div class="textarea-demo-field">
    <AppTextarea
      v-model="intro"
      :rows="6"
      placeholder="未开启自适应，高度固定为 6 行"
      aria-label="固定行高文本域"
    />
  </div>
</template>

<style scoped>
.textarea-demo-field {
  width: min(100%, 460px);
}
</style>
