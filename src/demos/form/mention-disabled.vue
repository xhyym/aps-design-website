<script setup lang="ts">
import { ref } from "vue";
import { AppMention } from "aps-design-pro";
import "aps-design-pro/style.css";

const disabledContent = ref("请 @林晨 跟进");
const readonlyContent = ref("关联 #课程运营");
const options = [
  { key: "lin", label: "林晨", value: "林晨", description: "产品设计" },
];
</script>

<template>
  <div class="demo-stack">
    <AppMention v-model="disabledContent" :options="options" disabled aria-label="禁用提及" />
    <AppMention v-model="readonlyContent" :options="options" readonly aria-label="只读提及" />
  </div>
</template>

<style scoped>
.demo-stack {
  display: grid;
  gap: 12px;
  width: min(100%, 520px);
}
</style>
