<script setup lang="ts">
import { ref } from "vue";
import { AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const courseName = ref("");
</script>

<template>
  <div class="input-demo-field">
    <AppInput
      v-model="courseName"
      clearable
      :max-length="30"
      show-word-limit
      placeholder="输入课程名称"
      aria-label="课程名称"
    />
  </div>
</template>

<style scoped>
.input-demo-field {
  width: min(100%, 360px);
}
</style>
