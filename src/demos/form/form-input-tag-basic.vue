<script setup lang="ts">
import { ref } from "vue";
import { AppInputTag } from "aps-design-pro";
import "aps-design-pro/style.css";

const tags = ref(["Vue", "TypeScript"]);
</script>

<template>
  <div class="demo-field">
    <AppInputTag v-model="tags" placeholder="输入技能后按回车" aria-label="技能标签" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 420px); }
</style>
