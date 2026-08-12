<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref<string[]>(["Vue"]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" invalid described-by="tags-error" aria-label="错误标签" />
    <p id="tags-error" class="demo-error">标签数量不符合要求。</p>
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
.demo-error {
  margin: 6px 0 0;
  color: var(--aps-danger, #d4380d);
  font-size: 13px;
}
</style>
