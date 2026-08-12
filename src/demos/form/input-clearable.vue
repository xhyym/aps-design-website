<script setup lang="ts">
import { ref } from "vue";
import { AppInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const title = ref("已填好的标题");
</script>

<template>
  <div class="input-demo-clear">
    <AppInput
      v-model="title"
      clearable
      placeholder="输入标题后会出现清空入口"
      aria-label="课程标题"
    />
  </div>
</template>

<style scoped>
.input-demo-clear {
  width: min(100%, 360px);
}
</style>
