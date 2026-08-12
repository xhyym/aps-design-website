<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ name: "", level: "" });
const items: FormItem[] = [
  { key: "name", label: "课程名称", type: "input", placeholder: "输入课程名称", span: 6 },
  { key: "level", label: "难度", type: "select", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }], span: 6 },
];

function onSaveDraft() {
  /* 仅保存草稿，不触发校验与提交 */
}
</script>

<template>
  <AppForm v-model="model" :items="items">
    <template #actions>
      <AppButton variant="text" @click="onSaveDraft">保存草稿</AppButton>
    </template>
  </AppForm>
</template>
