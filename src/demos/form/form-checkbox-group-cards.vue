<script setup lang="ts">
import { ref } from "vue";
import { AppCheckboxGroup } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { label: "每周学习报告", value: "report", description: "汇总完成进度与薄弱项" },
  { label: "课程更新提醒", value: "update", description: "新章节上线时发送通知" },
  { label: "活动邀请", value: "activity", description: "接收公开课与直播邀请" },
];
</script>

<template>
  <AppCheckboxGroup v-model="values" :options="options" appearance="cards" :columns="3" aria-label="消息订阅" />
</template>
