<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("");
const statusOptions = [{ label: "全部状态", value: "" }, { label: "已发布", value: "published" }, { label: "草稿", value: "draft" }];

function onQuery() {
  /* 自行接管查询逻辑 */
}
</script>

<template>
  <AppFilterBar :show-reset="false" @submit="onQuery">
    <AppInput v-model="keyword" placeholder="搜索课程名称" />
    <AppSelect v-model="status" :options="statusOptions" placeholder="选择状态" />
    <template #actions>
      <AppButton type="submit">查询</AppButton>
    </template>
  </AppFilterBar>
</template>
